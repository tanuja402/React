// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import '../Orders/orders.css';


// function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders data from backend
//     fetch('http://localhost:5000/order')
//       .then(response => response.json())
//       .then(data => {
//         setOrders(data); // Set the fetched orders data to state
//       })
//       .catch(error => console.error('Error fetching orders:', error));
//   }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

//   // Function to handle deletion of an order
//   const handleDeleteOrder = (index) => {
//     // Implement deletion logic here
//   };

//   // Function to handle updating of an order
//   const handleUpdateOrder = (index) => {
//     // Implement update logic here
//   };

//   return (
//     <>
//       <Navbar />
//       <div>
//         <h2>Orders</h2>
//         <table>
//           <thead>
//             <tr>
//             <th>Item Id</th>

//               <th>Item Name</th>
//               <th>Item Price</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//               <th>Email</th>
//               <th>Location</th>
//               <th>Phone</th>
//               <th>Actions</th> {/* Column for delete and update buttons */}
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={index}>
//                                 <td>{order.orderId}</td>

//                 <td>{order.itemName}</td>
//                 <td>${order.itemPrice}</td>
//                 <td>{order.quantity}</td>
//                 <td>${order.totalPrice}</td>
//                 <td>{order.email}</td>
//                 <td>{order.location}</td>
//                 <td>{order.phone}</td>
//                 <td>
//                   <button onClick={() => handleUpdateOrder(index)}>Update</button>
//                   <button onClick={() => handleDeleteOrder(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Orders;
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import '../Orders/orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    fetch('http://localhost:5000/order')
      .then(response => response.json())
      .then(data => {
        setOrders(data);
      })
      .catch(error => console.error('Error fetching orders:', error));
  };

  const handleDeleteOrder = (orderId) => {
    fetch(`http://localhost:5000/orders/${orderId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          fetchOrders(); // Fetch orders again to update the list after deletion
        } else {
          throw new Error('Failed to delete order');
        }
      })
      .catch(error => console.error('Error deleting order:', error));
  };

  const handleUpdateOrder = (orderId) => {
    // Implement update logic here, e.g., navigate to update order page
    console.log('Update order with ID:', orderId);
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
            <th>Order Id</th>

              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.itemName}</td>
                <td>${order.itemPrice}</td>
                <td>{order.quantity}</td>
                <td>${order.totalPrice}</td>
                <td>{order.email}</td>
                <td>{order.location}</td>
                <td>{order.phone}</td>
                <td>
                  <button onClick={() => handleUpdateOrder(order.orderId)}>Update</button>
                  <button onClick={() => handleDeleteOrder(order.orderId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
