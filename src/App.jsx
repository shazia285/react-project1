// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { findRenderedComponentWithType } from "react-dom/test-utils";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import './App.css'
// function App () {
//   return (
//     <div>
//        <img src= 'public/quran paak.jpg' height={150} width= {200}/>
//       <h1>The Holy Quran  </h1>
//       <p> My favourite book is Quran paaak.The Holy Quran is the sacred book of Muslims.It is a complet code of Life.
//         It was revealed upon our last Prophet Hazrat Muhammad (s.a.w).
//         It took 23 years to complete.it is in the Arabic language and there are 30 paras in the Holy Quran. There are 114 Surahs in the Holy Quran.
//         There are 6236 Verses in the Holy Quran. There are 558 Rukus in the Holy Quran.
//         We should recite the Holy Quran and also act upon its teachings.</p>
//     </div>
//   )
// }

// export default App;


// import './App.css'
// function App () {
//   return (
//     <div></div>
// <p></p> 
//  )
// }

// export defult App;

// 11/o7/2024

// import React, { useState } from 'react'
// import Heading from './componante/Heading'
// // import Heading from './componante/Heading'

// function App() {
//   const [name,setName] = useState("mujahid hasan");
//   const change= (value)=>{
//     setName(value)
//   }
//   return (
    
//     <>
//   <Heading name={name}  change={change} />
  
      
//     </>
//   );
// }

// export default App;






// import react, {useState, useSte} from "react";
// import "./componentes/cart.css";
// import navbar from "./components/navbar";

// function App() {
//   var [cartVal, cartCont] = useState(0);
//   const resetCart = () => {
//     cartCont(0);
//   };

//   const [shoDiv1, setShowDiv1] = useState(true);

//   const toggleDiv = () => {
//     setShowDiv1(!ShowDiv1);
//   };
//   const [backgroundColor , SetBackgroundColor]= useState("white");
//   const [clickedm , setClicked] = useState(false);

//   const changeBaeckgroundColor = ()=> {
//     if (!cilicked) {
//       setBackgroundColor("darkslateblue");
//       setClicked(true);
//     } else {
//       setBackgroundColor("white");
//       setClicked(false);
//     }
//   };

//   return (
//     <>
//     <Navbar />
//     {showDiv1 ? (
//       <div className="cartMenu">
//       <img src="/images/laptop.jpeg" alt="laptop" className="laptop />
//       <p>
//       HP ZHAN 66 PRO G4 | AMD RYZEN 7 5800U (1.90 GHz) 08GB RAM | 512GB
//       SSD | 14.0'' FHD | SILVER | DOS | (Open Box) <br /> price.Rs 160,000
//       </p>
//       <hr />
//       <h2>{cartVal}</h2>
//       <button onClick={(} => cartCont(cartVal + 1)}>Add to cart</button> 
//       <button onClick={(} => cartCount(cartVal -1)}>Remove to cart</button>
//       button onClick={resetCart}<Empty cart</button>
//       </div.
//     ) : (
//      <div
//      style={{ backgroundColor : backgroundColor, padding: 20 }}
//      className="buyThings"
//      >
//       <img src="./images/laptop2.jpeg" alt="laptop2" className="laptop2" />
//       <p>
//         HP OMEN 15-EK0026NW | 10TH GEN | CORE 15-10300H (2.5GHz) | 8GB RAM |
//         512GB SSD | 6GB Nvidia GTX 1660Ti | 15.6" FHD 144Hz | Black | DOS |
//         <br />
//         Price.Rs 220,ooo
//         </p>
//         <hr />
//         <button onClick={changeBackgrounColor} className="clrbtn">
//         Change Color
//         </button>
//         </div>
//       )}
//       <button onClick={toggleDiv} className="buyBtn">
//         Buy Things
//           </button>
//           </>
//           );
//         }

// // export default App;

// import'./index.css'

// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0); // initialize count to 0
//   const [showSecondCard, setShowSecondCard] = useState(false); // initialize showSecondCard to false

//   const handleAddToCart = () => {
//     setCount(count + 1);
//   };

//   const handleRemoveFromCart = () => {
//     setCount(count - 1);
//   };

//   const handleEmptyCart = () => {
//     setCount(0);
//   };

//   const handleToggleSecondCard = () => {
//     setShowSecondCard(!showSecondCard);
//   };

//   const handleBuyNow = () => {
//     // change background color of card here
//   };

//   return (
//     <div>
//       {showSecondCard ? (
//         <SecondCard handleBuyNow={handleBuyNow} />
//       ) : (
//         <FirstCard
//           count={count}
//           handleAddToCart={handleAddToCart}
//           handleRemoveFromCart={handleRemoveFromCart}
//           handleEmptyCart={handleEmptyCart}
//           handleToggleSecondCard={handleToggleSecondCard}
//         />
//       )}
//     </div>
//   );
// }

// const FirstCard = ({ count, handleAddToCart, handleRemoveFromCart, handleEmptyCart, handleToggleSecondCard }) => {
//   return (
//     <div>

//       <p>Count: {count} <br>
//       </br>
        
