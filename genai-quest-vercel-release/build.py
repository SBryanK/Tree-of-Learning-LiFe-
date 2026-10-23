from pathlib import Path
import hashlib
root=Path(__file__).resolve().parent
dist=root/'dist'
html=(dist/'index.template.html').read_text()
for marker,name in [('CSS','style.css'),('CONTENT','content.js'),('PRACTICE','practice.js'),('COVERAGE','coverage.js'),('MILESTONES','milestones.js'),('APP','app.js')]:
 html=html.replace('/*__'+marker+'__*/',(dist/name).read_text())
assert '/*__' not in html
(dist/'index.html').write_text(html)
(root/'GenAI-Quest.html').write_text(html)
print('Built',len(html.encode()),'bytes;',hashlib.sha256(html.encode()).hexdigest()[:16])
