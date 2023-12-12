import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Results from '../components/Results';
import Auth from '../utils/auth';

 const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign('/LoginPage')}

function Profile() {
	return (
		<div>
			<div className='profile-container'>
				<div>
					<button
						className='logout-button profile-logout'
						onClick={logout}>
						Logout
					</button>
				</div>
				<h1 className='username'>username</h1>
				<div>
					<Results />
				</div>
			</div>
		</div>
	);
}

export default Profile;
