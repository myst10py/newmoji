# NewMoji News Summarizer

A modern news summarization application that converts news articles into easy-to-understand summaries with emoji headlines!

## Project Structure
```
newmoji/
├── backend/          # Django backend application
│   ├── api/         # API endpoints and routing
│   ├── core/        # Core application logic
│   ├── services/    # Business logic services
│   └── tests/       # Backend tests
└── frontend/        # React frontend application
    ├── src/         # Source code
    ├── components/  # React components
    └── tests/       # Frontend tests
```

## Prerequisites
- Python 3.10+
- Node.js 18+
- PostgreSQL 15+
- Redis

## Getting Started

### Backend Setup
1. Create and activate virtual environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint and Prettier for JavaScript/TypeScript code
- Write tests for new features
- Keep components small and focused
- Use TypeScript interfaces for all data structures

## API Keys Required
- NewsData.io API key
- Anthropic Claude API key

## Learning Resources
- Django Documentation: https://docs.djangoproject.com/
- Django Ninja: https://django-ninja.rest-framework.com/
- React Documentation: https://react.dev/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
- TanStack Query: https://tanstack.com/query/latest/
