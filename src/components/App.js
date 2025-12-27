import React, { useState } from 'react';
import './../styles/App.css';
import Step from './Step';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Step
        id="step1"
        handleNextStep={handleNextStep}
        handleFormData={handleFormData}
        formData={formData}
        currentStep={currentStep}
        handlePreviousStep={handlePreviousStep}
      />
    </form>
  );
};

export default App;
