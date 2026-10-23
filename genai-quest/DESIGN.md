---
name: GenAI Quest
description: A bilingual learning atlas with a pale blue study desk and clear evidence of learning.
colors:
  ink: "#172f38"
  muted: "#52666e"
  paper: "#f5f8f8"
  surface: "#fff"
  line: "#d9e2e5"
  teal: "#075e63"
  teal-dark: "#083e44"
  mint: "#d6eeea"
  amber: "#f4bd68"
  amber-ink: "#624015"
  blue: "#38569c"
  red: "#9c383a"
  red-bg: "#fae8e7"
  green: "#225e43"
  green-bg: "#e0f1e8"
  road-line: "#aac4c2"
  road-marker: "#95b5b1"
  mechanism-bg: "#e9f2f0"
typography:
  display:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "clamp(1.85rem, 3.5vw, 2.8rem)"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-.025em"
  headline:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-.025em"
  title:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-.025em"
  body:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: ".93rem"
    fontWeight: 600
    lineHeight: 1.65
  button:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.4
  formula:
    fontFamily: "ui-monospace, monospace"
    fontSize: ".85rem"
    fontWeight: 400
    lineHeight: 1.65
  milestone-title:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-.025em"
  milestone-evidence:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: ".77rem"
    fontWeight: 400
    lineHeight: 1.65
  journey-stage:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: ".87rem"
    fontWeight: 650
    lineHeight: 1.4
  journey-lead:
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "1.06rem"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  badge: "6px"
  field: "8px"
  control: "9px"
  surface: "14px"
spacing:
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "42": "42px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: ".6rem .95rem"
  button-primary-hover:
    backgroundColor: "{colors.teal-dark}"
  button-gold:
    backgroundColor: "{colors.amber}"
    textColor: "#372b14"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: ".6rem .95rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: ".6rem .95rem"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.teal}"
    typography: "{typography.button}"
    padding: ".35rem 0"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: ".65rem .8rem"
  navigation-active:
    backgroundColor: "{colors.mint}"
    textColor: "#113e43"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "11px 12px"
  filter-selected:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  status-badge:
    backgroundColor: "#e8eeee"
    textColor: "#455c63"
    rounded: "{rounded.badge}"
    padding: "3px 7px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "24px"
  module-row:
    textColor: "{colors.ink}"
    padding: "19px 0"
  map-node:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.teal-dark}"
    rounded: "10px"
    width: "250px"
    height: "68px"
  map-node-selected:
    backgroundColor: "#bddfd7"
  journey-stage:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.journey-stage}"
    rounded: "{rounded.control}"
    padding: "11px 13px"
  journey-stage-selected:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.teal-dark}"
  journey-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "30px"
  mechanism-detail:
    backgroundColor: "{colors.mechanism-bg}"
    textColor: "{colors.ink}"
    padding: "6px 20px 14px"
---

# Design System: GenAI Quest

## Overview

**Creative North Star: "The Study Desk Atlas"**

A pale blue study desk pairs deep teal navigation with mint diagrams and amber actions. The bilingual learning atlas supports reading and operating: clear explanations, visible controls, connected concepts and evidence of practice. System type and open rows keep a content-heavy workspace calm and readable.

**Key Characteristics:**
- Pale working surface and a persistent teal anchor.
- Open learning rows with restrained tonal panels.
- Readable diagrams and explicit learning states.
- Guided reading in four stages, with an open milestone road and visible evidence requirements.

This records the code-first implementation. Evidence: `dist/style.css`, the opening direction comment in `dist/index.html`, `dist/experience.js`, and the supplied desktop, mobile and map captures, including `screenshots/v2-desktop-dashboard.png` and `screenshots/v2-mobile-guided.png`. The interaction extension preserves the Study Desk Atlas: four guided stages, four milestones and four integration checkpoints reuse the authored foundation of 14 lessons, 42 practice questions and seven labs. Source pages 17–74 remain the authored scope; pages 75–682 remain pending. This document establishes neither full-course completion nor a deployed URL.

## Colors

### Primary
- **Working Teal** (`teal`): primary controls, links, progress and the mission action area.
- **Deep Rail Teal** (`teal-dark`): navigation rail and primary-button hover.

