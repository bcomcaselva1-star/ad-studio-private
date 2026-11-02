# Obsidian AI Workspace

A single, modular, owner-oriented web workspace. This repository is the runnable foundation, not a claim that every external service is already integrated.

## Requirements
- Node.js 20.9+
- npm
- A code editor such as VS Code

## Run locally
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open Terminal in that folder.
4. Run:

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

5. Open http://localhost:3000

The workspace shell and module routes run without API keys. The AI message endpoint intentionally returns a provider-not-configured response until a secure server-side provider integration is added.

## Included
- Obsidian / lavender responsive design system
- Unified sidebar and dashboard
- 12 module routes
- Social Studio foundation inspired by Later
- AI Assistant integration placeholder
- Server-side API route pattern
- Environment variable template

## Important production work still required
- Owner-only authentication and server-side authorization
- Supabase database schema, migrations, row-level security and object storage
- AI provider adapters and usage/cost controls
- Social OAuth and approved publishing APIs
- Real media editor, rendering queue and storage/CDN
- Design canvas engine and export pipeline
- GitHub OAuth/repository integration
- Tests, logging, backups, deployment and security review

Do not deploy this foundation publicly with private data until owner authentication and authorization are implemented and tested. Never put API secrets in browser code or commit `.env.local`.

## Architecture rule
Each capability is a module inside this one Next.js application. Avoid creating a separate website for each reference app. Integrate only the features that are useful, legally/API-accessible, and technically sustainable.
