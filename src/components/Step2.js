import React from 'react';

export default function Step2({
  handleNextStep,
  handleFormData,
  formData,
  handlePreviousStep,
}) {
  return (
    <div>
      <input
        id="model"
        type="text"
        value={formData.carModel}
        onChange={(e) => handleFormData('carModel', e.target.value)}
      />
      <input
        id="car_pricee"
        type="text"
        value={formData.carPrice}
        onChange={(e) => handleFormData('carPrice', e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          handlePreviousStep();
        }}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => {
          handleNextStep();
        }}
      >
        Next
      </button>
    </div>
  );
}
