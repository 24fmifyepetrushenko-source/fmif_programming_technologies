# Hello Node — Docker + GitHub Actions (Artifact)

[![Build Docker image (artifact)](https://github.com/24fmifyepetrushenko-source/fmif_programming_technologies/actions/workflows/docker-build.yml/badge.svg)](https://github.com/24fmifyepetrushenko-source/fmif_programming_technologies/actions/workflows/docker-build.yml)

Мінімальний HTTP-сервер на NodeJS (“hello world”), контейнеризований у Docker. На кожен `push` у гілку `main` GitHub Actions будує Docker-образ і публікує його як **артефакт** (`tar.gz`), який можна завантажити й запустити локально.

---

## Що всередині
- **NodeJS 20 (alpine)** базовий образ.
- Мінімальний сервер `server.js`, що відповідає JSON-повідомленням.
- **Dockerfile** для reproducible збірок.
- **GitHub Actions workflow**: збірка образу та викладення його як артефакту.

---
