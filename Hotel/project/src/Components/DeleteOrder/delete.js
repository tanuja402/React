// import React from 'react';

// const DeleteOrder = ({ orderId, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/orders/${orderId}`, {
//         method: 'DELETE'
//       });
//       const data = await response.json();
//       console.log(data); // Log the response from the server
//       onDelete(orderId); // Trigger callback to update UI after successful deletion
//     } catch (error) {
//       console.error('Error deleting order:', error);
//       // Handle error
//     }
//   };

//   return (
//     <button onClick={handleDelete}>Delete</button>
//   );
// };

// export default DeleteOrder;
import React from 'react';

const DeleteOrder = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      onDelete(); // Invoke parent function to delete the order
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteOrder;