//         </p>
//       <button onClick={handleAddToCart}>Add to cart</button><br></br><br></br>
//       <button onClick={handleRemoveFromCart}>Remove from cart</button><br></br><br></br>
//       <button onClick={handleEmptyCart}>Empty cart</button><br></br><br></br>
//       <button onClick={handleToggleSecondCard}>Toggle second card</button><br>

//       </br><br></br><img src="public/download.jpg" height={200} width={200}/>
      

// </div>
 
//   );
// };

// const SecondCard = ({ handleBuyNow }) => {
//   return (
//     <div>
//       <p>Buy now!</p>
//       <button onClick={handleBuyNow}>Buy now</button>
//     </div>
//   );
// };

// export default App;






// import React, { useState } from 'react';
// import './App.css';
// import './index.css';
// function App() {
//   const [count, setCount] = useState(0);
//   const [showSecondCard, setShowSecondCard] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState("white");

//   const handleAddToCart = () => {
//     setCount(count + 1);
//   };

//   const handleRemoveFromCart = () => {
//     setCount(count - 1);
//   };

//   const handleEmptyCart = () => {
//     setCount(0);
//   };

//   const handleToggleSecondCard = () => {
//     setShowSecondCard(!showSecondCard);
//   };

//   const handleBuyNow = () => {
//     setBackgroundColor("green");
//   };

//   return (
//     <div>
//       {showSecondCard ? (
//         <SecondCard handleBuyNow={handleBuyNow} backgroundColor={backgroundColor} />
//       ) : (
//         <FirstCard
//           count={count}
//           handleAddToCart={handleAddToCart}
//           handleRemoveFromCart={handleRemoveFromCart}
//           handleEmptyCart={handleEmptyCart}
//           handleToggleSecondCard={handleToggleSecondCard}
//         />
//       )}
//     </div>
//   );
// }

// const FirstCard = ({
//   count,
//   handleAddToCart,
//   handleRemoveFromCart,
//   handleEmptyCart,
//   handleToggleSecondCard,
// }) => {
//   return (

    
//     <div className="card">

//  <img src="public/sim card.jpg" height={200} width={300} />
     
//       <p>Count: {count}</p>
      
     
//       <button onClick={handleAddToCart}>Add to cart</button><br>
//       </br><br>
//       </br>
//       <button onClick={handleRemoveFromCart}>Remove from cart</button><br>
//       </br><br>
//       </br>
//       <button onClick={handleEmptyCart}>Empty cart</button><br>
//       </br><br>
//       </br>
//       <button onClick={handleToggleSecondCard}>Toggle second card</button>
      
      

//     </div>
//   );
// };

// const SecondCard = ({ handleBuyNow, backgroundColor }) => {
//   return (
//     <div className="card" style={{ backgroundColor: backgroundColor }}>
//       <p>Buy now!</p>
//       <button onClick={handleBuyNow}>Buy now</button>
//     </div>
//   );
// };

// export default App;


// // import React, { useState } from 'react';
// // import './App.css';
// // import './index.css';

// // function App() {
// //   const [count, setCount] = useState(0);
// //   const [showSecondCard, setShowSecondCard] = useState(false);
// //   const [backgroundColor, setBackgroundColor] = useState("white");

// //   const handleAddToCart = () => {
// //     setCount(count + 1);
// //   };

// //   const handleRemoveFromCart = () => {
// //     setCount(count - 1);
// //   };

// //   const handleEmptyCart = () => {
// //     setCount(0);
// //   };

// //   const handleToggleSecondCard = () => {
// //     setShowSecondCard(!showSecondCard);
// //   };

// //   const handleBuyNow = () => {
// //     setBackgroundColor("green");
// //   };

// //   return (
// //     <div>
// //       {showSecondCard ? (
// //         <SecondCard handleBuyNow={handleBuyNow} backgroundColor={backgroundColor} />
// //       ) : (
// //         <FirstCard
// //           count={count}
// //           handleAddToCart={handleAddToCart}
// //           handleRemoveFromCart={handleRemoveFromCart}
// //           handleEmptyCart={handleEmptyCart}
// //           handleToggleSecondCard={handleToggleSecondCard}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // const FirstCard = ({
// //   count,
// //   handleAddToCart,
// //   handleRemoveFromCart,
// //   handleEmptyCart,
// //   handleToggleSecondCard,
// // }) => {
// //   return (
// //     <div className="card">
// //       <p>Count: {count}</p>
// //       <button onClick={handleAddToCart}>Add to cart</button>
// //       <button onClick={handleRemoveFromCart}>Remove from cart</button>
// //       <button onClick={handleEmptyCart}>Empty cart</button>
// //       <button onClick={handleToggleSecondCard}>Toggle second card</button>
// //     </div>
// //   );
// // };

// // const SecondCard = ({ handleBuyNow, backgroundColor }) => {
// //   return (
// //     <div className="card" style={{ backgroundColor: backgroundColor }}>
// //       <p>Buy now!</p>
// //       <button onClick={handleBuyNow}>Buy now</button>
// //     </div>
// //   );
// // };

// // export default App;
  