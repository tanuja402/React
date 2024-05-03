import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here

    // Navigate to the MainPage component after logout
    navigate('/Login');
  };

  return (
    <>
      <div className='nav'>
        <div className='nav1'>
          <h3>HOTEL</h3>
        </div>
        <div className='nav2'>
          <ul>
            <Link id="o" to='/Home'><li>Home</li>
            </Link><Link id="o" to='/Breakfasts'><li> Breakfasts</li></Link>
            <Link id="o" to='/Orders'><li> Orders</li></Link>
                
                   
                             <Link id="o" to='/Aboutus'><li> Aboutus</li></Link>
                        <Link id="o" to= '/Contactus'><li>Contact us</li></Link>
                        
            <li>
              {/* Use a button for the Logout functionality */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
        <div className='nav3'>
          <i className="fa-solid fa-prescription-bottle-medical"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
