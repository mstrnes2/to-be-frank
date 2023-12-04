// LoginPage.jsx
import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginPage = () => {
	return (
		<main >
			<div className='formContainer login-background'>
				<div className='loginForm'>
					<Signup />
				</div>

				<div className='loginForm'>
					<Login />
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
