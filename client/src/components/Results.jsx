import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function Results({ me }) {
	console.log('me:', me);
	const { quizResults } = me.profile;
	console.log(quizResults.date);
	return (
		<div className='clickhere-resultscontainer'>
			<div className='results-container'>
				<div className='result-date-and-restaurant-name'>
					<div className='results-date'>
						{dayjs
							.unix(quizResults.date / 1000)
							.format('MM/DD/YYYY h:mm A')}
					</div>
					<div className='restaurant-name'>{quizResults.restaurant}</div>
				</div>
				<figure>
					<a
						href={quizResults.link}
						title={quizResults.link}>
						<img
							src={quizResults.restaurantImage}
							alt={quizResults.restaurant}
							className='restaurant-image'
						/>
					</a>
					<figcaption className='clickhere'>
						Click here to order!
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
