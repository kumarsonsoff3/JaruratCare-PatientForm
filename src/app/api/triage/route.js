import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      patientName,
      patientId,
      primaryComplaint,
      description,
      duration,
      cancerType,
      treatmentStage,
      recentTreatmentDate,
      submitterType,
      careTeamContact,
    } = await request.json();

    if (
      !patientName ||
      !primaryComplaint ||
      !description ||
      !duration ||
      !cancerType ||
      !treatmentStage
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Gemini API key not configured. Please add GEMINI_API_KEY to your .env.local file.",
        },
        { status: 500 },
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      generationConfig: {
        temperature: 0.3,
        responseMimeType: "application/json",
      },
    });

    const prompt = `You are an Expert Oncology Support Specialist working with Jarurat Care, an NGO supporting cancer patients and their families. Analyze the following patient concern with deep understanding of cancer treatment challenges and provide a structured, compassionate assessment.

Patient Information:
- Name: ${patientName}
${patientId ? `- Patient ID: ${patientId}` : ""}
- Cancer Type: ${cancerType}
- Treatment Stage: ${treatmentStage}
${recentTreatmentDate ? `- Last Treatment Date: ${recentTreatmentDate}` : ""}
- Primary Concern: ${primaryComplaint}
- Duration of Current Concern: ${duration}
${submitterType !== "patient" ? `- Submitted by: ${submitterType}` : ""}
${careTeamContact ? `- Care Team Contact: ${careTeamContact}` : ""}
- Detailed Description: ${description}

CRITICAL CANCER-SPECIFIC CONTEXT:
- Cancer patients undergoing chemotherapy/radiation are immunocompromised
- Fever >38°C (100.4°F) during treatment is a medical emergency (neutropenic fever)
- Treatment side effects can be severe and require immediate attention
- Pain management is crucial for quality of life
- Emotional/psychological support is essential for patients and families
- Many symptoms could be treatment-related, disease progression, or unrelated conditions

Instructions:
1. Assess urgency with cancer treatment context in mind (e.g., fever during chemo = HIGH urgency)
2. Identify if symptoms are likely treatment side effects, disease-related, or require immediate medical attention
3. Provide compassionate, clear guidance considering the patient's vulnerable state
4. Flag any red flags that require immediate oncology team contact
5. Consider if patient needs additional support services (nutrition, counseling, financial assistance)

URGENCY LEVEL GUIDELINES FOR CANCER PATIENTS:
- URGENT/HIGH: Fever during treatment, severe pain, difficulty breathing, severe bleeding, chest pain, confusion, severe dehydration, signs of infection
- MEDIUM: Moderate side effects, manageable pain, mild nausea/vomiting, fatigue, nutrition concerns
- LOW: Routine questions, mild symptoms, follow-up concerns, emotional support needs

IMPORTANT: You must respond with ONLY a valid JSON object (no markdown, no code blocks, no additional text). The JSON must have exactly these keys:
{
  "Summary": "A concise, compassionate clinical summary in 2-3 sentences with cancer context",
  "Urgency": "One of: Low, Medium, High, Urgent",
  "Urgency_Reasoning": "Detailed explanation for the urgency level, specifically addressing cancer treatment context",
  "Timeline": "Description of symptom progression with relevance to treatment schedule",
  "Characteristics": "Key symptom characteristics and their potential relationship to cancer/treatment",
  "Medication_History": "Any medications mentioned and their effectiveness, including cancer treatments",
  "Key_Flags": ["Array of concerning signs requiring immediate attention or oncology team contact"],
  "Cancer_Type": "${cancerType}",
  "Treatment_Stage": "${treatmentStage}",
  "Support_Recommendations": ["Array of additional support services that may help (e.g., nutrition counseling, pain management, emotional support, financial assistance)"]
}

Respond with valid JSON only:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    let parsedResult;
    try {
      parsedResult = JSON.parse(text);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError, "Raw text:", text);

      // Fallback if parsing fails
      parsedResult = {
        Summary:
          text.substring(0, 300) ||
          "Unable to generate summary. Please try again.",
        Urgency: "Medium",
        Urgency_Reasoning:
          "Unable to parse AI response properly. Manual review required.",
        Timeline: duration,
        Characteristics: primaryComplaint,
        Medication_History: "Not specified",
        Key_Flags: [
          "AI response parsing issue - Please contact Jarurat Care support for manual review",
        ],
        Cancer_Type: cancerType,
        Treatment_Stage: treatmentStage,
        Support_Recommendations: [
          "Please contact Jarurat Care support team directly",
        ],
      };
    }

    return NextResponse.json({
      success: true,
      data: parsedResult,
    });
  } catch (error) {
    console.error("Error processing triage:", error);
    return NextResponse.json(
      { error: "Failed to process triage request: " + error.message },
      { status: 500 },
    );
  }
}