### Secondary
- **Diagram Mint** (`mint`): active navigation, pressed filters and mechanism steps.
- **Mechanism Field** (`mechanism-bg`): the selected process explanation, separated by a fine teal rule.

### Tertiary
- **Action Amber** (`amber`): continue-learning action; **Amber Ink** (`amber-ink`) anchors XP text.
- **Practice Blue**, **Feedback Green** and **Feedback Red**: selected answers, correct outcomes and errors; feedback backgrounds use their paired tokens.

### Neutral
- **Blue Paper**, **White Surface**, **Study Ink**, **Muted Ink** and **Quiet Divider**: workspace, contained work, reading, supporting text and row separation.
- **Road Connector** (`road-line`) and **Road Marker** (`road-marker`): the fine vertical milestone path and numbered circle outline. These are subdued structural tints within the existing teal world.

**The Evidence Rule.** Pair learning states with words; color alone does not establish mastery or course coverage. A milestone requires all latest related practice answers to be correct, all related lab checks complete, the latest checkpoint correct, and no remaining confusion marker. Reading marks are self-assessment; moving between stages earns no XP. Later wrong answers or confusion can return a milestone to review without deleting history.

## Typography

The shared system sans stack is the display, body and control face; monospace is reserved for formulas. Frontmatter defines the hierarchy. Bold, tightly tracked headings orient; body text stays spacious. Reading paragraphs use a longer line-height (1.8), with a reading column capped at (74ch); introductory page copy is capped at (65ch). Rendered map node titles use (15px), or (13px) for long titles, overriding the stylesheet base (16px); edge labels use (12px). Progress numbers use tabular figures.

The guided extension uses the same stack and weights. Milestone titles use (1.1rem), supporting descriptions (.91rem / 1.7) and wrapping evidence labels (.77rem) with tabular figures. Journey panels use a (1.5rem / 1.4) opening heading, a (1.06rem / 1.8) lead capped at (72ch), and (1.05rem / 1.7) subheadings. Stage controls use (.87rem / 1.4), process controls (.92rem), and summary headings (1.2rem). These are intentional local roles rather than a replacement type scale.

## Layout

Desktop uses a sticky rail (236px), a white utility bar and a centered main area capped at (1280px) with horizontal inset (42px). Learning paths are divided rows; desktop supplements occupy a second column. Reading pairs its text column with a (220px) aside. The mission joins a (1.2fr / .8fr) explanation/action split.

At (1100px), the rail narrows to (205px), inset becomes (28px), and reading/map detail stacks. At (800px), the rail becomes a horizontal scrolling header, main inset becomes (22px), multi-column content stacks, and the mission action comes first. The map retains a minimum width (710px) inside its own scrolling canvas and offers an accessible list. Focus mode removes surrounding navigation and caps the main area at (850px).

The studio dashboard uses open milestone rows beside a session guide. Each row has a (36px) numbered marker, an (18px) gutter and a divided content column; a fine vertical connector links markers. The guided journey pairs one white reading panel, padded (30px), with a (245px) context aside across a (32px) gap. Four stage controls form equal columns above both. Checkpoint detail pairs open lesson tasks and related labs with a (270px) evidence summary across a (38px) gap; the summary stays sticky (25px) from the top.

At (1200px), journey and checkpoint asides narrow to (210px) and (225px), and lesson tasks may wrap. At (1000px), studio, journey and checkpoint columns stack; the evidence summary becomes static with a top rule, and the session guide becomes a two-column step list. The mission also stacks with its action first at (900px). At (600px), the journey controls become a two-by-two grid, panel padding becomes (22px), the stage count occupies its own footer line, lab links stack, and the session steps become one column. Journey stage type changes from (.87rem) to (.8rem) at (1200px), (.9rem) at (1000px), then (.81rem) at (600px); their minimum height remains (50px). Mobile milestone titles use (1.05rem), evidence (.76rem), and marker gutters (13px).

## Elevation & Depth

Depth comes from pale tonal fields, white work panels and fine separators. Ordinary panels have no shadow. The transient toast alone uses a soft overlay shadow (`0 7px 25px #00000022`). Map fill changes and guided stage/process background and border changes take (.15s ease-out) when motion is allowed; reduced motion disables transitions and smooth scrolling. The separate in-lesson guide retains its existing (.24s) reveal; the new journey panel has no entrance animation.

