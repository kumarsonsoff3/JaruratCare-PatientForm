"use client";

import { useState } from "react";
import TriageForm from "@/components/TriageForm";
import ClinicianCard from "@/components/ClinicianCard";

export default function Home() {
  const [triageResult, setTriageResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [patientData, setPatientData] = useState(null);

  const handleSubmit = async formData => {
    setIsLoading(true);
    setError(null);
    setPatientData(formData);

    try {
      const response = await fetch("/api/triage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to process triage");
      }

      setTriageResult(data.data);
    } catch (err) {
      setError(err.message);
      console.error("Triage error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setTriageResult(null);
    setError(null);
    setPatientData(null);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-purple-50 to-pink-100 p-4">
      <div className="w-full flex flex-col items-center py-8">
        {error && (
          <div className="w-full max-w-2xl mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {!triageResult ? (
          <TriageForm onSubmit={handleSubmit} isLoading={isLoading} />
        ) : (
          <ClinicianCard
            result={triageResult}
            patientName={patientData.patientName}
            patientId={patientData.patientId}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
}
