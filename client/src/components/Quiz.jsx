// QuizComponent.js
import React, { useState } from 'react';
import { chooseRestaurants } from '../utils/quiz-utils';
import { UPDATE_QUIZ_RESULTS } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import formatDate from '../utils/dateFormat';



const QuizComponent = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(3).fill(''));
	const [quizResults, setQuizResults] = useState(null);
	const [updateQuizResults, { loading, error }] = useMutation(UPDATE_QUIZ_RESULTS);

	const questions = [
		{
			question: 'Corn dog or hotdog?',
			options: ['Corn dog', 'Hotdog'],
		},
		{
			question: 'What toppings do you prefer?',
			options: ['Chili/Cheese', 'Standard Condiments', 'Mexican', 'Plain'],
		},
		{
			question: 'What size are you looking for?',
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

	const handleSubmit = async () => {
		// Create an object with the answers from the state
		const userAnswers = {
			dogType: answers[0], // Assuming answers[0] is the dogType
			topping: answers[1], // Assuming answers[1] is the topping
			size: answers[2], // Assuming answers[2] is the size
		};
		
		// Call chooseRestaurants function with userAnswers as the argument
		const results = chooseRestaurants(userAnswers);
		console.log(results);
		console.log(results[0].name, results[0].image);
		try {
		// Log or handle the results as needed.
			const currentDate = new Date();
			const dateString = currentDate.toISOString();
			const { data } = await updateQuizResults({
				variables: {
					restaurant: results[0].name, 
					restaurantImage: results[0].image,
					date: dateString,
					link: results[0].link 
				}
			})
			setQuizResults(results);
			console.log(results);


			window.location.replace('/Profile');
		} catch (err) {
			console.log(error);
		}
	};

	return (
		<div className='quizContainer'>
			{currentQuestion < questions.length ? (
				<div>
					{/* <h2>Question {currentQuestion + 1}</h2> */}
					<p>{questions[currentQuestion].question}</p>
					<div className='selectionandnext'>
						<select
							className='selection'
							value={answers[currentQuestion]}
							onChange={(e) => {
								handleAnswerChange(e.target.value);
								handleNextQuestion();
							}}>
							<option
								value=''
								disabled>
								Select an answer
							</option>
							{questions[currentQuestion].options.map(
								(option, optionIndex) => (
									<option
										key={optionIndex}
										value={option}
										className='options'>
										{option}
									</option>
								)
							)}
						</select>
						{/* <button
							className='next-button'
							onClick={handleNextQuestion}>
							Next
						</button> */}
					</div>
				</div>
			) : (
				<div className='quiz-completed'>
					<h3>Quiz Completed</h3>
					<button
						className='submitanswers-button'
						onClick={handleSubmit}>
						Submit
					</button>
				</div>
			)}
		</div>
	);
};

export default QuizComponent;
