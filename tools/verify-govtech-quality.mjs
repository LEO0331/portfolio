import {isResearchPayloadRequest} from './govtech-public-audit.mjs';
import {chromium} from 'playwright';
import {spawn} from 'node:child_process';
import {readFileSync,mkdirSync,writeFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const base=process.env.QUALITY_BASE??'/portfolio/',port=Number(process.env.QUALITY_PORT??4196);
const origin=`http://127.0.0.1:${port}`,out=resolve(root,process.env.QUALITY_OUTPUT_DIR??'docs/evidence/cross-case-quality');mkdirSync(out,{recursive:true});
const config=JSON.parse(readFileSync(resolve(root,'src/routes/routeConfig.json')));
const paths=['','projects','engineering/gridline','govtech',...config.routes.filter(r=>r.path.startsWith('/govtech/')).map(r=>r.path.slice(1))];
const server=spawn(process.execPath,[resolve(root,'node_modules/vite/bin/vite.js'),'preview','--host','127.0.0.1','--port',String(port),'--strictPort','--base',base],{cwd:root,stdio:'ignore'});
let browser;const checks=[],routeChecks=[],errors=[],upstreamRequests=[];
try{
 for(let i=0;i<80;i++){try{if((await fetch(origin+base)).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch();
 const page=await browser.newPage();await page.addInitScript(()=>localStorage.removeItem('portfolio-locale'));await page.route('https://fonts.googleapis.com/**',r=>r.abort());
 for(const route of config.routes.filter(r=>/^\/(?:zh\/)?(?:govtech(?:\/|$)|engineering\/gridline$)/.test(r.path))){
  const url=origin+base+route.path.slice(1);await page.goto(url);await page.locator('h1').waitFor();await page.reload();await page.locator('h1').waitFor();
  const meta=await page.evaluate(()=>({title:document.title,lang:document.documentElement.lang,canonical:document.querySelector('link[rel=canonical]')?.href,description:document.querySelector('meta[name=description]')?.content}));
  const staticEntry=existsSync(resolve(root,'dist',route.path.slice(1),'index.html'));
  routeChecks.push({path:route.path,...meta,staticEntry,pass:meta.canonical===url&&meta.lang===(route.path.startsWith('/zh/')?'zh-Hant':'en')&&meta.title===route.title&&staticEntry&&!/PR\s*#|merged|Codex|\b[a-f0-9]{40,64}\b/i.test(meta.description??'')});
  if(!route.path.startsWith('/zh/')){await page.getByRole('button',{name:'繁中',exact:true}).filter({visible:true}).click();await page.waitForURL(origin+base+'zh/'+route.path.slice(1));await page.locator('html[lang=zh-Hant]').waitFor();}
 }
 await page.goto(origin+base+'unknown-quality-route');await page.waitForURL(origin+base+'404');await page.locator('h1').waitFor();routeChecks.push({path:'unknown',heading:await page.locator('h1').innerText(),pass:page.url()===origin+base+'404'&&!!(await page.locator('meta[name=robots]').getAttribute('content'))?.includes('noindex')});await page.close();
 const jobs=[320,390,768,1024,1440].flatMap(width=>['en','zh'].flatMap(locale=>['light','dark'].map(theme=>({width,locale,theme}))));
 const runJob=async({width,locale,theme})=>{
  const context=await browser.newContext({viewport:{width,height:900},colorScheme:theme});await context.addInitScript(t=>localStorage.setItem('portfolio-theme',t),theme);
  const p=await context.newPage();await p.route('https://fonts.googleapis.com/**',r=>r.abort());
  p.on('pageerror',e=>errors.push({width,locale,theme,message:e.message}));
  p.on('console',m=>{if(m.type()==='error'&&!m.location().url.includes('fonts.googleapis.com'))errors.push({width,locale,theme,scope:'console',message:m.text()});});
  p.on('request',r=>{if(isResearchPayloadRequest(r.url()))upstreamRequests.push(r.url());});
  for(const path of paths){
   await p.goto(origin+base+(locale==='zh'?'zh/':'')+path,{waitUntil:'networkidle'});await p.locator('h1').waitFor();
   const result=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,dark:document.documentElement.classList.contains('dark'),duplicateIds:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i),cards:document.querySelectorAll('#govtech-cases').length?document.querySelector('#govtech-cases').closest('section').querySelectorAll('article').length:0,missingTableCaptions:[...document.querySelectorAll('table')].filter(t=>!t.querySelector('caption')).length}));
   for(const img of await p.locator('main img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode().catch(()=>{}));}
   const brokenImages=await p.locator('main img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.currentSrc));
   const caseRouteCount=config.routes.filter(r=>r.path.startsWith('/govtech/')&&r.key!=='govtech-explore').length;
   const pass=!result.overflow&&result.dark===(theme==='dark')&&!result.duplicateIds.length&&!result.missingTableCaptions&&!brokenImages.length&&(path!=='govtech'||result.cards===caseRouteCount);
   checks.push({width,locale,theme,path,...result,brokenImages,pass});
   const capture=(width===1440&&locale==='en'&&theme==='light')||(width===390&&locale==='zh'&&theme==='dark')||(path==='govtech'&&locale==='en'&&theme==='light');
   if(capture){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:resolve(out,`qa-${path.replaceAll('/','-')||'home'}-${locale}-${width}-${theme}.png`)});}
   if(path.startsWith('govtech/')){
    for(const table of await p.locator('table:visible').all()){await table.scrollIntoViewIfNeeded();await table.locator('..').evaluate(e=>{e.scrollLeft=e.scrollWidth;});}
    const technical=p.locator('details[data-source-identifiers]');await technical.locator('summary').focus();await p.keyboard.press('Enter');
    if(width===390&&locale==='zh'&&theme==='dark'&&/wifi|bridge|senior-community-care|food-hygiene-inspection/.test(path))await p.screenshot({path:resolve(out,`qa-evidence-${path.split('/')[1]}.png`)});
    if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))checks.at(-1).pass=false;
   }
  }
  await context.close();console.log(JSON.stringify({width,locale,theme,checked:paths.length}));
 };
 if(process.env.QUALITY_ROUTES_ONLY!=='1')await Promise.all(Array.from({length:4},async()=>{while(jobs.length)await runJob(jobs.shift());}));
 checks.sort((a,b)=>a.width-b.width||a.locale.localeCompare(b.locale)||a.theme.localeCompare(b.theme)||a.path.localeCompare(b.path));
 const output=resolve(out,`browser-${base==='/'?'root':'pages'}.json`);
 const prior=process.env.QUALITY_ROUTES_ONLY==='1'&&existsSync(output)?JSON.parse(readFileSync(output)):null;
 if(prior){checks.push(...prior.checks);errors.push(...prior.errors);upstreamRequests.push(...prior.upstreamRequests);}
 const report={base,scope:'Real local Chromium production preview. Font stylesheet blocked consistently; not a production/Lighthouse score. Screenshot review recorded separately.',routeChecks,checks,errors,upstreamRequests:[...new Set(upstreamRequests)],pass:routeChecks.every(r=>r.pass)&&checks.every(r=>r.pass)&&!errors.length&&!upstreamRequests.length};
 writeFileSync(resolve(out,`browser-${base==='/'?'root':'pages'}.json`),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({base,routes:routeChecks.length,matrix:checks.length,pass:report.pass,failures:checks.filter(c=>!c.pass),routeFailures:routeChecks.filter(c=>!c.pass),errors}));if(!report.pass)process.exitCode=1;
}finally{await browser?.close();server.kill();}
