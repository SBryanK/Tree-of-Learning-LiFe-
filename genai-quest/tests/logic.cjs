const fs=require('fs'),vm=require('vm'),assert=require('assert');
const nodes=new Map(),eventHandlers={};
function node(id){if(!nodes.has(id))nodes.set(id,{innerHTML:'',textContent:'',value:'',checked:false,hidden:false,focus(){},click(){},addEventListener(){},setAttribute(){},scrollIntoView(){},classList:{add(){},remove(){},contains(){return false},toggle(){}}});return nodes.get(id);}
const storage=new Map();
const sandbox={console,setTimeout(){},clearTimeout(){},Blob,URL,Date,Math,Set,FormData:class{},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:'#dashboard'},document:{querySelector:s=>node(s),querySelectorAll:()=>[],getElementById:id=>node('#'+id),body:{classList:{add(){},remove(){},contains(){return false},toggle(){}}}},window:{scrollTo(){},scrollY:0,addEventListener(){}}};
sandbox.document.addEventListener=(type,fn)=>eventHandlers[type]=fn;
vm.createContext(sandbox);
for(const f of ['content.js','practice.js','coverage.js','experience.js','app.js'])vm.runInContext(fs.readFileSync(__dirname+'/../dist/'+f,'utf8'),sandbox,{filename:f});
let checks=0;
function test(label,fn){fn();checks++;console.log('PASS '+label);}
function run(s){return vm.runInContext(s,sandbox);}
test('Data inventory and all objective mappings',()=>{
 assert.equal(run('LESSONS.length'),14);assert.equal(run('QUESTIONS.length'),42);assert.equal(run('PAGE_INDEX.length'),682);
 assert.equal(run('new Set(QUESTIONS.map(q=>q.id)).size'),42);
 assert(run('QUESTIONS.every(q=>q.options.length===4&&q.why.length===4&&q.answer>=0&&q.answer<4&&byId(q.lesson)&&q.obj.every(i=>i<byId(q.lesson).objectives.length))'));
 assert(run('LESSONS.every(l=>l.objectives.every((_,i)=>QUESTIONS.some(q=>q.lesson===l.id&&q.obj.includes(i))))'));
 assert(run('LESSONS.every(l=>l.terms.every(t=>GLOSSARY.some(g=>g.term===t)))'));
 assert(run('LESSONS.every(l=>l.prereq.every(id=>byId(id)))'));
 assert(run('Array.from({length:58},(_,i)=>i+17).every(p=>LESSONS.some(l=>l.pages.includes(p)))'));
});
test('Page opening and self-assessed reading do not create mastery or XP',()=>{
 run('state=blankState();state.read.foundation=true');assert.equal(run('xp()'),0);assert.equal(run('status("foundation")'),'read');
});
test('Actual wrong answers create review; retry correct preserves history',()=>{
 run('record(questionById("f1"),1)');assert.equal(run('status("foundation")'),'review');assert.equal(run('xp()'),0);
 run('record(questionById("f1"),0)');assert.equal(run('state.attempts.length'),2);assert.equal(run('status("foundation")'),'practiced');assert.equal(run('xp()'),10);
 assert.equal(run('state.attempts.filter(a=>!a.correct).length'),1);
});
test('Retry cannot farm XP',()=>{run('record(questionById("f1"),0)');assert.equal(run('xp()'),10);});
test('Stronger evidence requires successful repeated checks separated by 24h',()=>{
 run('state=blankState(); for(const q of QUESTIONS.filter(q=>q.lesson==="foundation")){state.attempts.push({q:q.id,choice:q.answer,correct:true,at:Date.now()-DAY-1000});state.attempts.push({q:q.id,choice:q.answer,correct:true,at:Date.now()});}');
 assert.equal(run('status("foundation")'),'strong');run('state.confused.foundation=true');assert.equal(run('status("foundation")'),'review');
 run('state.confused.foundation=false; state.attempts.push({q:"f1",choice:1,correct:false,at:Date.now()})');assert.equal(run('status("foundation")'),'review');
});
test('Export/import round trip and invalid import rejection',()=>{
 run('state=blankState();state.notes.foundation="<img src=x onerror=alert(1)>";record(questionById("f1"),0);');
 assert.equal(run('JSON.stringify(validState(JSON.parse(JSON.stringify(state))))'),run('JSON.stringify(state)'));
 assert.throws(()=>run('validState({schema:99})'));
 assert.throws(()=>run('validState({...blankState(),attempts:[{q:"unknown",choice:0,at:1}]})'));
 assert.throws(()=>run('validState({...blankState(),notes:{missing:"x"}})'));
 assert.equal(run('esc(state.notes.foundation)'), '&lt;img src=x onerror=alert(1)&gt;');
 run('state.attempts[0].correct=false');assert(run('validState(state).attempts[0].correct'));
});
test('Cosine values, zero vector and float32 storage arithmetic',()=>{
 for(const [id,v]of Object.entries({qx:1,qy:0,dx:1,dy:1,dimensions:1024}))node('#'+id).value=v;
 run('updateCosine()');assert(node('#cosine-output').innerHTML.includes('0.7071'));assert(node('#cosine-output').innerHTML.includes('39.06 MiB'));
 node('#dx').value=0;node('#dy').value=1;run('updateCosine()');assert(node('#cosine-output').innerHTML.includes('0.0000'));
 node('#qx').value=0;run('updateCosine()');assert(node('#cosine-output').innerHTML.includes('Undefined for a zero vector'));
});
test('Chunk window arithmetic and HTML escaping',()=>{
 node('#chunk-size').value=12;node('#chunk-overlap').value=3;node('#chunk-text').value=Array(30).fill('word').join(' ');run('updateChunk()');
 assert(node('#chunk-output').innerHTML.includes('3 chunks'));assert(node('#chunk-output').innerHTML.includes('36 kata disimpan'));
 node('#chunk-text').value='<b>unsafe</b>';run('updateChunk()');assert(node('#chunk-output').innerHTML.includes('&lt;b&gt;unsafe'));
 const n=1000,c=300,o=60;assert.equal(1+Math.ceil((n-c)/(c-o)),4);
});
test('Tenant filtering changes eligibility, not synthetic scores',()=>{
 node('#tenant').value='A';node('#scope-filter').checked=true;node('#active-filter').checked=true;node('#retrieval-k').value=2;run('updateRetrieval()');
 assert(node('#retrieval-output').innerHTML.includes('dalam scope tenant'));
 node('#scope-filter').checked=false;run('updateRetrieval()');assert(node('#retrieval-output').innerHTML.includes('Risiko kebocoran'));
});
test('JSON syntax, schema and semantic checks remain distinct',()=>{
 node('#json-input').value='{bad';run('validateJSON()');assert(node('#json-output').innerHTML.includes('Syntax failed'));
 node('#json-input').value='{"category":"delivery","summary":42}';run('validateJSON()');assert(node('#json-output').innerHTML.includes('Schema failed'));
 node('#json-input').value='{"category":"billing","summary":"x"}';run('validateJSON()');assert(node('#json-output').innerHTML.includes('Semantic conflict'));
 node('#json-input').value='{"category":"delivery","summary":"<script>"}';run('validateJSON()');assert(node('#json-output').innerHTML.includes('&lt;script&gt;'));
});
test('Policy boundary uses >= and both conditions',()=>{
 node('#fulltime').checked=true;node('#years').value=1;run('updatePolicy()');assert(node('#policy-output').innerHTML.includes('<h2>Eligible'));
 node('#fulltime').checked=false;run('updatePolicy()');assert(node('#policy-output').innerHTML.includes('Not eligible'));
});
test('Quadratic and citation worked examples',()=>{
 for(const x of [3,-1])assert.equal(2*x*x-4*x-6,0);
 assert.equal(4/5,.8);assert.equal(3/4,.75);
});
test('Milestones require latest practice evidence, labs and checkpoint, not reading',()=>{
 run('state=blankState()');
 assert.equal(run('LESSONS.reduce((s,l)=>s+l.minutes,0)+210+84'),623);
 assert.equal(run('milestoneAction("bedrock").kind'),'journey');
 run('for(const id of MODULES[0].lessons)state.read[id]=true');
 assert.equal(run('milestoneStats("bedrock").complete'),false);
 assert.equal(run('milestoneAction("bedrock").kind'),'practice');
 run('for(const q of QUESTIONS.filter(q=>MODULES[0].lessons.includes(q.lesson)))record(q,q.answer)');
 assert.equal(run('milestoneAction("bedrock").kind'),'lab');
 run('state.labs.architecture=true;state.labs.cosine=true');
 assert.equal(run('milestoneStats("bedrock").ready'),true);
 assert.equal(run('milestoneStats("bedrock").complete'),false);
 run('state.milestoneAttempts.push({id:"bedrock",choice:1,correct:true,at:Date.now()})');
 assert.equal(run('milestoneStats("bedrock").complete'),true);
 assert.equal(run('status("foundation")'),'practiced');
 run('record(questionById("f1"),1)');
 assert.equal(run('milestoneStats("bedrock").complete'),false);
 assert.equal(run('milestoneStats("bedrock").correct'),11);
 assert.equal(run('milestoneAction("bedrock").kind'),'practice');
 run('record(questionById("f1"),0);state.confused.rag=true');
 assert.equal(run('milestoneStats("bedrock").complete'),false);
 run('state.confused.rag=false');assert.equal(run('milestoneStats("bedrock").complete'),true);
});
test('Checkpoint imports are backward compatible and recompute correctness',()=>{
 run('state=blankState();delete state.milestoneAttempts');
 assert.equal(run('validState(state).milestoneAttempts.length'),0);
 run('state=validState(state)');
 assert.throws(()=>run('validState({...state,milestoneAttempts:[{id:"unknown",choice:0,at:1}]})'));
 assert.throws(()=>run('validState({...state,milestoneAttempts:[{id:"bedrock",choice:4,at:1}]})'));
 assert.throws(()=>run('validState({...state,milestoneAttempts:[{id:"bedrock",choice:1,at:-1}]})'));
 assert.equal(run('validState({...state,milestoneAttempts:[{id:"bedrock",choice:1,correct:false,at:1}]}).milestoneAttempts[0].correct'),true);
});
test('Checkpoint alone never completes milestone and retry cannot farm XP',()=>{
 run('state=blankState();state.milestoneAttempts.push({id:"enterprise",choice:0,correct:true,at:Date.now()})');
 assert.equal(run('xp()'),20);assert.equal(run('milestoneStats("enterprise").complete'),false);
 run('state.milestoneAttempts.push({id:"enterprise",choice:0,correct:true,at:Date.now()})');assert.equal(run('xp()'),20);
 run('for(const q of QUESTIONS.filter(q=>MODULES[3].lessons.includes(q.lesson)))record(q,q.answer)');
 assert.equal(run('milestoneStats("enterprise").complete'),true);
 run('state.milestoneAttempts.push({id:"enterprise",choice:1,correct:false,at:Date.now()})');
 assert.equal(run('milestoneStats("enterprise").complete'),false);assert.equal(run('milestoneStats("enterprise").needsReview'),true);
 assert.equal(run('validState(JSON.parse(JSON.stringify(state))).milestoneAttempts.length'),3);
});
test('All guided steps render real content; submitting records an actual answer',()=>{
 run('state=blankState()');
 for(const id of run('LESSONS.map(l=>l.id)'))for(let step=0;step<4;step++){
  run(`renderJourney('${id}');journeyUI.step=${step};renderJourney('${id}')`);
  assert(node('#main').innerHTML.includes('Buka materi lengkap & catatan'));
  assert(!node('#main').innerHTML.includes('undefined'));
  if(step===3)assert(!node('#main').innerHTML.includes('explanation-row'));
 }
 run('renderJourney("foundation");journeyUI.step=3;journeyUI.choice=0;experienceClick({dataset:{experience:"submit-journey"}})');
 assert.equal(run('state.attempts.length'),1);assert.equal(run('xp()'),10);
 assert(node('#main').innerHTML.includes('explanation-row'));
 run('experienceClick({dataset:{experience:"submit-journey"}})');assert.equal(run('state.attempts.length'),1);
 run('state=blankState()');
});
test('Guided explanations use real lesson content and keep recall answers hidden',()=>{
 for(const id of run('LESSONS.map(l=>l.id)')){
  for(const step of ['intuition','flow','example','recall']){run(`guideStep='${step}'`);const html=run(`guideMarkup('${id}')`);assert(html.includes('aria-pressed="true"'));if(step==='recall')assert(html.includes('<details class="detail"><summary>Reveal'));}
 }
});
test('Checkpoint next action points to its focused heading',()=>{
 run('state=blankState();for(const q of QUESTIONS.filter(q=>MODULES[3].lessons.includes(q.lesson)))record(q,q.answer)');
 assert.equal(run('milestoneAction("enterprise").kind'),'checkpoint');
 assert(run('actionButton(milestoneAction("enterprise")).includes("data-open-checkpoint")'));
 run('location.hash="#milestones/enterprise";renderMilestones("enterprise");experienceClick({dataset:{openCheckpoint:"enterprise"}})');
});
test('Every view renders in mock DOM without runtime exceptions',()=>{
 for(const code of ['renderStudioDashboard()','renderMilestones()','renderLessons()','renderMap()','renderGlossary()','renderPractice()','renderRevision()','renderCoverage()','renderSettings()'])run(code);
 for(const id of run('LESSONS.map(l=>l.id)'))run(`renderLesson('${id}')`);
 for(const id of run('MILESTONES.map(m=>m.id)'))run(`renderMilestones('${id}')`);
 run('startRun(QUESTIONS.slice(0,3));renderQuiz();run.index=3;renderResults()');
});
console.log(`\n${checks} logic/data groups passed. These are VM checks, not browser interaction tests.`);
