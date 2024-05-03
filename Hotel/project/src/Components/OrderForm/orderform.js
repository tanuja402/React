// // // import React, { useState, useEffect } from 'react';
// // // import '../OrderForm/orderform.css';
// // // import Navbar from '../Navbar/Navbar';

// // // const OrderForm = ({ itemName, itemPrice }) => {
// // //   const [quantity, setQuantity] = useState(1);
// // //   const [totalPrice, setTotalPrice] = useState(itemPrice); // Initialize total price with item price
// // //   const [orderSuccess, setOrderSuccess] = useState(false); // State to manage popup visibility
// // //   const [email, setEmail] = useState('');
// // //   const [location, setLocation] = useState('');
// // //   const [phone, setPhone] = useState('');

// // //   useEffect(() => {
// // //     // Update total price whenever quantity or item price changes
// // //     setTotalPrice(itemPrice * quantity);
// // //   }, [itemPrice, quantity]); 

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // // console.log(itemName,itemPrice,email,quantity,phone,location)
// // //     try {
// // //       const response = await fetch('http://localhost:5000/submit-order', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify({
// // //           itemName,
// // //           itemPrice,
// // //           quantity: parseInt(quantity),
// // //           totalPrice, // Include total price in the request body
// // //           email,
// // //           location,
// // //           phone
// // //         }),
// // //       });

// // //       if (response.ok) {
// // //         setOrderSuccess(true); // Set orderSuccess to true if order is successful
// // //       } else {
// // //         const errorText = await response.text();
// // //         console.error('Failed to submit order. Server responded with:', errorText);
// // //       }
      
// // //     } catch (error) {
// // //       console.error('Error submitting order:', error);
// // //     }
// // //   };

// // //   return (
// // //     <>
    
// // //     <div className="order-form-container">
// // //       <h2>Order Form</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <p>{itemName}</p>
// // //         <p>${itemPrice} each</p>
// // //         <label>
// // //           Quantity:
// // //           <input
// // //             type="number"
// // //             value={quantity}
// // //             onChange={(e) => setQuantity(e.target.value)}
// // //             min="1"
// // //           />
// // //         </label>
// // //         <label>
// // //           Email:
// // //           <input
// // //             type="email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //           />
// // //         </label>
// // //         <label>
// // //           Location:
// // //           <input
// // //             type="text"
// // //             value={location}
// // //             onChange={(e) => setLocation(e.target.value)}
// // //             required
// // //           />
// // //         </label>
// // //         <label>
// // //           Phone:
// // //           <input
// // //             type="tel"
// // //             value={phone}
// // //             onChange={(e) => setPhone(e.target.value)}
// // //             required
// // //           />
// // //         </label>
// // //         <p>Total Price: ${totalPrice}</p> {/* Display total price */}
// // //         <button type="submit" style={{color:'white',backgroundColor:'red'}}>Submit Order</button>
// // //       </form>
// // //       {orderSuccess && (
// // //         <div className="popup">
// // //           <p style={{color:'green'}}>Order placed successfully!</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //     </>
// // //   );
// // // };

// // // export default OrderForm;

// // // // import React, { useState, useEffect } from 'react';
// // // // import '../OrderForm/orderform.css';
// // // // const OrderForm = ({ itemName, itemPrice }) => {
// // // //   const [quantity, setQuantity] = useState(1);
// // // //   const [totalPrice, setTotalPrice] = useState(itemPrice * quantity); // Initialize total price with item price
// // // //   const [orderSuccess, setOrderSuccess] = useState(false); // State to manage modal visibility

// // // //   useEffect(() => {
// // // //     // Update total price whenever quantity or item price changes
// // // //     setTotalPrice(itemPrice * quantity);
// // // //   }, [itemPrice, quantity]);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/submit-order', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           itemName,
// // // //           itemPrice,
// // // //           quantity: parseInt(quantity),
// // // //           totalPrice, // Include total price in the request body
// // // //         }),
// // // //       });

// // // //       if (response.ok) {
// // // //         setOrderSuccess(true); // Set orderSuccess to true if order is successful
// // // //         const message = `Order Details:\nItem: ${itemName}\nPrice: $${itemPrice}\nQuantity: ${quantity}\nTotal Price: $${totalPrice}`;
// // // //         alert(message); // Display order details in an alert box
// // // //       } else {
// // // //         const errorText = await response.text();
// // // //         console.error('Failed to submit order. Server responded with:', errorText);
// // // //       }
      
// // // //     } catch (error) {
// // // //       console.error('Error submitting order:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="order-form-container">
// // // //       <h2>Order Form</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <p>{itemName}</p>
// // // //         <p>${itemPrice} each</p>
// // // //         <label>
// // // //           Quantity:
// // // //           <input
// // // //             type="number"
// // // //             value={quantity}
// // // //             onChange={(e) => setQuantity(e.target.value)}
// // // //             min="1"
// // // //           />
// // // //         </label>
// // // //         <p>Total Price: ${totalPrice}</p> {/* Display total price */}
// // // //         <button type="submit">Submit Order</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderForm;
// // import React, { useState, useEffect } from 'react';
// // import '../OrderForm/orderform.css';
// // import Navbar from '../Navbar/Navbar';

