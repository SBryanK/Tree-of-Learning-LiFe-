# Verification record — GenAI Quest foundation checkpoint

22 October 2026, Asia/Singapore. Story: a learner opens the local artifact → reads a source-linked lesson → answers recall/practice or changes a lab → sees feedback and review state → retains local notes/progress or exports/imports JSON. There is no application server API, database, AWS call or external account boundary in this build.

## Actually tested in the browser

- Dashboard → Continue learning → correct lesson, full source/learning content visible.
- Recall model answer hidden until reveal. Focus mode removes navigation; exit restores it.
- Lesson notes filled, page reloaded, note retained in current browser localStorage.
- Search “vektor” returned the embeddings lesson; glossary “tumpang tindih” returned Overlap. Guess answer absent before reveal and visible after.
- Clicked concept node and opened its lesson; diagram/list toggle worked.
- Submitted wrong quiz answer: all four option explanations displayed, 0 XP. Retried correctly: 10 XP. Retried correctly again: remained 10 XP. Error log still contained the original wrong answer.
- Cosine lab showed 0.7071 for (1,0) and (1,1), 39.06 MiB raw float32 payload; zero-vector slider state produced “undefined” handling.
- Chunk overlap changed live output; zero-overlap example showed no duplicated words. Lab explicitly uses whitespace words, not AWS tokenization.
- Tenant filter disabled: other-tenant document entered top-k and visible leak-risk feedback appeared. Scores clearly labelled synthetic.
- Invalid JSON example showed type/extra-field failures. Policy slider from 0.8 to 1.0 years produced eligible=true only with fullTime=true.
- Export produced a real JSON file in Downloads. Invalid import rejected without changing progress. Valid exported file imported after UI confirmation. Blank fixture imported to remove only the test-created history/notes.

## Logic/data tests (not browser evidence)

`tests/logic.cjs`: 13 test groups passed, including 14 lessons / 42 unique questions / 682 index entries; every available learning objective mapped to practice; all p. 17–74 referenced and all lesson jargon/prerequisites resolve; read action grants no XP/mastery; actual wrong/retry/error preservation; XP deduplication; repeated success separated by ≥24h; import validation/recalculation of correctness/escaping; cosine and payload, chunk count, filter, JSON validation, AND threshold, quadratic roots, citation ratios and all view rendering paths.

These use a VM with a DOM mock. They are not a substitute for clicking every question in a real browser. Spaced mastery used synthetic historical timestamps; a real day was not spent waiting.

## Responsive and visual checks

- Desktop 1440×1000 and mobile 390×844, plus default in-app width 735.
- Settled dashboard first-viewport and full-page captures inspected. Initial viewport-switch captures were invalid (stale layout/black region) and discarded/replaced after reload; they were not used as passing evidence.
- Desktop concept-map and mobile map/lesson captures inspected. Global mobile map overflow found and fixed; final DOM clientWidth=390, scrollWidth=390. Diagram retains internal pan and an accessible list alternative.
- Mobile Continue action moved before the longer mission explanation so it is visible sooner.
- Keyboard-native controls, semantic labels, focus CSS and reduced-motion CSS inspected. Sliders were operated with keyboard keys in browser tests. No exhaustive screen-reader or physical-phone audit performed.
- Mechanical design detector ran once in degraded regex mode because optional parser modules were unavailable. Width transition and chromatic shadow findings were fixed. Degraded output is not claimed as a complete contrast/accessibility audit.

## Limits and unfinished work

- Whole source coverage remains unfinished: p. 75–682 indexed only. The objective audit covers the 28 objectives currently authored, not the entire certification blueprint.
- No cloud lab/service or live model invocation was executed. Labs are deterministic teaching examples except explicitly fixed synthetic similarity scores.
- File-origin/browser-specific storage, private mode and import/download permissions can differ outside the tested in-app browser. Offline HTML has all code/content inline; no CDN or network dependency.
- Local PDF connection and page opening were inspected in code; PDF viewer page-fragment behavior is browser-dependent and was not claimed as tested.
- Direct file:// browser verification was blocked by the in-app browser URL policy (http/https only). No workaround was attempted. The identical self-contained build was tested over the pre-existing loopback HTTP preview; offline file-origin behavior was inspected in code, not verified in this browser.
- Not all combinations of settings, every MCQ UI path or assistive technologies were tested. No claim of certification readiness or exam-score prediction.

## Independent finish review

Full review in REVIEW.md identified two bounded findings: study-duration consistency and mobile map font scale. Both were corrected. VERDICT.md scored both resolved with disposition ship; that verdict covers those two fixes only. Browser confirmed 60 minutes/day displays 11 days; default 90 minutes/day displays 7. SVG width 710px in a 390px page remains internally pannable while document scrollWidth stays 390. This report distinguishes a working foundation checkpoint from full-course completion.

## 23 October interaction refinement

Current suite: 19 meaningful VM/data groups pass. Added backward-compatible checkpoint import validation, correctness recomputation, latest-answer milestone gating, checkpoint-alone rejection, checkpoint XP deduplication, guided rendering for every step of all 14 lessons, and actual quick-check recording. Read/self-assessment, original review logic and source boundaries preserved.

Browser evidence on isolated `?qa=1` learner state: dashboard → guided foundation → mechanism next (explanation changes) → quick check wrong (0 XP and every option explained) → retry correct (10 XP) → milestone checkpoint correct (30 XP total) while milestone remains incomplete → reload retains 30 XP. Export creates a JSON download; import of legacy blank fixture gives 0 XP; restore of exported checkpoint state gives 30 XP and success feedback. Keyboard Tab moves to a visible focus ring. Desktop1440, tablet900, mobile390 inspected; mobile guided and milestone views report scrollWidth=viewport width; no warnings/errors in tested flow. Saved screenshots under screenshots/v2-*.png.

The first preview connection failed because the previous session's server had stopped; a new loopback server returned HTTP200 and the new QA tab loaded. A stale browser error page blocked its own navigation; no file-URL bypass was attempted.

The design detector was run once on changed source. It reported advisory literal font-size/color differences relative to the earlier DESIGN record. These are design-documentation drift, not evidence of browser accessibility conformance. No full screen-reader, real-device, cross-browser or actual ChatGPT web session test is claimed. Publication status is recorded separately after native deployment.

Final interaction confirmation: milestone-ready fixture → “Coba checkpoint” focuses and scrolls directly to checkpoint heading at viewport top on mobile390. Actual checkpoint answer completes the integration milestone only with its 6/6 baseline evidence. Keyboard Enter on mechanism-next restores focus to selected mechanism; retries restore focus to first option. Bounded independent review in REVIEW-V2.md confirmed the two fixes resolved.
