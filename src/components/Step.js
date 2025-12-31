import React from 'react';

export default function Step({
  handleNextStep,
  handleFormData,
  formData,
  handlePreviousStep,
  currentStep,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
         <div style={{display: currentStep === 1 ? 'block' : 'none'}}>
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

          <button
            type="button"
            onClick={() => {
              handleNextStep();
            }}
          >
            Next
          </button>
        </div>
        <div id="step2" style={{display: currentStep === 2 ? 'block' : 'none'}}>
          <input
            id="model"
            type="text"
            value={formData.carModel}
            onChange={(e) => handleFormData('carModel', e.target.value)}
          />
          <input
            id="car_price"
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

        <div id="step3" style={{display: currentStep === 3 ? 'block' : 'none'}}>
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
          <button type="submit">Submit</button>
        </div>
    </form>
  );
}
