import React from "react";

export default function QuestionOne(){

    return (
        <div className="containerOne">
        <h1>Do you even like hodogs?</h1>
        <div>
        <button className="btns">Yes</button>
        <button className="btns">No</button>
        </div>
        </div>
    )
}





// import React, { useState } from 'react';

// export default function QuestionOne() {
//     const [answer, setAnswer] = useState('');
//     const question = {
//         title: 'Do you even like hotdogs?',
//         options: ['Yes', 'No'], 
//     };

//     const handleAnswerChange = (answer) => {
//         setAnswer(answer);
//     };

//     return (
//         <div>
//             <select className='selection'
//             value={question.title}
//             onChange={(e) => handleAnswerChange(e.target.value)}
//             >
//                 {question.options.map(option => (
//                     <option key={option} value={option}>{option}</option>
//                 ))}
//             </select>
//         </div>
//     )
// }
