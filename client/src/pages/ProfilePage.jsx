import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import Results from '../components/Results';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Footer from '../components/Footer';

const logout = (event) => {

  event.preventDefault();
  Auth.logout();
  window.location.assign('/LoginPage');
};

function Profile() {

  const { loading, data } = useQuery(GET_ME);
  const me = data?.me || [];

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
       <div className='quizHeaderAndQuestions'>
			  <div className='quizHeader'>
				  <Header />
			  </div>
			  <div className='resultsComponent'>
            <div>
              <Results me={me} />
            </div>
          </div>
          <div className='footer'>
            <Footer />
            </div>
        </div>
      )}
    </div>
  );

};

export default Profile;