**The Open Row Rule.** Keep repeated lessons, modules, notes and review items on divided rows; reserve filled containers for grouped work, feedback and diagrams.

## Shapes

Gently curved surfaces, controls, fields and badges use the radii in frontmatter. Thin borders distinguish controls and rows. Circular numbered steps and outlined module indices add sequence without enclosing every item. Map nodes are rounded outlined rectangles connected by fine curved arrows.

Milestone markers use outlined (36px) circles; completed markers fill teal and show a check icon. Journey stages use the shared (9px) control radius. The (14px) journey panel groups the active learning task; the process explanation uses a straight teal left rule rather than another nested card.

## Components

- **Buttons:** solid teal for primary actions; amber for the dashboard continuation; white bordered secondary controls and underlined text actions. Neutral hover uses a pale teal wash and teal border; primary hover deepens. Disabled controls reduce opacity (.58). Small controls use (.85rem) type and (.45rem .7rem) padding.
- **Fields:** white fill, subdued border, visible labels; checkboxes, radios and ranges use teal. Keyboard focus is an amber outline (3px), offset (4px).
- **Filters and badges:** selected filters use mint with a teal border; compact status badges wrap and spell out unread, review, practiced or stronger-evidence states.
- **Navigation:** line icons and text on the deep rail; mint indicates the current page. Mobile keeps the same items in an overflow row.
- **Panels and rows:** white panels group work; module and lesson rows carry dividers, clear titles, muted descriptions and underlined lesson links.
- **Concept map:** white nodes, a mint selected node, labelled relationships and a neighboring explanation. Keyboard focus thickens the node stroke; the list alternative remains available.
- **Milestone road:** four open, numbered outcome rows with a written status badge, latest correct-answer count, related lab-check count and checkpoint state. Every milestone is directly accessible; the road recommends a next step without XP locks. The dashboard progress bar counts achieved milestones (0–4), separately from attempt counts.
- **Guided journey:** four directly selectable stages—“Pahami masalah”, “Telusuri proses”, “Lihat contoh”, “Coba jawab”—above one reading surface. Pressed stages and process buttons use mint, a teal border and deep teal text. Process buttons have a minimum height (48px); selecting one updates a politely announced explanation. Previous/next controls disable at the bounds. The context aside retains the milestone outcome, current lesson evidence and source/depth disclosure, plus a link to the complete lesson and notes.
- **Quick check and checkpoint:** choices stay unrevealed until submission; feedback then explains every option and moves keyboard focus to the explanation. A journey quick check reuses one existing practice question and points to all three lesson questions. Checkpoints may be attempted at any time; correct checkpoint evidence alone does not complete a milestone. Retry clears the current selection while retaining attempt history.
- **Checkpoint summary:** a divided definition list reports latest practice answers, related lab checks, latest checkpoint and confusion markers. It recommends the next action and explains the evidence limit. No lab is required for the enterprise milestone; its integration scenario does not claim an executed cloud lab.
- **Session guide and progress portability:** the dashboard explains understand, trace, try and return, with optional diagnostic and time settings. The estimated plan applies to the available foundation. Export/import controls make browser-local progress portable; there is no automatic synchronization.
- **Learning rewards:** 10 XP for the first correct answer to a unique practice question (including its journey quick check), 15 XP per unique lab check and 20 XP per unique checkpoint. Retries do not multiply these rewards. Neither stage navigation nor marking a lesson read awards points.

## Do's and Don'ts

### Do:
- **Do** keep bilingual explanations readable with the shared system font and generous paragraph spacing.
- **Do** retain visible keyboard focus and the map's scrolling canvas plus list alternative.
- **Do** label learning evidence and incomplete source coverage explicitly.
- **Do** keep milestone evidence visible beside its outcome and allow direct exploration of every stage and milestone.
- **Do** preserve the complete lesson and source-depth links alongside the guided explanation.

### Don't:
- **Don't** replace open repeated rows with layers of filled cards.
- **Don't** shrink the mobile map to fit the viewport at the expense of readable labels.
- **Don't** present activity XP, a provisional schedule or mapped concepts as proof of exam readiness.
- **Don't** treat a read mark, stage visit, one quick check or an isolated correct checkpoint as milestone completion.
- **Don't** claim new PDF coverage, a cloud execution or automatic progress sync from this interaction extension.
