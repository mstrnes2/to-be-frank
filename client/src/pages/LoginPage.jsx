// LoginPage.jsx
import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginPage = () => {

	return (
		<main >
			<div className='formContainer login-background'>
				<div className='signup-login-container'>
					<div className='signupForm-container'>
						<Signup />
					</div>
					
					<div className='loginForm-container'>
						<Login />
					</div>
				</div>
			</div>
		</main>
	);
};

export default LoginPage;
