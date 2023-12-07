import React, { useState } from 'react';

export default function QuestionOne() {
    const [answer, setAnswer] = useState('');
    const question = {
        title: 'Do you even like hotdogs?',
        options: ['Yes', 'No'], 
    };

    const handleAnswerChange = (answer) => {
        setAnswer(answer);
    };

    return (
        <div>
            <select className='selection'
            value={question.title}
            onChange={(e) => handleAnswerChange(e.target.value)}
            >
                {question.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
