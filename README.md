# Tree of Learning LiFe

Home for Tree learning projects, reusable prompts, study workflows and interactive artifacts.

Repository: https://github.com/SBryanK/Tree-of-Learning-LiFe-

| Material | Start here |
| --- | --- |
| AWS GenAI Quest foundation | [Offline interactive app](genai-quest/GenAI-Quest.html), [source and instructions](genai-quest/README.md) |
| Google Cloud PCA | [Study hub](pca-study/STUDY-HUB.md), [roadmap](pca-study/ROADMAP.md), [state](pca-study/STATE.md) |
| Studio PCA website | [Source](sites/studio-pca/README.md) |
| Reusable learning skills | [Project context](study-resources/skills/setup-project-context/SKILL.md), [study studio](study-resources/skills/design-study-studio/SKILL.md) |
| Reusable prompts | [Prompt collection](prompts/README.md) |
| Earlier AWS SAP-C02 project | [Existing repository](https://github.com/SBryanK/AWS-Quest-Web) |

GitHub displays HTML as source. To use the offline GenAI app, download genai-quest/GenAI-Quest.html and open it in a browser. To preview all local apps, run `python3 -m http.server 8000` from this repository and visit `http://localhost:8000/`. Existing hosted URLs and access limits are listed in [the project map](docs/PROJECT-MAP.md).

## Continue work

Read [AGENTS.md](AGENTS.md) and the relevant STATE.md. New projects belong in projects/<topic>/. This public archive includes original outputs and references; private sources and raw chat histories are excluded.

## Validate and build

```sh
python3 genai-quest/build.py
node genai-quest/tests/logic.cjs
```

The checked-in coverage index allows the GenAI app to rebuild without the private course PDF or extracted research files. Coverage is a foundation checkpoint, not the entire course.

See [sync status](docs/SYNC-STATUS.md) for what was imported and what remains unavailable. This repository does not automatically intercept future ChatGPT conversations.
