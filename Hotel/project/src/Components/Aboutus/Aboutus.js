

import React from 'react';
import './Aboutus.css';
import Navbar from '../Navbar/Navbar';

const Aboutus = () => {
  return (
    <>
    <Navbar/>
    
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are passionate about bringing you the best of Indian breakfasts.
        Explore the diverse and delicious world of breakfast dishes that India has to offer.
        Every morning the first thing on our minds is 'What's for breakfast?' But the most important meal of the day as we know it today was not always part of our (India's) daily routine or culture, and neither was the transition into it.
      </p>
      <div className="image-container">
        <img src="https://www.shutterstock.com/image-photo/group-south-indian-food-like-260nw-1153818382.jpg" alt="Indian Breakfast 1" className="breakfast-image1" />
      </div>
      <p>
        From mouth-watering dosas to hearty pohas, our goal is to showcase the richness and variety
        of Indian breakfasts that cater to every taste bud.
      </p>
      <div className="image-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPSvt_NrUF5WR4JW5Icq0WM27MMeTO71Xt2g&usqp=CAU" alt="Indian Breakfast 2" className="breakfast-image1" />
      </div>
      <p>
        Join us on this culinary journey, and let the flavors of Indian breakfasts awaken your senses.
        Feel free to explore our recipes and articles to learn more about the art of Indian breakfast cuisine.
      </p>
    </div>
    </>
    
  );
};

export default Aboutus;
