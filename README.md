# Älvsbyns Städteam – Webbplats

Referenswebbplats för Älvsbyns Städteam, ett lokalt städföretag i Älvsbyn.  
Byggd som portföljexempel av **Nortropic**.

## Tech stack

- **Next.js** (App Router) + TypeScript
- **CSS Modules** – inga externa UI-ramverk
- **Statisk export** (`output: 'export'`)
- **Vercel** – automatisk deploy vid push till `main`

## Kom igång lokalt

```bash
npm install
npm run dev
```

## Bygga för produktion

```bash
npm run build
```

Output hamnar i `out/`.

## Deploy

Repot är kopplat till Vercel. Pusha till `main` för automatisk deploy.
