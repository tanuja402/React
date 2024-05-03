import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainPage from './Components/Mainpage/mainpage';
import LoginForm from './Components/Login/Login'; // Import your LoginForm component
import SignUpForm from './Components/Signin/signin'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Navbar/Home/Home';// Import your SignUpForm component
import Breakfasts from './Components/Contactus/Breakfasts/Breakfasts';
import Aboutus from './Components/Aboutus/Aboutus';
import Contactus from './Components/Contactus/Contactus';
import Orders from './Components/Orders/orders';

const App = () => {
  return (
    
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Breakfasts" element={<Breakfasts />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path="/Contactus" element={<Contactus />} />
   <Route path="/Login" element={<LoginForm />} />
  <Route path="/signup" element={<SignUpForm />} />
  <Route path='/' element={<MainPage />} />
  
</Routes>
  
  );
};

export default App;


