import React from 'react';
import './mainpage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="MainPage-container">
      <h1>Welcome to our website</h1>

      <div className="buttons-container">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
