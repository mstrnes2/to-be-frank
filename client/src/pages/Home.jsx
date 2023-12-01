// import { useQuery } from '@apollo/client';
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="background container">
        <Link to="./Signup" className="login">
          Sign Up
        </Link>
        <Link to="./Login" className="login">
          Login
        </Link>
        <p className="overlay-text">To Be Frank</p>
      </div>
    </main>
  );
}

export default Home;

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <ThoughtForm />
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ThoughtList
//               thoughts={thoughts}
//               title="Some Feed for Thought(s)..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;
