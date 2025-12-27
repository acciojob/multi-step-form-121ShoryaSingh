import React, { useState } from 'react';
import './../styles/App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    carModel: '',
    carPrice: '',
    cardInfo: '',
    expiryDate: '',
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <form>
      {currentStep === 1 && (
        <Step1
          id="step1"
          handleNextStep={handleNextStep}
          handleFormData={handleFormData}
          formData={formData}
        />
      )}
      {currentStep === 2 && (
        <Step2
          id="step2"
          handleNextStep={handleNextStep}
          handleFormData={handleFormData}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      )}
      {currentStep === 3 && (
        <Step3
          id="step3"
          handleNextStep={handleNextStep}
          handleFormData={handleFormData}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      )}
    </form>
  );
};

export default App;
