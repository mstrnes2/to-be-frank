import React from 'react';
import QuestionOne from '../components/QuestionOne';
import Header from '../components/Header';

function QuestionOnePage() {
	return (
		<div className='questionOneAndHeader'>
			<div className='questionOne-header'>
			<Header />
			</div>
            <br />
			<div className='questionOne'>
			<QuestionOne />
			</div>
		</div>
	);
}

export default QuestionOnePage;
