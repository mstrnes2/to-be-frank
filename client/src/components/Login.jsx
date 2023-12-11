import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
    }



    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main >
      <div  >
        <div className="card">
          <div className="card-body">
            {data ? (
              <p>
                {window.location.assign('/questionOne')}
              </p>
            ) : (
              <form className='form' onSubmit={handleFormSubmit}>
                <div className='login-h4'>
                  <h4>Login</h4>
                </div>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="login-button"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Login
                </button>
              </form>
            )}

            {error && (
              <div className='login-errormessage'>
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
