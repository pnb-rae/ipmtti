# IPMTTI Website (Vite + React + TypeScript)

Production URL: https://ipmtti.vercel.app

## Overview

This repository contains the IPMTTI (International Plant Machinery & Technical Training Institute) website built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

Key features:
- Admissions and contact forms with Email + WhatsApp notifications (PDF attachment)
- Supabase integration for storage (optional)
- SEO optimized (OG/Twitter tags, canonical, sitemap, robots, JSON-LD)
- Accessible, responsive UI components

## Getting Started

Requirements:
- Node.js 18+

Install and run:
```sh
npm i
npm run dev
```

Build:
```sh
npm run build
npm run preview
```

## Environment Variables

Create `.env.local` in the project root. See `env.example` for all available keys.

Minimum for notifications:
```
# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=your-email@gmail.com

# WhatsApp Cloud API
WHATSAPP_ACCESS_TOKEN=your-access-token
WHATSAPP_PHONE_ID=your-phone-id
WHATSAPP_TO=254715016300
```

Optional (for WhatsApp PDF uploads):
```
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
SUPABASE_BUCKET=...
```

## Testing Notifications

Local test script:
```sh
npm run test:notifications
```

Or submit the forms from the site. You should receive:
- Email with HTML + PDF
- WhatsApp text (and PDF if storage configured)

## Tech Stack
- Vite
- React + TypeScript
- Tailwind CSS + shadcn-ui
- Supabase (optional storage)
- pdfkit, nodemailer

## Deployment
Hosted on Vercel. Add environment variables in Vercel Project Settings → Environment Variables, then deploy.

### Generate Sitemap
Optionally regenerate the sitemap when routes change:
```
npm run generate:sitemap
```

## License
© IPMTTI. All rights reserved.
