import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from '../utils/mutations';

export default function QuestionOne() {
  const navigate = useNavigate();
  const [deleteUser] = useMutation(DELETE_USER);

  const handleYesClick = () => {
    navigate("/QuizPage");
  };

  const handleNoClick = async () => {
    console.log("User data yeeted because they don't like hotdogs");
    const {data} = await deleteUser ({
      variables: {
        id: Auth.getProfile().data._id
      }
    })
    console.log(data);
    Auth.logout();
    alert("Why are you even on this website? YEET!")
    document.location.replace('/');
  };

  return (
    <div className="questionOneAndButtons">
      Do you even like hotdogs?
      <div className="yes-no-buttons">
        <button className="yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <button className="no-button" onClick={handleNoClick}>No</button>
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
