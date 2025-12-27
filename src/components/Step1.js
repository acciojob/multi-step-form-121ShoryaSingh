import React from 'react';

export default function Step1({ handleNextStep, handleFormData, formData }) {
  const handleSubmit = () => {
    handleNextStep();
  };

  return (
    <div id="step1">
      <input
        id="first_name"
        type="text"
        value={formData.firstName}
        onChange={(e) => handleFormData('firstName', e.target.value)}
      />
      <input
        id="last_name"
        type="text"
        value={formData.lastName}
        onChange={(e) => handleFormData('lastName', e.target.value)}
      />
      <div id="step3"></div>
      <button
        id="step2"
        type="button"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
}
