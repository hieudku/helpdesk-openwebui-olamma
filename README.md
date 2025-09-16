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
```
## Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/hieudku/helpdesk-openwebui-ollama.git
cd helpdeskAIWeltec
```

### 2. Install Ollama and pull models
Start the server
```bash
ollama serve
```
Check models
```bash
ollama list
```

Pull a model (Mistral:7b-instruct)
```bash
ollama pull mistral:7b-instruct
```

Confirm model
```bash
ollama list
```

### 3. Run OpenWebUI with Docker
```bash
docker run -d --name open-webui `
  -p 3000:8080 `
  -e OLLAMA_BASE_URL=http://host.docker.internal:11434 `
  -e DEFAULT_MODEL=mistral:7b-instruct `
  -v open-webui:/app/backend/data `
  --restart unless-stopped `
  ghcr.io/open-webui/open-webui:main
```
### 4. Check the container is running
```bash
docker ps
```

### 5. Access the interface
http://localhost:3000
