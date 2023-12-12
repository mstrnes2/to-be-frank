import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign('/LoginPage');
  };

  return (
    <header >
      <div >
         <div className='username-logout-buttons'>
          {Auth.loggedIn() ? (
            <>
              <Link className="username-button" to="/Profile">
                {Auth.getProfile().data.username}
              </Link>
              <button className="logout-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