// // const OrderForm = ({ itemName, itemPrice }) => {
// //   const [quantity, setQuantity] = useState(1);
// //   const [totalPrice, setTotalPrice] = useState(itemPrice);
// //   const [email, setEmail] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [orderSuccess, setOrderSuccess] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     setTotalPrice(itemPrice * quantity);
// //   }, [itemPrice, quantity]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch('http://localhost:5000/submit-order', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           itemName,
// //           itemPrice,
// //           quantity: parseInt(quantity),
// //           totalPrice,
// //           email,
// //           location,
// //           phone,
// //         }),
// //       });

// //       if (response.ok) {
// //         setOrderSuccess(true);
// //         setQuantity(1);
// //         setEmail('');
// //         setLocation('');
// //         setPhone('');
// //       } else {
// //         const errorText = await response.text();
// //         setError(errorText);
// //       }
// //     } catch (error) {
// //       console.error('Error submitting order:', error);
// //       setError('Failed to submit order. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="order-form-container">
// //         <h2>Order Form</h2>
// //         <form onSubmit={handleSubmit}>
// //           <p>{itemName}</p>
// //           <p>${itemPrice} each</p>
// //           <label>
// //             Quantity:
// //             <input
// //               type="number"
// //               value={quantity}
// //               onChange={(e) => setQuantity(e.target.value)}
// //               min="1"
// //               required
// //             />
// //           </label>
// //           <label>
// //             Email:
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </label>
// //           <label>
// //             Location:
// //             <input
// //               type="text"
// //               value={location}
// //               onChange={(e) => setLocation(e.target.value)}
// //               required
// //             />
// //           </label>
// //           <label>
// //             Phone:
// //             <input
// //               type="tel"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               required
// //             />
// //           </label>
// //           <p>Total Price: ${totalPrice}</p>
// //           <button type="submit" disabled={loading} style={{ color: 'white', backgroundColor: 'red' }}>
// //             {loading ? 'Submitting...' : 'Submit Order'}
// //           </button>
// //           {error && <p style={{ color: 'red' }}>{error}</p>}
// //         </form>
// //         {orderSuccess && (
// //           <div className="popup">
// //             <p style={{ color: 'green' }}>Order placed successfully!</p>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default OrderForm;

// import React, { useState, useEffect } from 'react';
// import '../OrderForm/orderform.css';
// import Navbar from '../Navbar/Navbar';

// const OrderForm = ({ itemName, itemPrice }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(itemPrice);
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [phone, setPhone] = useState('');
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [orderId, setOrderId] = useState(null); // State to store orderId

//   useEffect(() => {
//     setTotalPrice(itemPrice * quantity);
//   }, [itemPrice, quantity]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('http://localhost:5000/submit-order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           itemName,
//           itemPrice,
//           quantity: parseInt(quantity),
//           totalPrice,
//           email,
//           location,
//           phone,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setOrderSuccess(true);
//         setOrderId(data.orderId); // Set orderId from response data
//         setQuantity(1);
//         setEmail('');
//         setLocation('');
//         setPhone('');
//       } else {
//         const errorText = await response.text();
//         setError(errorText);
//       }
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       setError('Failed to submit order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="order-form-container">
//         <h2>Order Form</h2>
//         <form onSubmit={handleSubmit}>
//           <p>{itemName}</p>
//           <p>${itemPrice} each</p>
//           <label>
//             Quantity:
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               min="1"
//               required
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Location:
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Phone:
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </label>
//           <p>Total Price: ${totalPrice}</p>
//           <button type="submit" disabled={loading} style={{ color: 'white', backgroundColor: 'red' }}>
//             {loading ? 'Submitting...' : 'Submit Order'}
//           </button>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//         </form>
//         {orderSuccess && (
//           <div className="popup">
//             <p style={{ color: 'green' }}>Order placed successfully!</p>
//             <p>Order ID: {orderId}</p> {/* Display orderId */}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderForm;
import React, { useState, useEffect } from 'react';
import '../OrderForm/orderform.css';
import Navbar from '../Navbar/Navbar';

const OrderForm = ({ itemName, itemPrice }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(itemPrice);
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    setTotalPrice(itemPrice * quantity);
  }, [itemPrice, quantity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemName,
          itemPrice,
          quantity: parseInt(quantity),
          totalPrice,
          email,
          location,
          phone,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderSuccess(true);
        setOrderId(data.orderId);
        setQuantity(1);
        setEmail('');
        setLocation('');
        setPhone('');
      } else {
        const errorText = await response.text();
        setError(errorText);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('Failed to submit order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="order-form-container">
        <h2>Order Form</h2>
        <form onSubmit={handleSubmit}>
          <p>{itemName}</p>
          <p>${itemPrice} each</p>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <p>Total Price: ${totalPrice}</p>
          <button type="submit" disabled={loading} style={{ color: 'white', backgroundColor: 'red' }}>
            {loading ? 'Submitting...' : 'Submit Order'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        {orderSuccess && (
          <div className="popup">
            <p style={{ color: 'green' }}>Order placed successfully!</p>
            <p>Order ID: {orderId}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderForm;

