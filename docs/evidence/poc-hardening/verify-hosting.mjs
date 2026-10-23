import assert from 'node:assert/strict';
import {spawn,execFileSync} from 'node:child_process';
import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
import {chromium} from 'playwright';
const root=process.cwd().replaceAll('\\','/');
const fixture=root+'/node_modules/.cache/root-hardening';
await mkdir(fixture,{recursive:true});
for(const name of ['src','public','tools','index.html','package.json','vite.config.ts'])await cp(root+'/'+name,fixture+'/'+name,{recursive:true});
await writeFile(fixture+'/vite.config.ts',(await readFile(root+'/vite.config.ts','utf8')).replace('base: "/portfolio/"','base: "/"'));
for(const script of ['generate-sitemap.mjs','generate-robots.mjs'])execFileSync(process.execPath,[fixture+'/tools/'+script],{cwd:fixture,stdio:'pipe'});
execFileSync(process.execPath,[root+'/node_modules/vite/bin/vite.js','build'],{cwd:fixture,stdio:'pipe'});
execFileSync(process.execPath,[fixture+'/tools/generate-route-entrypoints.mjs'],{cwd:fixture,stdio:'pipe'});
const servers=[spawn(process.execPath,[root+'/node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4191','--strictPort'],{cwd:root,stdio:'ignore'}),spawn(process.execPath,[root+'/node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4192','--strictPort'],{cwd:fixture,stdio:'ignore'})];
let browser;
try{
 for(const port of [4191,4192])for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${port}/`)).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch();
 const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[],consoleErrors=[],forbidden=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 page.on('request',r=>{if(/data\.taipei|raw\.githubusercontent|\/data\/bridge-policy\/|geographic-verification\.json|taipei-districts.*\.zip/.test(r.url()))forbidden.push(r.url());});
 const config=JSON.parse(await readFile(root+'/src/routes/routeConfig.json','utf8'));
 const routes=config.routes.filter(r=>/^\/(zh\/)?govtech\/[^/]+$/.test(r.path));
 const checked=[];
 for(const [port,base] of [[4191,'/portfolio'],[4192,'']]){
  for(const route of routes){
   await page.goto(`http://127.0.0.1:${port}${base}${route.path}`);await page.locator('h1').waitFor();
   assert.equal(await page.title(),route.title);assert.equal(await page.locator('html').getAttribute('lang'),route.path.startsWith('/zh/')?'zh-Hant':'en');
   assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'),`http://127.0.0.1:${port}${base}${route.path}`);
   await page.reload();await page.locator('h1').waitFor();checked.push({base,route:route.path,direct:true,reload:true});
  }
  await page.goto(`http://127.0.0.1:${port}${base}/unknown-hardening`);await page.waitForURL(/\/404$/);assert.match(await page.locator('meta[name=robots]').getAttribute('content'),/noindex/);
 }
 const viewports=[];
 for(const width of [320,390,768,1024,1440])for(const locale of ['en','zh']){
  await page.setViewportSize({width,height:900});await page.evaluate(locale=>localStorage.setItem('portfolio-locale',locale),locale);await page.goto(`http://127.0.0.1:4192/${locale==='zh'?'zh/':''}govtech/bridge-inspection`);await page.locator('h1').waitFor();
  for(const dark of [false,true]){
   const current=await page.locator('html').evaluate(el=>el.classList.contains('dark'));
   if(current!==dark)await page.getByRole('button',{name:current?'Light':'Dark',exact:true}).filter({visible:true}).click();
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   const color=await page.getByRole('main').locator('..').evaluate(el=>getComputedStyle(el).backgroundColor);assert.equal(color,dark?'rgb(2, 6, 23)':'rgb(248, 250, 252)');
  }
  const table=page.getByRole('table',{name:locale==='en'?'Supplementary official-polygon check · conditional coordinate hypothesis':'官方多邊形補充檢查 · 具明示座標假設',exact:true});
  await table.scrollIntoViewIfNeeded();const region=table.locator('..');await region.focus();
  if(width<768){await region.evaluate(el=>el.scrollLeft=0);await page.keyboard.press('ArrowRight');await page.waitForTimeout(150);assert.ok(await region.evaluate(el=>el.scrollLeft>0));}
  if(width===390&&locale==='zh'){await region.evaluate(el=>el.scrollLeft=0);await page.screenshot({path:root+'/docs/evidence/poc-hardening/geographic-table-mobile-dark.png'});}
  viewports.push({width,locale,themes:2,tableKeyboard:true});
 }
 assert.deepEqual(errors,[]);assert.deepEqual(consoleErrors,[]);assert.deepEqual(forbidden,[]);
 await writeFile(root+'/docs/evidence/poc-hardening/hosting-verification.json',JSON.stringify({routes:checked,unknown404Bases:2,viewports,pageErrors:errors,consoleErrors,forbiddenRequests:forbidden,rootFixture:'Copied current src/public/tools/index/package/Vite config with the same Tailwind4 plugin; changed only base. Metadata generated before build and entries after.'},null,2)+'\n');
 console.log(JSON.stringify({directReloadRoutes:checked.length,viewports:viewports.length,pageErrors:errors,consoleErrors,forbiddenRequests:forbidden}));
}finally{await browser?.close();for(const s of servers)s.kill();}
