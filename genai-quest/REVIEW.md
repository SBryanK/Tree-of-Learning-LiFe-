disposition: fix

## Disposition

Fix the two bounded usability defects below, then score the fixes. No rebuild is warranted. This review covers the declared foundation checkpoint, not completion of the 682-page course.

## Capture validity

Opened desktop.png, desktop-front.png, mobile.png, mobile-front.png, map-desktop.png, map-mobile.png, lesson-mobile.png and lesson-mobile-front.png under `.impeccable/review/`. The captures are nonblank, begin at the expected document top, show the named surfaces, and have plausible desktop/mobile dimensions. The full mobile documents are long but intact. The earlier user-735.png is excluded as instructed. The map-desktop capture contains an older adaptation subtitle than the current source/mobile capture; the topology and dimensions remain reviewable.

## Material findings

1. **[P2] The dashboard's seven-day claim contradicts its capacity estimate.** `/Users/sbryank/.codex/.chatgpt-projects/g-p-6ab71cb78f6c81919b836e9b1387b187/genai-quest/dist/app.js:92` says seven days is reasonable at 60–120 minutes/day and keeps a seven-day heading after capacity changes. The estimate at `dist/app.js:190` totals 623 minutes, which takes 11 days at 60 minutes/day and 21 at 30. A learner can follow the settings yet receive an infeasible dashboard promise. **Fix:** identify the seven-session itinerary's baseline as 90–120 minutes/day and show the same capacity-derived duration used in settings; explicitly split sessions over more days below that baseline. Rebuild the bundled HTML from the corrected source.

2. **[P2] Mobile diagram text is below a usable reading size.** `/Users/sbryank/.codex/.chatgpt-projects/g-p-6ab71cb78f6c81919b836e9b1387b187/genai-quest/dist/style.css:2` sets `.map-svg` to `min-width:430px`, while `dist/app.js:151` gives it a 710-unit viewBox with 12–16-unit labels. At the 390px capture this produces approximately 7–10px text; panning reveals cropped nodes without making their labels readable. The accessible list is a working escape path, but the promised clickable diagram remains difficult to study. **Fix:** keep the SVG at least 710 CSS pixels wide inside its existing horizontal pan container, or default narrow screens to the readable list with an explicit diagram toggle. Preserve the container's corrected document-width containment. Re-capture mobile map after the change.

## Quality / craft assessment

The captured artifact follows the code-first contract: deep teal navigation, pale reading surface, amber continuation action, mint geometric diagrams, and open learning-path rows. The mobile mission reversal places the actionable lesson first. Reading typography has clear hierarchy and adequate separation; there is no need to add ornamental imagery. Source coverage, XP limits, self-assessment and stronger evidence are differentiated in the captured dashboard and source code. The pages 75–682 gap is expressly unfinished, not disguised as course mastery. Preserve those boundaries, the useful learning content, local persistence, and the list alternative while fixing the two defects.

## Verification limits

Read-only review of supplied captures, PRODUCT.md, the direction contract, craft floor, and sampled primary source. No browser, server, detector rerun, PDF reread, full question-bank validation, assistive-technology session, or independent execution of the reported tests was performed. The parent's browser verification and 13 test-group result are reported evidence rather than independently repeated proof. No approved comp or quality-bar challenger was supplied; this is a contract-based code-first review. Missing design documentation is not treated as a defect because it is scheduled after finish review. No external publication occurred in this review.
