import {chromium} from 'playwright';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import {spawn} from 'node:child_process';
import {mkdir,writeFile,readFile,readdir} from 'node:fs/promises';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const stage=process.argv[2]??'baseline';const out=root+'/docs/evidence/govtech-v2.0';await mkdir(out,{recursive:true});
const server=spawn(process.execPath,[root+'/node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4195','--strictPort'],{cwd:root,stdio:'ignore'});let browser;
try{
 for(let i=0;i<80;i++){try{if((await fetch('http://127.0.0.1:4195/portfolio/')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await chromium.launch();const measurements=[];
 for(const [name,path]of [['home',''],['projects','projects'],['govtech','govtech'],['bridge','govtech/bridge-inspection'],...(stage==='baseline'?[]:[['senior-care','govtech/senior-community-care'],['food-hygiene','govtech/food-hygiene-inspection'],['food-hygiene-zh','zh/govtech/food-hygiene-inspection']])]){
  const page=await browser.newPage({viewport:{width:1440,height:900}});const errors=[],failed=[],requests=[];
  await page.route('https://fonts.googleapis.com/**',route=>route.abort());
  page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));page.on('requestfailed',r=>failed.push({url:r.url(),reason:r.failure()?.errorText}));
  await page.goto('http://127.0.0.1:4195/portfolio/'+path,{waitUntil:'networkidle'});await page.locator('h1').waitFor();
  measurements.push({name,path,errors,failed,requests,...await page.evaluate(()=>({resources:performance.getEntriesByType('resource').map(e=>({name:e.name,duration:e.duration,transferSize:e.transferSize,encodedBodySize:e.encodedBodySize})),domElements:document.querySelectorAll('*').length,bodyOverflow:document.documentElement.scrollWidth>innerWidth,brokenLoadedImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.currentSrc)}))});
  if(['govtech','bridge','senior-care','food-hygiene','food-hygiene-zh'].includes(name))await page.screenshot({path:out+'/'+stage+'-'+name+'-desktop.png'});
  if(name==='food-hygiene-zh'){await page.setViewportSize({width:390,height:900});await page.locator('button[data-theme-toggle]').filter({visible:true}).click();await page.screenshot({path:out+'/'+stage+'-food-hygiene-mobile-dark.png'});}
  await page.close();
 }
 const assets=[];for(const file of await readdir(root+'/dist/assets'))if(/\.([cm]?js|css)$/.test(file))assets.push({filename:file,bytes:(await readFile(root+'/dist/assets/'+file)).length});
 const staticEntries=[];for(const m of measurements){const file=root+'/dist/'+(m.path?m.path+'/':'')+'index.html';staticEntries.push({route:m.path||'/',bytes:(await readFile(file)).length});}
 await writeFile(out+'/'+stage+'-performance.json',JSON.stringify({scope:'Local production preview; fresh context per route; fonts.googleapis.com deliberately blocked consistently for reproducible before/after captures, recorded separately from app errors. No production performance score.',measurements,assets,staticEntries},null,2)+'\n');
 console.log(JSON.stringify(measurements.map(m=>({name:m.name,jsBytes:m.resources.filter(r=>r.name.endsWith('.js')).reduce((n,r)=>n+r.encodedBodySize,0),requests:m.requests.length,errors:m.errors,bodyOverflow:m.bodyOverflow}))));
}finally{await browser?.close();server.kill();}
