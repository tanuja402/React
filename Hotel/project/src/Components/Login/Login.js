import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    Email: '',
    Password: '',
  });

  const [loginStatus, setLoginStatus] = useState({
    success: false,
    error: null,
  });

  const navigate = useNavigate(); // Hook to get the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        setLoginStatus({ success: true, error: null });
        console.log('User logged in successfully!');
        // Reset form on successful login
        setLoginData({
          Email: '',
          Password: '',
        });

        
        navigate('/Home');
      } else {
        setLoginStatus({ success: false, error: 'Invalid email or password. Please try again.' });
        console.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setLoginStatus({ success: false, error: 'An error occurred during login.' });
      console.error('An error occurred during login:', error);
    }
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="LoginForm-container">
      <div>
      <h2 className="login-heading">Login</h2>

        {loginStatus.success && <p className="success-message">Login successful!</p>}
        {loginStatus.error && <p className="error-message">{loginStatus.error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="gf">Email:</label>
          <input
            type="email"
            name="Email"
            className="le"
            value={loginData.Email}
            onChange={handleChange}
            required
          />

          <br />
          <label className="gf">Password:</label>
          <input
            type="password"
            name="Password"
            className="le"
            value={loginData.Password}
            onChange={handleChange}
            required
          />

          <br />
          <button type="submit">Login</button><br></br>
          <button  onClick={handleSignupClick}>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
