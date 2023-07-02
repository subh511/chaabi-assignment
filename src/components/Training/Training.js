import React from 'react';
import trainingImage from './assets/Group 289229.png';
import './Training.css';

const Training = () => {
  return (
    <div className="training-container">
      <img src={trainingImage} alt="Training" className="training-image" />
    </div>
  );
};

export default Training;
