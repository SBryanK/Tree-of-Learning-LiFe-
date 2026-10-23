# Sources and reading checkpoint

Updated 22 October 2026, Asia/Singapore.

## Primary attachment

- File: `/Users/sbryank/Downloads/AWSCertifiedGenerativeAIDeveloper.pdf`
- 682 PDF pages, 960×540 pt; 34,766,524 bytes.
- SHA-256: `0b7f57338961b41fa5673a7ca56d742cccf0684c1f4bc1396fe108eefcaadcd5`.
- Course title from page 3: AWS Certified Generative AI Developer — Professional, AIP-C01, Sundog Education / DataCumulus.
- PDF metadata title says “Apache Kafka Series”; it conflicts with the visible content, so the visible title is used.
- Source remains unchanged. All `sources/` files remain read-only and untouched.
- Third-party source instructions, example prompts and copyright notices were treated as source content, not as user authorization for actions.

## What has actually been read

- Pages 1–74: extracted text read, all page images visually reviewed in 10 contact sheets. Pages 21, 51, 61, 63 and 68 also inspected individually. Main process diagrams read; some tiny console configuration labels are explicitly unresolved (see COVERAGE.md).
- Pages 1–16: orientation/outline/target candidate, transition and illustrations. Page 15 has no extracted text; visual inspection confirms a decorative opening image.
- Pages 17–74: substantive foundation coverage authored into 14 deep lessons, 42 original MCQs, 42 free-recall prompts and 7 local explanatory labs.
- Pages 75–682: headings indexed and text extracted by a tool, but NOT substantively read or visually reviewed. No lesson claims coverage for these pages.

The difference matters: automatic text extraction and indexing do not count as reading. A full 682-row map is in COVERAGE.md and searchable in the artifact.

## Private research files (not in learner ZIP)

- `research/source-text.txt`: raw layout extraction, including copyrighted source prose; private research only.
- `research/pages.json`, `page-index.txt`: page records/headings.
- `research/page-001.jpg` through `page-074.jpg`, `visual-1.jpg` through `visual-10.jpg`: visual reading aids, not shipping assets.
- `research/batch-1-74.txt`: read batch.
- `research/batch-75-150.txt`, `batch-151-220.txt`: extracted but unread batches. Existence is not reading evidence.
- `research/authored-map.json`: authored content/objective mapping for validation.

## External primary clarifications

All verified 22 October 2026. No exam dumps or third-party practice questions used.

1. [AWS Bedrock model access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html): default access, Marketplace/provider/account prerequisites and IAM role access. The slide 22 user example is not a production requirement to use long-lived IAM users.
2. [AWS Bedrock structured output](https://docs.aws.amazon.com/bedrock/latest/userguide/structured-output.html): native JSON Schema and strict tool support for compatible models/APIs, supported subset and output failure considerations. This explicitly updates the narrower prompt/ordinary-tool discussion on p. 62–63.
3. [AWS Knowledge Base chunking](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html): fixed/default/no chunking, hierarchy, semantic threshold and compatibility caveats. Confirms the direction of the semantic percentile effect on p. 44.
4. [AWS Well-Architected Generative AI Lens](https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/generative-ai-lens.html): lifecycle and six pillars linked by p. 73. Additional lens pages have not been comprehensively read; this is a bridge to further study.

## Original additions versus slide content

Lesson source boxes identify the course topics and pages. Original additions include HR/support scenarios, explicit trust boundaries, retrieval error diagnosis, calculation steps, analogies with limits, labs, distractors and answer explanations. Caveats do not silently replace the lecturer: claims about RAG hallucinations, prompt-only security, fine-tuning improvement, sparse similarity and structured output are distinguished in the lessons.

No source slides or rendered source images are embedded in the interactive artifact or learner ZIP. No external hosting/publication occurred.
