# 🎗️ Jarurat Care Support

AI-powered triage tool for cancer patients and their families. Built for [Jarurat Care](https://www.jarurat.care/) NGO. 

Uses Gemini API for generating AI powered insights to the patients or their family about how sevre the problem is, what possible and immediate actions they need to take and other useful insights for doctors too. 

## Features

- **Cancer-specific triage** — Tailored for oncology patients with treatment-aware urgency assessment
- **AI-powered analysis** — Uses Google Gemini to provide compassionate, clinically-informed guidance
- **Family/caregiver support** — Allows submissions on behalf of patients
- **Printable reports** — Generate assessment reports for medical consultations

## Quick Start

```bash
npm install

npm run dev    # To run development server
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables
Create a `.env.local` file in the root directory and then put your Gemini API into it. 

| Variable         | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `GEMINI_API_KEY` | Google AI Studio API key ([Get one here](https://aistudio.google.com/)) |

## Tech Stack

- **Next.js 16** — React framework used for SSR and optimized development. 
- **Tailwind CSS 4** — Styling the Components. 
- **Google Gemini** — AI model for generating the AI powered insights.

---

⚕️ _This is an AI-assisted tool. Always consult qualified medical professionals for diagnosis and treatment._
