// QuizPage.js
import React from 'react';
import QuizComponent from '../components/Quiz';
import Header from '../components/Header';


function QuizPage() {

  return (
    <div className='quizContainer'>
      <div className='quizHeader'>
        <Header />
      </div>
      <div className='quizComponent'>
        <QuizComponent />
      </div>
    </div>
  );
};

export default QuizPage;
