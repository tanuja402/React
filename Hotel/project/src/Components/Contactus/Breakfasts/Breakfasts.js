// // import React, { useState } from 'react';
// // import OrderForm from '../../OrderForm/orderform';
// // import './Breakfasts.css';
// // import Navbar from '../../Navbar/Navbar';

// // const Breakfasts = () => {
// //   const [showOrderForm, setShowOrderForm] = useState(false);
// //   const [selectedItem, setSelectedItem] = useState(null);

// //   const handleOrderButtonClick = (itemName) => {
// //     setShowOrderForm(!showOrderForm);
// //     setSelectedItem(itemName);
// //     // setSelectedItem(itemPrice);

// //   }; 

  
// //     const images = [
// //       { src: "https://thumbs.dreamstime.com/b/south-indian-breakfast-29610874.jpg", name: "idly" ,price: "25$"},
// //       { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcDQzWe9QIT243NTVG9mDD6IMZf6TiLvPhg&usqp=CAU", name: "Dosa",price: "25$" },
// //       { src: "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp", name: " Vada",price: "25$" },
// //       { src: "https://t3.ftcdn.net/jpg/01/65/57/44/360_F_165574495_ZTrdDSh2YQASVbfJrLCNE8wbJEUdKG2j.jpg", name: " poori",price: "30$" },
// //       { src: "https://i.ytimg.com/vi/PLPTaHSNUt4/maxresdefault.jpg", name: "Cashew upma" ,price: "30$"},
// //       { src: "https://vismaifood.com/storage/app/uploads/public/db8/6b1/f51/thumb__700_0_0_0_auto.jpg", name: " Tigerrice" ,price: "20$"},
// //       { src: "https://img.freepik.com/premium-photo/chapathi-with-vegetable-curry_931559-307.jpg", name: " Chapathi",price: "30$" },
// //       { src: "https://redchillycurry.com/wp-content/uploads/2016/12/mysorebonda.jpg", name: " Bonda",price: "25$" },
// //       { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiO_7slEMY6CBSqR_x9qNf6TJuC41O6eE9S87Cx-503njTixhLHiAg0ylZfPwGeovMQs&usqp=CAU", name: " bread" ,price: "30$"},
// //       // Add more images with names as needed
// //     ];
// //     // Add more images with names as needed


// //   return (
// //     <>
// //     <Navbar/>
// //     <div className="breakfast-container">
// //       {images.map((item, index) => (
// //         <div key={index} className="image-row">
// //           <img className="breakfast-image" src={item.src} alt={item.name} />
// //           <p className="item-name">{item.name}</p>
// //           <p className="item-price">{item.price}</p>
// //           <button className="order-button" onClick={() => handleOrderButtonClick(item.name)}>
// //             Order
// //           </button>
// //           {showOrderForm && selectedItem === item.name && <OrderForm itemName={selectedItem} />}
        
// //         </div>
// //       ))}
// //     </div> 
// //     </>
// //   );
// // };

// // export default Breakfasts;
// import React, { useState } from 'react';
// import OrderForm from '../../OrderForm/orderform';
// import './Breakfasts.css';
// import Navbar from '../../Navbar/Navbar';

// const Breakfasts = () => {
//   const [showOrderForm, setShowOrderForm] = useState(false);
//   const [selectedItem, setSelectedItem] = useState({ name: null, price: null });

//   const handleOrderButtonClick = (itemName, itemPrice) => {
//     setShowOrderForm(!showOrderForm);
//     setSelectedItem({ name: itemName, price: parseFloat(itemPrice.replace('$', '')) });
//   }; 

