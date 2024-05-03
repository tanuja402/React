import React from 'react';
import OrderForm from './OrderForm'; // Assuming OrderForm is in a separate file

const ParentComponent = () => {
  return (
    <div>
      {/* Rendering the OrderForm component with the itemName and itemPrice props */}
      <OrderForm itemName="Idly" itemPrice={5.99} />
    </div>
  );
};

export default ParentComponent;
