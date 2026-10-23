# Coverage map — foundation checkpoint

Status verified 22 October 2026 (Asia/Singapore). Source file: AWSCertifiedGenerativeAIDeveloper.pdf. This is not full-course coverage.

## Concepts, objectives and exercises

| PDF pages | Lesson and substantive concepts | Learning objectives | Exercises |
|---|---|---|---|
| 17, 18, 19, 20, 21, 22, 23, 24 | Foundation models & Bedrock — Foundation model, Inference, Converse, IAM role | LO1: Membedakan foundation model dan managed inference service.<br>LO2: Memilih API plane serta identitas yang sesuai untuk sebuah request. | f1 (Recall, LO1); f2 (Application, LO2); f3 (Scenario, LO1,2); 3 active recall |
| 25, 26, 27, 28 | Prompt, RAG, atau fine-tuning? — Fine-tuning, Continued pre-training, LoRA, Overfitting | LO1: Memilih customization berdasarkan jenis masalah.<br>LO2: Menjelaskan perbedaan supervised fine-tuning, continued pre-training dan LoRA. | a1 (Scenario, LO1); a2 (Understanding, LO2); a3 (Application, LO1,2); 3 active recall |
| 29, 30, 31, 32, 35, 36, 37, 38 | RAG: give the model an open book — RAG, Knowledge base, Grounding, Provenance | LO1: Menjelaskan ingestion dan query path pada RAG.<br>LO2: Memilih jenis retrieval berdasarkan kebutuhan serta mengenali failure cases. | r1 (Recall, LO1); r2 (Scenario, LO2); r3 (Understanding, LO1,2); 3 active recall |
| 33, 34, 45, 46 | Embeddings & semantic similarity — Embedding, Cosine similarity, Dense vector, Sparse vector, Top-k | LO1: Menghitung cosine similarity sederhana dan menginterpretasikannya.<br>LO2: Membedakan vector dimension, chunk size serta sparse/dense representation. | v1 (Calculation, LO1); v2 (Understanding, LO2); v3 (Application, LO1,2); 3 active recall; lab cosine |
| 39, 40, 41, 42, 43, 44 | Chunking: precision versus context — Chunking, Overlap, Semantic chunking, Hierarchical chunking, Context window | LO1: Memilih fixed, semantic, hierarchical atau no chunking.<br>LO2: Menghitung overlap sederhana serta menilai risiko kehilangan konteks. | c1 (Scenario, LO1); c2 (Calculation, LO2); c3 (Understanding, LO1,2); 3 active recall; lab chunk |
| 47, 48, 71 | Metadata, freshness & retrieval control — Metadata, Idempotency, Freshness, ACL | LO1: Merancang metadata filter yang relevan dan menjaga authorization.<br>LO2: Menjelaskan sinkronisasi knowledge base serta failure cases perubahan data. | t1 (Scenario, LO1); t2 (Understanding, LO2); t3 (Application, LO1,2); 3 active recall; lab retrieval |
| 49, 50, 51 | Measure retrieval and answer quality — Faithfulness, Context relevance, Citation precision, Model-as-judge | LO1: Membedakan context relevance, answer relevance dan faithfulness.<br>LO2: Merancang evaluation dataset dan menafsirkan keterbatasan model-as-judge. | e1 (Understanding, LO1); e2 (Application, LO2); e3 (Calculation, LO1,2); 3 active recall; lab evaluation |
| 52, 53 | Multimodal inputs & compatible embeddings — Multimodal, Base64, Encoder, Provenance | LO1: Membedakan multimodal generation dan multimodal retrieval.<br>LO2: Menyiapkan representasi input sesuai model dan melacak provenance media. | m1 (Understanding, LO1); m2 (Recall, LO2); m3 (Scenario, LO1,2); 3 active recall |
| 64, 65, 66, 67, 68 | Prompt engineering that can be evaluated — Zero-shot, Few-shot, Chain of Thought, Prompt | LO1: Menyusun instruction, context, input dan output contract.<br>LO2: Memilih zero-shot/few-shot/decomposition serta memverifikasi hasil langkah per langkah. | p1 (Application, LO1); p2 (Understanding, LO2); p3 (Calculation, LO1,2); 3 active recall |
| 62, 63 | Structured output is a contract — JSON Schema, Structured output, Tool use, Validation | LO1: Membedakan prompt-only JSON, tool schema dan native structured outputs.<br>LO2: Memisahkan schema validity dari semantic/business validity. | s1 (Understanding, LO1); s2 (Scenario, LO2); s3 (Application, LO1,2); 3 active recall; lab json |
| 54, 55, 56, 57 | Guardrails, policy checks & redaction — Guardrail, PII, NER, Automated reasoning | LO1: Membedakan content filtering, contextual grounding dan reasoning checks.<br>LO2: Merancang redaction berlapis serta menyebutkan batas perlindungannya. | g1 (Understanding, LO1); g2 (Calculation, LO1,2); g3 (Scenario, LO2); 3 active recall; lab policy |
| 58, 59, 60, 61 | Prompt versions & Bedrock Flows — Prompt Management, Flow, Variable, Version | LO1: Menjelaskan versioning, variables dan variants pada prompt.<br>LO2: Mendesain node/connection/condition untuk alur yang dapat di-debug. | w1 (Recall, LO1); w2 (Scenario, LO2); w3 (Application, LO1,2); 3 active recall |
| 69, 70 | Untrusted instructions, prompt leaks & bias — Prompt injection, Prompt leaking, Bias, Counterfactual augmentation | LO1: Mengidentifikasi prompt injection pada data yang tidak tepercaya.<br>LO2: Merancang mitigasi berlapis dan evaluasi bias tanpa menganggapnya selesai oleh satu prompt. | b1 (Scenario, LO1); b2 (Understanding, LO2); b3 (Application, LO2); 3 active recall |
| 71, 72, 73, 74 | Enterprise integration & the GenAI lifecycle — Cross-account, Event-driven, Well-Architected, Idempotency | LO1: Menjelaskan integrasi cross-account serta asynchronous downstream processing.<br>LO2: Memetakan keputusan GenAI ke enam pilar dan lifecycle berulang. | n1 (Scenario, LO1); n2 (Application, LO1,2); n3 (Understanding, LO2); 3 active recall |

