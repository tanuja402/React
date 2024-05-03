import React from 'react';
import './Contactus.css';
import Navbar from '../Navbar/Navbar';

function Contactus() {
  return (
    <>
      <Navbar />
      <body>
        <div className="contact-details">
        <img src={process.env.PUBLIC_URL + '/Images/WhatsApp Image 2024-02-28 at 2.15.27 PM.jpeg'} alt="Contact Us" />

          <p>
            Contact Us<br /><br />
            Name: Pentyala Mohanrao<br />
            Email: pentyalatanuja@gmail.com <br />
            Phone: 9346679077<br />
            Address: KAKANI
          </p>
        </div>
      </body>
    </>
  );
}

export default Contactus;
