import React from 'react';

export default function Step3({
  handleNextStep,
  handleFormData,
  formData,
  handlePreviousStep,
}) {
  return (
    <div id="step3">
      <input
        id="card_info"
        type="text"
        value={formData.cardInfo}
        onChange={(e) => handleFormData('cardInfo', e.target.value)}
      />
      <input
        id="expiry_date"
        type="text"
        value={formData.expiryDate}
        onChange={(e) => handleFormData('expiryDate', e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          handlePreviousStep();
        }}
      >
        Previous
      </button>
      <button>Submit</button>
    </div>
  );
}
