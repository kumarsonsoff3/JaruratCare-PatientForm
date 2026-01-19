# 🎗️ Jarurat Care Support

AI-powered triage tool for cancer patients and their families. Built for [Jarurat Care](https://www.jarurat.care/) NGO.

## Features

- **Cancer-specific triage** — Tailored for oncology patients with treatment-aware urgency assessment
- **AI-powered analysis** — Uses Google Gemini to provide compassionate, clinically-informed guidance
- **Family/caregiver support** — Allows submissions on behalf of patients
- **Printable reports** — Generate assessment reports for medical consultations

## Quick Start

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable         | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `GEMINI_API_KEY` | Google AI Studio API key ([Get one here](https://aistudio.google.com/)) |

## Tech Stack

- **Next.js 16** — React framework
- **Tailwind CSS 4** — Styling
- **Google Gemini** — AI model

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add `GEMINI_API_KEY` to environment variables after deployment.

---

⚕️ _This is an AI-assisted tool. Always consult qualified medical professionals for diagnosis and treatment._
