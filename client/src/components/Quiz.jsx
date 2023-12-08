// QuizComponent.js
import React, { useState } from 'react';
import { chooseRestaurants } from '../utils/quiz-utils';

const QuizComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(3).fill('')); 
	const [quizResults, setQuizResults] = useState(null); 

	const questions = [
		{
			question: 'Do you want a corn dog or a hotdog?',
			options: ['Corn dog', 'Hotdog'],
		},
		{
			question: 'What toppings do you prefer?',
			options: ['Chili/Cheese', 'Standard Condiments', 'Mexican', 'Plain'],
		},
		{
			question: 'What size dog are you looking for?',
			options: ['Small', 'Medium', 'Large'],
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
        // Create an object with the answers from the state
        const userAnswers = [
			{ dogType: answers[0] }, // Assuming answers[0] is the dogType
			{ topping: answers[1] }, // Assuming answers[1] is the topping
			{ size: answers[2] }    // Assuming answers[2] is the size
		];
		

        // Call chooseRestaurants function with userAnswers as the argument
        const results = chooseRestaurants(userAnswers);

        // Log or handle the results as needed
		setQuizResults(results);
        console.log(results);
    };


	return (
		<div className='formContainer'>
			{currentQuestion < questions.length ? (
				<div>
					{/* <h2>Question {currentQuestion + 1}</h2> */}
					<p>{questions[currentQuestion].question}</p>
					<select
						className='selection'
						value={answers[currentQuestion]}
						onChange={(e) => handleAnswerChange(e.target.value)}>
						<option
							value=''
							disabled>
							Select an answer
						</option>
						{questions[currentQuestion].options.map(
							(option, optionIndex) => (
								<option
									key={optionIndex}
									value={option}>
									{option}
								</option>
							)
						)}
					</select>
					<button
						className='btn'
						onClick={handleNextQuestion}>
						Next
					</button>
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
