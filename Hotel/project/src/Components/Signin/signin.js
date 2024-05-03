import React, { useState } from 'react';
import './signin.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Email: '',
    Password: '',
    Confirmpassword: '',
  });

  const [signupStatus, setSignupStatus] = useState({
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // ... existing code ...

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSignupStatus({ success: true, error: null });
        console.log('User signed up successfully!');
        setFormData({
          Username: ' ',
          Email: '',
          Password: '',
          Confirmpassword: '',
        }); // Reset form on successful signup
      } else {
        setSignupStatus({ success: false, error: 'Failed to sign up. Please try again.' });
        console.error('Failed to sign up. Please try again.');
      }
    } catch (error) {
      setSignupStatus({ success: false, error: 'An error occurred during signup.' });
      console.error('An error occurred during signup:', error);
    }
  };

  return (
    <div className="SignUpForm-container">
      <div>
      <h2 className="signup-heading">Sign Up</h2>

        {signupStatus.success && <p className="success-message">User registered successfully!</p>}
        {signupStatus.error && <p className="error-message">{signupStatus.error}</p>}
        {<form onSubmit={handleSubmit}>
        <label className="gf">
           Username:</label>
          <input
            type="text"
            name="Username"
            className="le"
            value={formData.Username}
            onChange={handleChange}
            required
          />
        
        <br />
        <label className="gf">
          Email:</label>
          <input
            type="email"
            name="Email"
            className="le"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        
        <br />
        <label className="gf">
          Password:</label>
          <input
            type="Password"
            name="Password"
            className="le"
            value={formData.Password}
            onChange={handleChange}
            required
          />
       
        <br />
        <label className="gf">
          Confirmpassword:</label>
          <input
            type="Password"
            name="Confirmpassword"
            className="le"
            value={formData.Confirmpassword}
            onChange={handleChange}
            required
          />
        
        <br />
        <button type="submit">Sign Up</button>
      </form>}
    
  
  


      </div>
    </div>
  );
};

export default SignUpForm;
