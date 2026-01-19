"use client";

import { useState } from "react";

export default function TriageForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    primaryComplaint: "",
    description: "",
    duration: "",
    cancerType: "",
    treatmentStage: "",
    recentTreatmentDate: "",
    submitterType: "patient",
    careTeamContact: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">
          Jarurat Care Support
        </h1>
        <p className="text-gray-600">Cancer Patient & Family Assistance</p>
      </div>

      <div>
        <label
          htmlFor="patientName"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Patient Name *
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          required
          value={formData.patientName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900 placeholder:text-gray-400"
          placeholder="Patient's Full Name"
        />
      </div>

      <div>
        <label
          htmlFor="patientId"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Patient ID (Optional)
        </label>
        <input
          type="text"
          id="patientId"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900 placeholder:text-gray-400"
          placeholder="Hospital/Clinic ID"
        />
      </div>

      <div>
        <label
          htmlFor="submitterType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          I am submitting as *
        </label>
        <select
          id="submitterType"
          name="submitterType"
          required
          value={formData.submitterType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white text-gray-900"
        >
          <option value="patient">Patient</option>
          <option value="family">Family Member</option>
          <option value="caregiver">Caregiver</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="cancerType"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Cancer Type/Diagnosis *
        </label>
        <select
          id="cancerType"
          name="cancerType"
          required
          value={formData.cancerType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white text-gray-900"
        >
          <option value="">Select cancer type</option>
          <option value="Breast Cancer">Breast Cancer</option>
          <option value="Lung Cancer">Lung Cancer</option>
          <option value="Blood Cancer (Leukemia/Lymphoma)">
            Blood Cancer (Leukemia/Lymphoma)
          </option>
          <option value="Colorectal Cancer">Colorectal Cancer</option>
          <option value="Prostate Cancer">Prostate Cancer</option>
          <option value="Ovarian Cancer">Ovarian Cancer</option>
          <option value="Stomach Cancer">Stomach Cancer</option>
          <option value="Liver Cancer">Liver Cancer</option>
          <option value="Brain Tumor">Brain Tumor</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="treatmentStage"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Treatment Stage *
        </label>
        <select
          id="treatmentStage"
          name="treatmentStage"
          required
          value={formData.treatmentStage}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white text-gray-900"
        >
          <option value="">Select treatment stage</option>
          <option value="Pre-treatment / Newly Diagnosed">
            Pre-treatment / Newly Diagnosed
          </option>
          <option value="Active Treatment (Chemotherapy)">
            Active Treatment (Chemotherapy)
          </option>
          <option value="Active Treatment (Radiation)">
            Active Treatment (Radiation)
          </option>
          <option value="Post-Surgery Recovery">Post-Surgery Recovery</option>
          <option value="Post-Treatment Follow-up">
            Post-Treatment Follow-up
          </option>
          <option value="Palliative Care">Palliative Care</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="primaryComplaint"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Primary Concern *
        </label>
        <select
          id="primaryComplaint"
          name="primaryComplaint"
          required
          value={formData.primaryComplaint}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white text-gray-900"
        >
          <option value="">Select primary concern</option>
          <option value="Treatment Side Effects">
            Treatment Side Effects (Chemo/Radiation)
          </option>
          <option value="Pain Management">Pain Management</option>
          <option value="Fever During Treatment">Fever During Treatment</option>
          <option value="Nausea & Vomiting">Nausea & Vomiting</option>
          <option value="Nutrition & Digestive Issues">
            Nutrition & Digestive Issues
          </option>
          <option value="Post-Surgery Concerns">Post-Surgery Concerns</option>
          <option value="Fatigue & Weakness">Fatigue & Weakness</option>
          <option value="Emotional/Psychological Support">
            Emotional/Psychological Support
          </option>
          <option value="Medication Questions">Medication Questions</option>
          <option value="Financial Assistance Needed">
            Financial Assistance Needed
          </option>
          <option value="Other Symptoms">Other Symptoms</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="recentTreatmentDate"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Last Treatment Date (if applicable)
        </label>
        <input
          type="date"
          id="recentTreatmentDate"
          name="recentTreatmentDate"
          value={formData.recentTreatmentDate}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900"
        />
      </div>

      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Duration *
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          required
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900 placeholder:text-gray-400"
          placeholder="e.g., 3 days, 2 weeks, since yesterday"
        />
      </div>

      <div>
        <label
          htmlFor="careTeamContact"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Oncologist/Care Team Contact (Optional)
        </label>
        <input
          type="text"
          id="careTeamContact"
          name="careTeamContact"
          value={formData.careTeamContact}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition text-gray-900 placeholder:text-gray-400"
          placeholder="Dr. Name or Hospital Contact"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Detailed Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition resize-none text-gray-900 placeholder:text-gray-400"
          placeholder="Please describe your symptoms/concern in detail. Include: When did it start? How severe is it? What makes it better or worse? Any medications taken? Any recent treatments?"
        />
        <p className="text-sm text-gray-500 mt-2">
          Be as detailed as possible to help us provide appropriate support and
          guidance.
        </p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Analyzing...
          </>
        ) : (
          "Submit for Triage"
        )}
      </button>
    </form>
  );
}
