# DevKB-Web - Web Interface for Developer Knowledge Base

A modern web-based interface for managing and searching your code knowledge base.

## Features

- Modern web UI with React
- Real-time semantic search
- Document management dashboard
- Code syntax highlighting
- Dark/Light theme
- Responsive design

## Tech Stack

- **Frontend**: React + TailwindCSS
- **Backend**: FastAPI (Python)
- **Database**: SQLite + ChromaDB
- **Embeddings**: sentence-transformers

## Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## License

MIT
