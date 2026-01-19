"use client";

export default function ClinicianCard({
  result,
  patientName,
  patientId,
  onReset,
}) {
  const getCleanUrgency = text => {
    if (!text) return "Medium";
    const lower = text.toLowerCase();
    if (lower.includes("high") || lower.includes("urgent")) return "High";
    if (lower.includes("medium") || lower.includes("moderate")) return "Medium";
    if (lower.includes("low")) return "Low";
    return "Medium";
  };

  const rawUrgency = result.Urgency || result.Urgency_Level || "Medium";
  const urgencyValue = getCleanUrgency(rawUrgency);

  const urgencyReason =
    result.Urgency_Reasoning || (rawUrgency.length > 20 ? rawUrgency : "");

  const getUrgencyColor = urgency => {
    const level = urgency.toLowerCase();
    if (level === "high") return "bg-red-100 text-red-800 border-red-300";
    if (level === "medium")
      return "bg-amber-100 text-amber-800 border-amber-300";
    return "bg-emerald-100 text-emerald-800 border-emerald-300";
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold text-purple-700">
            🎗️ Jarurat Care - Patient Assessment
          </h2>
          <span
            className={`px-4 py-2 rounded-full text-sm font-bold border-2 whitespace-nowrap ${getUrgencyColor(urgencyValue)}`}
          >
            {urgencyValue.toUpperCase()}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 mt-3">
          <div className="bg-purple-50 px-3 py-2 rounded">
            <span className="font-semibold text-purple-700">Patient:</span>{" "}
            {patientName}
          </div>
          {patientId && (
            <div className="bg-purple-50 px-3 py-2 rounded">
              <span className="font-semibold text-purple-700">ID:</span>{" "}
              {patientId}
            </div>
          )}
          {result.Cancer_Type && (
            <div className="bg-purple-50 px-3 py-2 rounded">
              <span className="font-semibold text-purple-700">
                Cancer Type:
              </span>{" "}
              {result.Cancer_Type}
            </div>
          )}
          {result.Treatment_Stage && (
            <div className="bg-purple-50 px-3 py-2 rounded">
              <span className="font-semibold text-purple-700">
                Treatment Stage:
              </span>{" "}
              {result.Treatment_Stage}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {urgencyReason && (
          <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 italic border-l-4 border-gray-400">
            <span className="font-semibold not-italic">
              Clinical Reasoning:{" "}
            </span>
            {urgencyReason}
          </div>
        )}

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="font-semibold text-purple-900 mb-2">
            Clinical Summary
          </h3>
          <p className="text-gray-700 leading-relaxed">{result.Summary}</p>
        </div>

        {result.Key_Flags && result.Key_Flags.length > 0 && (
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="font-semibold text-amber-900 mb-3">
              Key Clinical Flags
            </h3>
            <ul className="space-y-2">
              {result.Key_Flags.map((flag, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-amber-600 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.Timeline && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 mb-1">
                Timeline
              </h4>
              <p className="text-gray-800">{result.Timeline}</p>
            </div>
            {result.Medication_History && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-600 mb-1">
                  Medication History
                </h4>
                <p className="text-gray-800">{result.Medication_History}</p>
              </div>
            )}
          </div>
        )}

        {result.Characteristics && (
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="text-sm font-semibold text-purple-900 mb-2">
              Symptom Characteristics
            </h4>
            <p className="text-gray-700">{result.Characteristics}</p>
          </div>
        )}

        {result.Support_Recommendations &&
          result.Support_Recommendations.length > 0 && (
            <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
              <h4 className="text-sm font-semibold text-teal-900 mb-3">
                💚 Recommended Support Services
              </h4>
              <ul className="space-y-2">
                {result.Support_Recommendations.map((rec, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-teal-600 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">
          📞 Additional Support Resources
        </h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Emotional Support: Available through Jarurat Care helpline</li>
          <li>• Financial Assistance: Contact our support coordinator</li>
          <li>• Nutrition Counseling: Specialized cancer nutrition guidance</li>
          <li>• Transportation Help: Assistance for treatment visits</li>
        </ul>
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <button
          onClick={onReset}
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          New Assessment
        </button>
        <button
          onClick={() => typeof window !== "undefined" && window.print()}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Print Report
        </button>
      </div>

      <div className="text-xs text-gray-500 text-center pt-2">
        🎗️ Jarurat Care - Supporting cancer patients and their families. This is
        an AI-assisted assessment tool. Always consult with your oncologist or
        medical team for diagnosis and treatment decisions.
      </div>
    </div>
  );
}