//   const images = [
//     { src: "https://thumbs.dreamstime.com/b/south-indian-breakfast-29610874.jpg", name: "idly" ,price: "25$"},
//     { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcDQzWe9QIT243NTVG9mDD6IMZf6TiLvPhg&usqp=CAU", name: "Dosa",price: "25$" },
//     { src: "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp", name: " Vada",price: "25$" },
//     { src: "https://t3.ftcdn.net/jpg/01/65/57/44/360_F_165574495_ZTrdDSh2YQASVbfJrLCNE8wbJEUdKG2j.jpg", name: " poori",price: "30$" },
//     { src: "https://i.ytimg.com/vi/PLPTaHSNUt4/maxresdefault.jpg", name: "Cashew upma" ,price: "30$"},
//     { src: "https://vismaifood.com/storage/app/uploads/public/db8/6b1/f51/thumb__700_0_0_0_auto.jpg", name: " Tigerrice" ,price: "20$"},
//     { src: "https://img.freepik.com/premium-photo/chapathi-with-vegetable-curry_931559-307.jpg", name: " Chapathi",price: "30$" },
//     { src: "https://redchillycurry.com/wp-content/uploads/2016/12/mysorebonda.jpg", name: " Bonda",price: "25$" },
//     { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiO_7slEMY6CBSqR_x9qNf6TJuC41O6eE9S87Cx-503njTixhLHiAg0ylZfPwGeovMQs&usqp=CAU", name: " bread" ,price: "30$"},
//     // Add more images with names as needed
//   ];

//   return (
//     <>
//       <Navbar/>
//       <div className="breakfast-container">
//         {images.map((item, index) => (
//           <div key={index} className="image-row">
//             <img className="breakfast-image" src={item.src} alt={item.name} />
//             <p className="item-name">{item.name}</p>
//             <p className="item-price">{item.price}</p>
//             <button className="order-button" onClick={() => handleOrderButtonClick(item.name, item.price)}>
//               Order
//             </button>
//             {showOrderForm && selectedItem.name === item.name && (
//               <OrderForm itemName={selectedItem.name} itemPrice={selectedItem.price} />
//             )}
//           </div>
//         ))}
//       </div> 
//     </>
//   );
// };

// export default Breakfasts;
import React, { useState } from 'react';
import OrderForm from '../../OrderForm/orderform';
import './Breakfasts.css'; // Make sure you have a corresponding CSS file for styling
import Navbar from '../../Navbar/Navbar';

const Breakfasts = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: null, price: null });

  const handleOrderButtonClick = (itemName, itemPrice) => {
    setShowOrderForm(!showOrderForm);
    setSelectedItem({ name: itemName, price: parseFloat(itemPrice.replace('$', '')) });
  }; 

  const images = [
    { src: "https://thumbs.dreamstime.com/b/south-indian-breakfast-29610874.jpg", name: "idly" ,price: "25$"},
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcDQzWe9QIT243NTVG9mDD6IMZf6TiLvPhg&usqp=CAU", name: "Dosa",price: "25$" },
    { src: "https://bonmasala.com/wp-content/uploads/2022/12/medu-vada-recipe.webp", name: " Vada",price: "25$" },
    { src: "https://t3.ftcdn.net/jpg/01/65/57/44/360_F_165574495_ZTrdDSh2YQASVbfJrLCNE8wbJEUdKG2j.jpg", name: " poori",price: "30$" },
    { src: "https://i.ytimg.com/vi/PLPTaHSNUt4/maxresdefault.jpg", name: "Cashew upma" ,price: "30$"},
    { src: "https://vismaifood.com/storage/app/uploads/public/db8/6b1/f51/thumb__700_0_0_0_auto.jpg", name: " Tigerrice" ,price: "20$"},
    { src: "https://img.freepik.com/premium-photo/chapathi-with-vegetable-curry_931559-307.jpg", name: " Chapathi",price: "30$" },
    { src: "https://redchillycurry.com/wp-content/uploads/2016/12/mysorebonda.jpg", name: " Bonda",price: "25$" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiO_7slEMY6CBSqR_x9qNf6TJuC41O6eE9S87Cx-503njTixhLHiAg0ylZfPwGeovMQs&usqp=CAU", name: " bread" ,price: "30$"},
    // Add more images with names as needed
  ];

  return (
    <>
      <Navbar/>
      <div className="breakfast-container">
        {images.map((item, index) => (
          <div key={index} className="image-row">
            <img className="breakfast-image" src={item.src} alt={item.name} />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
            </div>
            <button className="order-button" onClick={() => handleOrderButtonClick(item.name, item.price)}>
              Order
            </button>
            {showOrderForm && selectedItem.name === item.name && (
              <OrderForm itemName={selectedItem.name} itemPrice={selectedItem.price} />
            )}
          </div>
        ))}
      </div> 
    </>
  );
};

export default Breakfasts;
