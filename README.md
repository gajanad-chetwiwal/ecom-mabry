# Ecom Mabry website

Marketing site for ECOMMABRY LLC, built with Next.js (App Router). Every page is static.

## Edit business details

All business details (name, phone, emails, address, domain) live in **`site.config.ts`**.
Change them there and every page updates. Values marked `TODO` are placeholders.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy

Import this repo on Vercel. It detects Next.js automatically, so no extra settings are needed.

## Contact form

The form sends messages to `email.support` through FormSubmit. The first submission sends a one-time
activation email to that inbox. Click the link in it to start receiving messages.
