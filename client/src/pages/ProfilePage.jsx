import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Results from '../components/Results';


function Profile() {

  return (
    <div>
      <div>
        <Results />
      </div>
    </div>
  );
};


export default Profile;
