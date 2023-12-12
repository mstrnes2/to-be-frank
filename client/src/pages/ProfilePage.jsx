import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Results from '../components/Results';
import { GET_ME } from '../utils/queries';


function Profile() {

  const { loading, data } = useQuery(GET_ME);

  const me = data?.me || [];

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Results
          me={me}
          />
        )}
      </div>
    </div>
  );
};


export default Profile;
