// import React from 'react';
// import './Home.css';
// import Navbar from '../Navbar'; // Import the CSS file

// function Home() {
//   return (
//     <>
//     <Navbar/>
    
//     <div className="background-container">
//       <div className="content">
//         <h2>Welcome to IndianBreakfasts</h2>
//         <p>QUALITY AND PURITY</p>
      
//       </div>
//     </div>
//     </>
//   );
// }

// export default Home;
// Home.js
import React from 'react';
import './Home.css';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div className="content">
          <h2>Welcome to IndianBreakfasts</h2>
          <p>QUALITY AND PURITY</p>
        </div>
      </div>
    </>
  );
}

export default Home;

