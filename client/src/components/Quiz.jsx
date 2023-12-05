// QuizComponent.js
import React, { useState } from 'react';

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill('')); // Assuming there are 5 questions

  const questions = [
    {
        question: 'Do you even like hotdogs?',
        options: ['Yes', 'No'],
    },
    {
        question: 'How many programming languages do you know?',
        options: ['1-2', '3-5', '6-10', 'More than 10'],
    },
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    },
    {
        question: 'Do you prefer tea or coffee?',
        options: ['Tea', 'Coffee', 'Both', 'Neither'],
    },
    {
        question: 'What is your favorite programming framework?',
        options: ['React', 'Angular', 'Vue', 'Other'],
    },
];

  const handleAnswerChange = (answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = answer;
      return updatedAnswers;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleSubmit = () => {
    console.log(answers); // Handle submission logic here
  };

  return (
    <div className='formContainer'>
      {currentQuestion < questions.length ? (
        <div>
          {/* <h2>Question {currentQuestion + 1}</h2> */}
          <p>{questions[currentQuestion].question}</p>
          <select className='selection'
            value={answers[currentQuestion]}
            onChange={(e) => handleAnswerChange(e.target.value)}
          >
            <option value="" disabled>
              Select an answer
            </option>
            {questions[currentQuestion].options.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button className='btn' onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed</h2>
          <button onClick={handleSubmit}>Submit Answers</button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
