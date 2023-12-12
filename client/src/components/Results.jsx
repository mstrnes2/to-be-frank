import React, { useEffect, useState } from 'react';
import formatDate from '../utils/dateFormat';



export default function Results({ me }) {

    const dateFromDatabase = new Date(me.profile.quizResults.date);
    const formattedDate = formatDate(dateFromDatabase);

    return(
        <div>
            <h2>{formattedDate}</h2>
            <figure>
            <a href={me.profile.quizResults.link}>
            <img src={me.profile.quizResults.restaurantImage} alt={me.profile.quizResults.restaurant} className="resultImage"/>
            </a>
            </figure>
        </div>
    )
}