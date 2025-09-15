# School Helpdesk AI

An AI-powered helpdesk system for schools, built on top of [Open WebUI](https://github.com/open-webui/open-webui) and [Ollama](https://ollama.com).  
This project provides a campus-specific chatbot where students and staff can query information such as locations, contacts, and services.  

---

## Features
- Interactive web-based chat UI (OpenWebUI).
- Run with **Mistral 7B Instruct** (default) Ollama models.
- Upload and manage custom **knowledge resources** (campus info, contacts).
- Docker setup for easy deployment.
- Extensible for custom prompts and UI.

---

## Prerequisites
Before running this project, install:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)  
- [Ollama](https://ollama.com/download)  

Verify installation:

```bash
docker --version
ollama --version

## Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/<your-username>/helpdeskAIWeltec.git
cd helpdeskAIWeltec

ollama pull mistral:7b-instruct
ollama pull llama2

ollama list

docker run -d --name open-webui \
  -p 3000:8080 \
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 \
  -e DEFAULT_MODEL=mistral:7b-instruct \
  -v open-webui:/app/backend/data \
  ghcr.io/open-webui/open-webui:main

docker ps

http://localhost:3000
