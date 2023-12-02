// import { useQuery } from '@apollo/client';
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="background container">
        <Link to="/LoginPage" className="login">
          Sign Up/Login
        </Link>
      
        <p className="overlay-text">To Be Frank</p>
      </div>
    </main>
  );
}

export default Home;