## Page-by-page source status

Text extraction for all pages is an indexing operation only. Concept mapping is evidence of authoring scope, not by itself evidence of conceptual completeness. Each available lesson includes original explanation, mechanism, example, analogy limits, trade-offs, misconception, glossary and recall.

| File | PDF page | Indexed heading | Read status | Lesson | Exercise |
|---|---|---|---|---|---|
| AWSCertifiedGenerativeAIDeveloper.pdf | 1 | Disclaimer: These slides are copyrighted | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 2 | Table of Contents | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 3 | AWS Certified Generative AI | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 4 | What We’ll Cover: GenAI | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 5 | Managing Data for Generative AI | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 6 | Agentic AI | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 7 | Operational Efficiency and | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 8 | Managing Models with | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 9 | More Tools for Building AI Apps | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 10 | Governance and QA | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 11 | Security, Identity, and Compliance | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 12 | Other Stuff You Should Know | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 13 | This all may seem familiar… | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 14 | Target Candidate | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 15 | [no extracted text] | No extracted text; visual confirmed decorative opening image | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 16 | Generative AI Fundamentals | Read text + visual; orientation/transition | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 17 | Foundation | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 18 | AWS Foundation Models (Base Models) | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 19 | Amazon Bedrock | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 20 | The Bedrock API Endpoints | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 21 | More on the Converse API | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 22 | Bedrock IAM permissions | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 23 | Amazon Bedrock: Model Access | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 24 | Let’s Play | Read text + visual; taught | foundation | f1, f2, f3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 25 | Fine-tuning | Read text + visual; taught | adapt | a1, a2, a3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 26 | Fine-tuning in Bedrock: “Custom Models” | Read text + visual; taught | adapt | a1, a2, a3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 27 | “Continued Pre-Training” | Read text + visual; taught | adapt | a1, a2, a3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 28 | Low-Rank Adaptation (LoRA) | Read text + visual; taught | adapt | a1, a2, a3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 29 | Retrieval Augmented Generation (RAG) | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 30 | RAG: Pros and Cons | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 31 | RAG: Example Approach (winning at | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 32 | Choosing a Database (Knowledge Base | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 33 | Embeddings | Read text + visual; taught | vectors | v1, v2, v3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 34 | Embeddings are vectors, so store them | Read text + visual; taught | vectors | v1, v2, v3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 35 | RAG Example with a Vector Database: | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 36 | RAG in Bedrock: Knowledge Bases | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 37 | Using Knowledge Bases | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 38 | Let’s Make a Knowledge Base | Read text + visual; taught | rag | r1, r2, r3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 39 | Breaking up the R in RAG | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 40 | Pre-Retrieval                               DATA: | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 41 | More on Chunking | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 42 | Chunking with Bedrock: Standard | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 43 | Chunking with Bedrock: Hierarchical | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 44 | Chunking with Bedrock: Semantic | Read text + visual; taught | chunks | c1, c2, c3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 45 | Optimizing your Embeddings | Read text + visual; taught | vectors | v1, v2, v3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 46 | Sparse vs. Dense Embeddings | Read text + visual; taught | vectors | v1, v2, v3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 47 | Optimizing Retrieval with Metadata | Read text + visual; taught | retrieval | t1, t2, t3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 48 | Keeping Your KB Up to Date | Read text + visual; taught | retrieval | t1, t2, t3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 49 | Measuring your RAG System | Read text + visual; taught | evaluation | e1, e2, e3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 50 | A lot of this sounds subjective! | Read text + visual; taught | evaluation | e1, e2, e3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 51 | Example “Context relevance” | Read text + visual; taught | evaluation | e1, e2, e3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 52 | Multimodal Models and Pipelines | Read text + visual; taught | multimodal | m1, m2, m3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 53 | Multimodal Models and Pipelines | Read text + visual; taught | multimodal | m1, m2, m3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 54 | Amazon Bedrock Guardrails | Read text + visual; taught | guardrails | g1, g2, g3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 55 | Bedrock Guardrails – Automated | Read text + visual; taught | guardrails | g1, g2, g3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 56 | Let’s Make a Guardrail | Read text + visual; taught | guardrails | g1, g2, g3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 57 | Token-Level Redaction | Read text + visual; taught | guardrails | g1, g2, g3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 58 | Prompt Management with Amazon | Read text + visual; taught | flows | w1, w2, w3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 59 | Amazon Bedrock Flows | Read text + visual; taught | flows | w1, w2, w3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 60 | Using Bedrock Flows with Prompts | Read text + visual; taught | flows | w1, w2, w3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 61 | A (Slightly) More Complex Flow | Read text + visual; taught | flows | w1, w2, w3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 62 | Enforcing Structured Data | Read text + visual; taught | structured | s1, s2, s3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 63 | Enforcing Structured Data | Read text + visual; taught | structured | s1, s2, s3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 64 | Benefits of Effective Prompting | Read text + visual; taught | prompting | p1, p2, p3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 65 | Anatomy of a Prompt | Read text + visual; taught | prompting | p1, p2, p3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 66 | Prompt Best Practices | Read text + visual; taught | prompting | p1, p2, p3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 67 | Prompt Best Practices | Read text + visual; taught | prompting | p1, p2, p3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 68 | Types of Prompts | Read text + visual; taught | prompting | p1, p2, p3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 69 | Avoiding prompt mis-use | Read text + visual; taught | safety | b1, b2, b3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 70 | Mitigating Bias | Read text + visual; taught | safety | b1, b2, b3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 71 | Some Specific Points for Enterprise | Read text + visual; taught | retrieval, enterprise | t1, t2, t3, n1, n2, n3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 72 | Some Specific Points for Enterprise | Read text + visual; taught | enterprise | n1, n2, n3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 73 | AWS Well-Architected Generative AI | Read text + visual; taught | enterprise | n1, n2, n3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 74 | AWS Well-Architected Generative AI | Read text + visual; taught | enterprise | n1, n2, n3 |
| AWSCertifiedGenerativeAIDeveloper.pdf | 75 | Managing Data for | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 76 | Dealing with Structured Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 77 | Structured Data: Bedrock API | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 78 | Structured Data for SageMaker AI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 79 | Dealing with Unstructured Text | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 80 | Divider Strings for Segmenting Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 81 | Formatting Data for Conversations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 82 | Amazon Bedrock Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 83 | What is Bedrock Data Automation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 84 | BDA Concepts | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 85 | Quick Demo Walkthrough | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 86 | BDA Document Processing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 87 | BDA Image Processing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 88 | BDA Video Processing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 89 | BDA Audio Processing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 90 | BDA Blueprints for Custom Output | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 91 | Uses of BDA Blueprints | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 92 | SageMaker Data Wrangler | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 93 | Data Wrangler: Notable Capabilities | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 94 | Data Wrangler sources | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 95 | Data Wrangler: Import Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 96 | Data Wrangler: Preview Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 97 | Data Wrangler: Visualize Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 98 | Data Wrangler: Transform Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 99 | Data Wrangler: Quick Model | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 100 | Data Wrangler: Export Data Flow | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 101 | Data Wrangler Troubleshooting | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 102 | AWS Glue | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 103 | What is Glue? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 104 | Glue Crawler / Data Catalog | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 105 | Glue and S3 Partitions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 106 | AWS Glue Studio | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 107 | AWS Glue Data Quality | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 108 | AWS Glue Data Quality | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 109 | Amazon CloudWatch Metrics | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 110 | CloudWatch Metric Streams | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 111 | Amazon Transcribe | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 112 | Amazon Transcribe – Improving Accuracy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 113 | Transcribe – Toxicity Detection | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 114 | Amazon Comprehend | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 115 | Comprehend – Custom Classification | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 116 | Named Entity Recognition (NER) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 117 | Comprehend – Custom Entity | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 118 | Using Comprehend and | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 119 | Amazon Comprehend Medical | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 120 | Amazon Opensearch | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 121 | What is Opensearch? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 122 | What are Dashboards? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 123 | Opensearch applications | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 124 | Opensearch concepts | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 125 | An index is split into shards | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 126 | Redundancy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 127 | Amazon OpenSearch Service (Managed) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 128 | Amazon Opensearch options | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 129 | Cold / warm / ultrawarm / hot storage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 130 | Index State Management | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 131 | More Index Management | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 132 | Cross-cluster replication | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 133 | Opensearch Stability | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 134 | Amazon Opensearch Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 135 | Securing Dashboards | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 136 | Amazon Opensearch anti-patterns | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 137 | Amazon Opensearch performance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 138 | Amazon OpenSearch Serverless | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 139 | OpenSearch as a Vector Store | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 140 | OpenSearch Vector Engines | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 141 | OpenSearch as a Vector Store: Finer | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 142 | OpenSearch as a Vector Store: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 143 | OpenSearch Hierarchical Indices | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 144 | OpenSearch as a Vector Store: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 145 | Amazon S3 Vectors | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 146 | What a S3 Vectors Put Request Looks | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 147 | Alternative API: s3vectors-embed-cli | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 148 | Amazon S3 Vectors | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 149 | S3 Vectors: More specifics? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 150 | S3 Vectors: Best Practices | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 151 | Amazon RDS Overview | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 152 | Advantage over using RDS versus | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 153 | RDS – Storage Auto Scaling | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 154 | Using RDS with S3 Document | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 155 | Amazon Aurora | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 156 | Aurora High Availability and Read Scaling | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 157 | Aurora DB Cluster | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 158 | Features of Aurora | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 159 | Amazon Aurora as a Vector Store | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 160 | Traditional Architecture | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 161 | NoSQL databases | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 162 | Amazon DynamoDB | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 163 | DynamoDB - Basics | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 164 | DynamoDB – Primary Keys | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 165 | DynamoDB – Primary Keys | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 166 | DynamoDB – Partition Keys (Exercise) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 167 | DynamoDB – Read/Write Capacity | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 168 | R/W Capacity Modes – Provisioned | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 169 | DynamoDB – Write Capacity Units | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 170 | Strongly Consistent Read | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 171 | DynamoDB – Read Capacity Units (RCU) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 172 | DynamoDB – Partitions Internal | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 173 | DynamoDB – Throttling | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 174 | R/W Capacity Modes – On-Demand | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 175 | DynamoDB – Writing Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 176 | DynamoDB – Reading Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 177 | DynamoDB – Reading Data (Query) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 178 | DynamoDB – Reading Data (Scan) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 179 | DynamoDB – Deleting Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 180 | DynamoDB – Batch Operations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 181 | DynamoDB – PartiQL | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 182 | DynamoDB Accelerator (DAX) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 183 | DynamoDB Accelerator (DAX) vs. | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 184 | DynamoDB – Time To Live (TTL)                                                                       Current Time | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 185 | DynamoDB with GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 186 | DynamoDB Vector Indexes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 187 | Vector Indexes: Limitations, and Why | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 188 | DynamoDB and OpenSearch | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 189 | Keeping your Vector Store Up to | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 190 | Keeping your Vector Store Up to | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 191 | Vector Index Maintenance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 192 | Re-ranker Models in Amazon | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 193 | S3 Storage Classes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 194 | S3 Durability and Availability | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 195 | S3 Standard – General Purpose | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 196 | S3 Storage Classes – Infrequent Access | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 197 | Amazon S3 Glacier Storage Classes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 198 | S3 Intelligent-Tiering | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 199 | S3 Storage Classes Comparison | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 200 | S3 Storage Classes – Price Comparison | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 201 | Amazon S3 – Moving between Storage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 202 | Amazon S3 – Lifecycle Rules | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 203 | Amazon S3 – Lifecycle Rules (Scenario | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 204 | Amazon S3 – Lifecycle Rules (Scenario | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 205 | Amazon S3 Analytics – Storage Class | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 206 | Amazon S3 – Replication (CRR & SRR) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 207 | Amazon S3 – Replication (Notes) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 208 | Amazon S3 – Object Encryption | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 209 | Amazon S3 Encryption – SSE-S3 | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 210 | Amazon S3 Encryption – SSE-KMS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 211 | SSE-KMS Limitation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 212 | Amazon S3 Encryption – SSE-C | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 213 | Amazon S3 Encryption – Client-Side | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 214 | Amazon S3 – Encryption in transit | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 215 | Amazon S3 – Force Encryption in Transit | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 216 | Amazon S3 – Default Encryption vs. Bucket | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 217 | S3 Access Logs | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 218 | S3 Access Logs: Warning | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 219 | S3 – Access Points | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 220 | S3 – Access Points – VPC Origin | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 221 | Agentic AI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 222 | LLM Agents | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 223 | LLM Agents: A More Practical | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 224 | How do Agents Know Which Tools to | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 225 | Deploying Bedrock Agents | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 226 | This will make | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 227 | Multi-agent systems: an example | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 228 | Why use multiple agents (or augmented | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 229 | Manager (Orchestrator – workers) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 230 | Routing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 231 | Parallelization | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 232 | Prompt Chaining | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 233 | Evaluator - Optimizer | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 234 | Adding Memory | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 235 | Strands Agents | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 236 | Strands Built-in Tools (just a few) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 237 | The Strands Agent Loop | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 238 | Making it real – the Strands | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 239 | AWS Agent Squad | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 240 | Amazon Bedrock AgentCore | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 241 | AgentCore Capabilities | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 242 | AgentCore Agent Runtime | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 243 | Adding AgentCore Memory | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 244 | AgentCore Built-In Tools | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 245 | Importing Bedrock Agents | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 246 | AgentCore Gateway | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 247 | AgentCore Identity | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 248 | Policy in AgentCore | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 249 | Policy Enforcement | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 250 | AgentCore Evaluations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 251 | Sample | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 252 | Some Built-In Evaluations (prompt | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 253 | Custom Evaluators | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 254 | Lab: Strands Agents, AgentCore, | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 255 | Lab: Strands Agents, AgentCore, | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 256 | Model Context Protocol (MCP) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 257 | Deploying your Own MCP Server | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 258 | OpenAPI and GenAI                                   openapi: 3.1.0 | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 259 | Humans in the Loop | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 260 | Amazon Q Business | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 261 | Amazon Q Business Example | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 262 | Amazon Q Business                                                 Data Sources | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 263 | Amazon Q Business + IAM Identity | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 264 | Amazon Q Business – Admin Controls | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 265 | Amazon Q Apps (Q Business) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 266 | Amazon Quick | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 267 | Amazon Quick – What It Is | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 268 | The Problems Amazon Quick Solves | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 269 | Why Quick vs. ChatGPT, Claude or | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 270 | How Quick Works – The Building | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 271 | Chat – The Primary Interface | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 272 | Chat Agents | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 273 | Spaces – Shared Context for Teams | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 274 | Knowledge and the Quick Index | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 275 | Connectors and Integrations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 276 | Quick Flows – Automate Routine | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 277 | Flow Step Types – The Palette | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 278 | Quick Flows vs. Quick Automate | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 279 | Research Mode | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 280 | Apps in Quick – No-Code Web | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 281 | Security and Governance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 282 | Pricing – Four Plans | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 283 | Limitations and Things to Watch | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 284 | Operational Efficiency and | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 285 | Token Efficiency | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 286 | Other Stuff CloudWatch Monitors | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 287 | More Token Efficiency Techniques | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 288 | Cost-Effective Model Selection | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 289 | Measuring Price : Performance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 290 | Maximizing Resource Utilization | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 291 | Maximizing Resource Utilization | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 292 | Intelligent Caching Systems: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 293 | Intelligent Caching Systems: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 294 | Intelligent Caching Systems: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 295 | Building Responsive AI Systems | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 296 | Building Responsive AI Systems | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 297 | Optimizing Retrieval Performance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 298 | Optimizing for Specific Use Cases | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 299 | Optimizing Foundation Model | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 300 | Optimizing Foundation Model System | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 301 | Optimizing Foundation Model | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 302 | Exponential Backoff | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 303 | Connection Pooling | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 304 | Bedrock Cross-Region Inference | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 305 | Bedrock Cross-Region Inference | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 306 | Managing Models with | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 307 | SageMaker is built to handle the | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 308 | SageMaker Training & Deployment | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 309 | SageMaker Notebooks can direct | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 310 | So can the SageMaker console | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 311 | Data prep on SageMaker | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 312 | SageMaker Processing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 313 | Deploying Trained Models | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 314 | Deployment Safeguards | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 315 | Putting them together | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 316 | SageMaker: More Features | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 317 | Optimizing FM Deployments | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 318 | Optimizing FM Deployments | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 319 | Optimizing FM Deployments | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 320 | SageMaker Ground Truth | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 321 | What is Ground Truth? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 322 | But it’s more than that | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 323 | Who are these human labelers? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 324 | Ground Truth Plus | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 325 | Other ways to generate training labels | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 326 | SageMaker Model Monitor | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 327 | SageMaker Model Monitor + Clarify | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 328 | Pre-training Bias Metrics in Clarify | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 329 | SageMaker Model Monitor | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 330 | SageMaker Model Monitor | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 331 | SageMaker Model Registry | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 332 | Example workflow for approving and | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 333 | SageMaker ML Lineage Tracking | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 334 | Lineage Tracking Entities | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 335 | Querying Lineage Entities | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 336 | Cross-Account Lineage Tracking | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 337 | SageMaker Neo | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 338 | Neo + AWS IoT Greengrass | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 339 | SageMaker Unified Studio | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 340 | SageMaker Unified Studio | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 341 | SageMaker | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 342 | More Tools for Building AI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 343 | AWS Lambda | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 344 | What is Lambda? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 345 | Example: Serverless Website | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 346 | Example: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 347 | Example: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 348 | Why not just run a server? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 349 | Main uses of Lambda | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 350 | Supported languages | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 351 | Lambda triggers | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 352 | Lambda and Amazon Opensearch | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 353 | Lambda and Data Pipeline | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 354 | Lambda and Redshift | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 355 | Lambda + Kinesis | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 356 | Using Lambda with Bedrock / GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 357 | Example: Building a Serverless API | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 358 | AWS API Gateway | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 359 | API Gateway – Integrations High Level | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 360 | API Gateway – AWS Service Integration | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 361 | API Gateway - Endpoint Types | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 362 | API Gateway – Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 363 | API Gateway and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 364 | AWS AppConfig | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 365 | AppConfig and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 366 | AWS Step Functions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 367 | Step Functions – Examples | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 368 | Step Functions – Examples | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 369 | Step Functions – Examples | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 370 | AWS Step Functions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 371 | Step Functions: Circuit Breakers | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 372 | More Step Functions + GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 373 | Even More Step Functions Stuff | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 374 | AWS CodePipeline | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 375 | Technology Stack for CICD | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 376 | CodePipeline – Artifacts | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 377 | CodePipeline – Troubleshooting | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 378 | AWS CodeBuild | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 379 | AWS CodeBuild | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 380 | CodeBuild – Supported Environments | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 381 | CodeBuild – How it Works | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 382 | CodeBuild – buildspec.yml | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 383 | AWS CodeDeploy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 384 | CodeDeploy – EC2/On-premises | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 385 | CodeDeploy – In-Place Deployment | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 386 | CodeDeploy – Blue-Green Deployment | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 387 | CodeDeploy Agent                      EC2 Instance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 388 | CodeDeploy – Lambda Platform | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 389 | CodeDeploy – ECS Platform | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 390 | MLFlow | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 391 | AWS AppSync GraphQL and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 392 | AWS Outposts | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 393 | AWS Outposts | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 394 | AWS Outposts and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 395 | AWS WaveLength | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 396 | AWS WaveLength and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 397 | Amazon SQS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 398 | Amazon SQS – Standard Queue | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 399 | SQS – Producing Messages | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 400 | SQS – Consuming Messages | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 401 | SQS – Multiple EC2 Instances | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 402 | SQS with Auto Scaling Group (ASG) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 403 | SQS to decouple between application | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 404 | Amazon SQS - Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 405 | AWS Amplify - web and mobile | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 406 | Amazon EventBridge | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 407 | Amazon EventBridge Rules | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 408 | Amazon EventBridge | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 409 | Amazon EventBridge – Schema Registry | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 410 | Amazon EventBridge – Resource-based | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 411 | Amazon SNS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 412 | Amazon SNS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 413 | SNS integrates with a lot of AWS services | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 414 | Amazon SNS – How to publish | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 415 | Amazon SNS – Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 416 | Amazon AppFlow | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 417 | Amazon AppFlow | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 418 | Governance and QA | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 419 | Bedrock Agents Classic Tracing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 420 | Foundation model | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 421 | Human | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 422 | Evaluation against Benchmark Datasets | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 423 | Using another model as a “judge” | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 424 | Hybrid | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 425 | ROUGE | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 426 | BLEU | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 427 | BERTscore | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 428 | Testing and evaluation: choosing a | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 429 | Bedrock Model Evaluations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 430 | Bedrock Model Evaluations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 431 | Considerations for Deployment | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 432 | Responsible AI: Core Dimensions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 433 | AWS Tools for Responsible AI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 434 | CloudWatch Logs | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 435 | CloudWatch Logs - Sources | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 436 | CloudWatch Logs Insights | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 437 | CloudWatch Logs Insights | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 438 | CloudWatch Logs – S3 Export | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 439 | CloudWatch Logs Subscriptions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 440 | CloudWatch Alarms | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 441 | CloudWatch Alarm Targets | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 442 | CloudWatch Alarms – Composite Alarms | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 443 | EC2 Instance Recovery | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 444 | CloudWatch Alarm: good to know | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 445 | CloudWatch and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 446 | Other things to monitor | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 447 | CloudWatch Real User | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 448 | AWS CloudTrail | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 449 | CloudTrail Diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 450 | CloudTrail Events | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 451 | CloudTrail Insights | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 452 | CloudTrail Events Retention | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 453 | CloudTrail and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 454 | AWS X-Ray | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 455 | AWS X-Ray | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 456 | AWS X-Ray advantages | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 457 | X-Ray compatibility | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 458 | AWS X-Ray Leverages Tracing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 459 | AWS X-Ray                                                              EC2 Instance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 460 | The X-Ray magic | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 461 | AWS X-Ray Troubleshooting | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 462 | AWS Lake Formation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 463 | AWS Lake Formation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 464 | AWS Lake Formation: Pricing | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 465 | Create AWS Glue | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 466 | • Cross-account Lake Formation permission | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 467 | • Now supports “Governed Tables” that support | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 468 | Data Permissions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 469 | Data Filters in Lake Formation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 470 | Security, Identity, and | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 471 | Principle of Least Privilege | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 472 | Data Masking and Anonymization | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 473 | Data Masking and Anonymization | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 474 | Key Salting | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 475 | Key Salting: Example | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 476 | IAM: Users & Groups | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 477 | IAM: Permissions               { | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 478 | IAM Policies inheritance | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 479 | IAM Policies Structure | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 480 | IAM – Password Policy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 481 | Multi Factor Authentication - MFA                                         MFA | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 482 | MFA devices options in AWS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 483 | MFA devices options in AWS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 484 | IAM Roles for | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 485 | AWS IAM Identity Center | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 486 | AWS IAM Identity Center – Login | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 487 | AWS IAM Identity Center | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 488 | IAM Identity Center | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 489 | AWS IAM Identity Center | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 490 | AWS Control Tower | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 491 | AWS Control Tower – Guardrails | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 492 | Why encryption? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 493 | Why encryption? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 494 | Why encryption? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 495 | AWS KMS (Key Management | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 496 | KMS Keys Types | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 497 | AWS KMS (Key Management Service) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 498 | Copying Snapshots across regions | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 499 | AWS Macie | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 500 | AWS Secrets Manager | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 501 | AWS Secrets Manager – Multi-Region | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 502 | Amazon Cognito | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 503 | Cognito User Pools (CUP) – User | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 504 | Cognito User Pools (CUP) - Integrations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 505 | Cognito Identity Pools (Federated | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 506 | Cognito Identity Pools – Diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 507 | Cognito Identity Pools | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 508 | AWS WAF – Web Application Firewall | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 509 | AWS WAF – Web Application Firewall | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 510 | VPC – Crash Course | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 511 | VPC & Subnets | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 512 | VPC Diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 513 | Internet Gateway & NAT | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 514 | Network ACL & Security Groups | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 515 | Network ACLs vs Security Groups | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 516 | VPC Flow Logs | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 517 | VPC Peering | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 518 | VPC Endpoints | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 519 | Site to Site VPN & Direct Connect | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 520 | VPC Closing Comments | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 521 | VPC note – AWS Certified Developer | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 522 | AWS PrivateLink (VPC Endpoint | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 523 | Other Services You | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 524 | What is Athena? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 525 | Some examples | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 526 | What is EMR? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 527 | An EMR Cluster | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 528 | EMR Usage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 529 | EMR Usage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 530 | What is QuickSight? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 531 | QuickSight Data Sources | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 532 | SPICE | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 533 | QuickSight Use Cases | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 534 | QuickSight Anti-Patterns | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 535 | QuickSight Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 536 | QuickSight Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 537 | Quicksight + Redshift: Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 538 | Quicksight / Redshift / RDS cross-region | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 539 | Quicksight / Redshift / RDS cross-region | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 540 | Quicksight / Redshift / RDS cross- | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 541 | QuickSight User Management | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 542 | Amazon Kinesis Data Streams | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 543 | Kinesis Data Streams | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 544 | Kinesis Data Streams – Capacity Modes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 545 | Amazon Managed Streaming for | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 546 | Apache Kafka at a high level | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 547 | Kinesis Data Streams vs. Amazon MSK | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 548 | Amazon MSK Consumers | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 549 | Other Services You | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 550 | Amazon EC2 | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 551 | EC2 sizing & configuration options | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 552 | EC2 User Data | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 553 | Hands-On: | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 554 | Docker Containers Management on AWS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 555 | Amazon ECS - EC2 Launch | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 556 | Amazon ECS – Fargate Launch Type | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 557 | Amazon ECS – IAM Roles for ECS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 558 | Amazon ECS – Load Balancer | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 559 | Amazon ECS – Data Volumes (EFS) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 560 | Amazon EKS Overview | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 561 | Amazon EKS - Diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 562 | Amazon EKS – Node Types | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 563 | Amazon EKS – Data Volumes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 564 | Amazon Lex & Connect | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 565 | Other Services You | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 566 | DocumentDB | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 567 | Amazon ElastiCache Overview | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 568 | ElastiCache | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 569 | ElastiCache | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 570 | ElastiCache – Redis vs Memcached | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 571 | ElastiCache for Valkey | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 572 | Amazon MemoryDB | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 573 | Amazon Neptune | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 574 | Neptune and GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 575 | Other Services You Should | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 576 | AWS Cloud Development Kit (CDK) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 577 | CDK in a diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 578 | CDK vs SAM | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 579 | CDK + SAM | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 580 | CDK Hands-On | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 581 | How can users access AWS ? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 582 | Example (Fake) Access Keys | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 583 | What’s the AWS CLI? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 584 | What’s the AWS SDK? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 585 | What is CloudFormation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 586 | Benefits of AWS CloudFormation (1/2) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 587 | Benefits of AWS CloudFormation (2/2) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 588 | CloudFormation + Infrastructure | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 589 | AWS CodeArtifact | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 590 | AWS CodeArtifact | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 591 | CodeArtifact – EventBridge Integration | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 592 | CodeArtifact – Resource Policy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 593 | Other Services You Should | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 594 | Amazon Augmented AI (A2I) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 595 | Amazon Kendra | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 596 | Amazon Lex | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 597 | Amazon Rekognition | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 598 | Amazon Rekognition – Custom Labels | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 599 | Amazon Rekognition – Content | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 600 | Content Moderation API – Diagram | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 601 | Amazon Textract | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 602 | Amazon Transcribe | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 603 | Amazon Transcribe – Improving Accuracy | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 604 | Transcribe – Toxicity Detection | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 605 | Other Services You Should | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 606 | AWS Auto Scaling | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 607 | AWS Auto Scaling – Scaling Plans | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 608 | AWS Cost Anomaly Detection | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 609 | Cost Explorer | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 610 | Cost Explorer – Monthly Cost by AWS | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 611 | Cost Explorer– Hourly & Resource Level | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 612 | Cost Explorer – Savings Plan | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 613 | Cost Explorer – Forecast Usage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 614 | Amazon Managed Grafana | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 615 | Amazon Managed Grafana | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 616 | AWS Systems Manager (SSM) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 617 | How Systems Manager works | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 618 | Systems Manager – SSM Session | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 619 | Systems Manager | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 620 | Other Services You Should | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 621 | AWS DataSync | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 622 | AWS DataSync | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 623 | AWS DataSync | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 624 | AWS Transfer Family | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 625 | AWS Transfer Family | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 626 | Other Services You Should | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 627 | Amazon CloudFront | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 628 | CloudFront – Origins | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 629 | CloudFront at a high level | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 630 | CloudFront – S3 as an Origin | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 631 | CloudFront vs S3 Cross Region | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 632 | What is load balancing? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 633 | Why use a load balancer? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 634 | Why use an Elastic Load Balancer? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 635 | Application Load                       Network Load                       Gateway Load | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 636 | AWS Global Accelerator | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 637 | AWS Global Accelerator | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 638 | AWS Global Accelerator vs CloudFront | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 639 | Amazon Route 53 | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 640 | Route 53 – Records | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 641 | Route 53 – Record Types | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 642 | Route 53 – Hosted Zones | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 643 | Route 53 – Public vs. Private Hosted | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 644 | Other Services You | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 645 | What’s an EBS Volume? | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 646 | EBS Volume | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 647 | EBS Volume - Example | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 648 | EBS – Delete on Termination attribute | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 649 | Amazon EFS – Elastic File System | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 650 | Amazon EFS – Elastic File System | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 651 | EFS – Performance & Storage Classes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 652 | EFS – Storage Classes | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 653 | EBS vs EFS – Elastic Block Storage | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 654 | EBS vs EFS – Elastic File System | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 655 | Making GenAI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 656 | Production systems are more than | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 657 | Choosing a Vector Store | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 658 | Choosing a Vector Store | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 659 | Choosing a Vector Store | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 660 | OpenSearch vs. OpenSearch Serverless | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 661 | Orchestration: When do I need Step | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 662 | Example: Internal Legal Q&A Chatbot | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 663 | Example: Customer-facing Chatbot | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 664 | Exam Preparation | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 665 | More Prep Resources | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 666 | AWS Skill Builder | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 667 | Practice Exams (including Amazon’s) | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 668 | Amazon’s Exam Guide | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 669 | Consider taking the Certified AI | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 670 | What to Expect | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 671 | Sitting for the exam | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 672 | Prepare | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 673 | Strategies | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 674 | Your AWS Certification journey | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 675 | AWS Certification Paths – Architecture | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 676 | AWS Certification Paths – Operations | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 677 | AWS Certification Paths – DevOps | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 678 | AWS Certification Paths – Security | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 679 | AWS Certification Paths – Development | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 680 | AWS Certification Paths – Data Analytics | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 681 | AWS Certification Paths – AI/ML | Indexed only; NOT read substantively; NOT authored | — | — |
| AWSCertifiedGenerativeAIDeveloper.pdf | 682 | Congratulations | Indexed only; NOT read substantively; NOT authored | — | — |

## Readability limits

- Small console screenshots on p. 19, 22–23 and 59–60 were not treated as legible configuration evidence. The surrounding readable slide text and main flow concepts were used; no hidden settings were guessed.
- p. 21, 51, 61, 63, 68 were inspected individually in addition to the batch contact sheets. p. 61 routing is documentation condition → KB, fallback prompt → output.
- Demonstration slides p. 24, 38, 56 lack full cloud walkthrough instructions; local labs are original conceptual substitutes, not verified reproductions of cloud labs.
- p. 68 quadratic worked example was recomputed and both roots substituted.
- p. 75–682 visuals and substantive text remain unread. Any future chapter must read/inspect these before promotion to taught.
- No assertion is made that whole-course objectives are covered. The 42-question objective audit applies only to the 28 available lesson objectives.

## Interaction extension — 23 October

No new source pages were read in this UI extension. Every existing lesson now has a four-stage guided explanation using its original authored content, plus one actual practice quick check. Complete lesson text and original objective mapping remain available. Four new original integration checkpoints supplement the baseline objective-linked questions:

| Checkpoint | Concepts connected | Lesson references | Evidence requirement |
|---|---|---|---|
| bedrock | Fresh facts, model capability, prompting/RAG/fine-tuning, citations | foundation, adapt, rag, vectors | 12 latest practice answers correct + architecture/cosine checks + checkpoint |
| retrieval | Eligibility, tenant access, freshness, retrieval versus answer quality | chunks, retrieval, evaluation, multimodal | 12 latest practice answers correct + chunk/retrieval/evaluation checks + checkpoint |
| delivery | Schema validity versus factual/business validity, authorized actions | prompting, structured, guardrails, flows | 12 latest practice answers correct + JSON/policy checks + checkpoint |
| enterprise | Untrusted instructions, backend permissions, downstream status/retry/idempotency | safety, enterprise | 6 latest practice answers correct + integration checkpoint |

Any confused flag or latest wrong answer suspends the milestone. Reading is explicitly self-assessment; checkpoints are practice evidence, not exam readiness. These are new authored scenarios, not exam questions or new PDF-coverage claims.
