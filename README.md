# 🎗️ Jarurat Care Support

AI-powered triage tool for cancer patients and their families. Built for [Jarurat Care](https://www.jarurat.care/) NGO.

<img width="1920" height="1080" align="center" alt="Screenshot 2026-01-19 174141" src="https://github.com/user-attachments/assets/29afa583-7a49-473b-98b7-765cafbf3bf4" />

## Why This Matters for Jarurat Care

Jarurat Care is an NGO dedicated to supporting cancer patients and their families through their treatment journey. This tool addresses key challenges they face:

- **24/7 Symptom Assessment** — Patients often experience symptoms outside clinic hours. This tool provides immediate guidance on urgency levels, helping families know when to seek emergency care vs. wait for a scheduled appointment.

- **Reducing Caregiver Anxiety** — Family members caring for cancer patients frequently feel overwhelmed. The AI provides clear, compassionate explanations that help them understand what they're dealing with.

- **Treatment-Aware Intelligence** — Unlike generic symptom checkers, this tool understands cancer treatment context (e.g., fever during chemotherapy is a medical emergency requiring immediate attention).

- **Resource Connection** — Automatically suggests relevant Jarurat Care support services like nutrition counseling, financial assistance, and emotional support based on patient needs.

- **Documentation for Doctors** — Printable assessment reports give oncologists quick context during consultations, improving care coordination.

## Features

- **Cancer-specific triage** — Tailored for oncology patients with treatment-aware urgency assessment
- **AI-powered analysis** — Uses Google Gemini to provide compassionate, clinically-informed guidance
- **Family/caregiver support** — Allows submissions on behalf of patients
- **Printable reports** — Generate assessment reports for medical consultations

## Tech Stack

| Technology            | Version | Purpose                                                                                                                                     |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js**           | 16.x    | React framework providing server-side rendering (SSR) for fast initial loads, API routes for backend logic, and optimized production builds |
| **React**             | 19.x    | Component-based UI library for building the interactive form and assessment display                                                         |
| **Tailwind CSS**      | 4.x     | Utility-first CSS framework enabling rapid UI development with consistent styling and responsive design                                     |
| **Google Gemini API** | Latest  | Large language model (gemini-flash-latest) configured with JSON output mode for structured, reliable AI responses                           |

### Architecture

```
src/
├── app/
│   ├── page.js          # Main UI - form & results display
│   ├── layout.js        # App shell with metadata
│   └── api/triage/      # Backend API route for Gemini calls
└── components/
    ├── TriageForm.js    # Patient intake form
    └── ClinicianCard.js # Assessment results display
```

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/)

---

⚕️ _This is an AI-assisted tool. Always consult qualified medical professionals for diagnosis and treatment._
