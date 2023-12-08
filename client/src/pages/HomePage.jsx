import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QUERY_ME } from "../utils/queries";

function Home() {
  // TODO: If the user is logged in...
  // ...navigate away.
  const { loading, data } = useQuery(QUERY_ME);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/QuizPage");
    }
  }, [data]);
  //Above, dependencies array: critical part of reactive programming (paradigm).

  return (
    <main>
      <div className="background container">
      <img src="/TBF-Dawg-1.png" alt="logo" className="logo" />
        <Link to="/LoginPage" className="login">
          Sign Up/Login
        </Link>
        
        {/* <p className="overlay-text">To Be Frank</p> */}
      </div>
    </main>
  );
}

export default Home;
