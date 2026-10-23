from pathlib import Path
import json, hashlib

ROOT = Path(__file__).resolve().parent
DIST = ROOT / 'dist'
pages_file = ROOT / 'research/pages.json'
if pages_file.exists():
    pages = json.loads(pages_file.read_text())
    index = [{'page':p['page'],'title':p['title']} for p in pages]
    (DIST / 'coverage.js').write_text('const PAGE_INDEX='+json.dumps(index,ensure_ascii=False)+';\n')
else:
    assert (DIST / 'coverage.js').exists(), 'A coverage index or private page metadata is required'
html=(DIST/'index.template.html').read_text()
for marker,name in [('CSS','style.css'),('CONTENT','content.js'),('PRACTICE','practice.js'),('COVERAGE','coverage.js'),('EXPERIENCE','experience.js'),('APP','app.js')]:
    html=html.replace('/*__'+marker+'__*/',(DIST/name).read_text())
assert '/*__' not in html
(DIST/'index.html').write_text(html)
(ROOT/'GenAI-Quest.html').write_text(html)
print(f'Built offline artifact: {len(html.encode()):,} bytes, sha256 {hashlib.sha256(html.encode()).hexdigest()[:16]}')
