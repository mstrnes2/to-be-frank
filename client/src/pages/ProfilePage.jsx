import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  // return (
  //   <div>
  //     <h1>
  //       {user.username}
  //     </h1>
  //     <div>
  //       <h2>
  //         {user.profile.date}
  //       </h2>
  //       <figure id="">
  //         <a href={user.profile.quizResults.link}>
  //           <img
  //             src={user.profile.quizResults.img}
  //             alt={user.profile.quizResults.alt}
  //           /></a>
  //       </figure>
  //     </div>
  //   </div>
  // );
};

export default Profile;
