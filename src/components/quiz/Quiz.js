import React from 'react';
import quizImage from './assets/quiz passing.png';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="quiz-container">
      <img src={quizImage} alt="Quiz" className="quiz-image" />
    </div>
  );
};

export default Quiz;
