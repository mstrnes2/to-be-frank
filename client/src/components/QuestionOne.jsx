import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";

export default function QuestionOne() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/QuizPage");
  };

  const handleNoClick = () => {
    Auth.removeUserData();
    console.log("User data yeeted because they don't like hotdogs");
  };

  return (
    <div className="containerOne">
      Do you even like hodogs?
      <div>
        <button className="btns" onClick={handleYesClick}>
          Yes
        </button>
        <button className="btns">No</button>
      </div>
    </div>
  );
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
