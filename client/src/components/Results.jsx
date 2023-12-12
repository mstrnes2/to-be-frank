import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';



export default function Results({ me }) {
    console.log('me:', me)
    const {quizResults} = me.profile
    console.log(quizResults.date)
    return(
        <div>
            <h2>{dayjs.unix(quizResults.date / 1000).format('MM/DD/YYYY h:mm A')}</h2>
            <h3>{quizResults.restaurant}</h3>
            <figure>
            <a href={quizResults.link}>
            <img src={quizResults.restaurantImage} alt={quizResults.restaurant} className="resultImage"/>
            </a>
            </figure>
        </div>
    )
}