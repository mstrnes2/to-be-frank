// LoginPage.jsx
import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginPage = () => {
	return (
		<div className='formContainer'>
            <div className='loginForm'>
			<Signup />
            </div>
            
            <div>
			<Login />
            </div>
		</div>
	);
};

export default LoginPage;
