// import React from 'react';
// import './Card.css';
// import progress from "./assets/Frame 39.png";
// import card from "./assets/Group.png";

// const Card = () => {
//   return (
//     // <div>
//     // <div className="card">
//     //   <p className="title">In Training Workers</p>
//     //   <h1 className='number'>3,354</h1>
//     //   <img className="bottom-image" src={progress} alt="Bottom" />
//     //   <p className='side-num'>234</p>
//     //   <div>
//     //   <img className="right-image" src={card} alt="Right" />
//     //   <p class="para">M T W T F S S</p>
//     //   </div>
//     //   </div>
//     // </div>

//     <div className="card-container">
//     <div className="card">
//       <p className="title">In Training Workers</p>
//       <h1 className="number">3,354</h1>
//       <img className="bottom-image" src={progress} alt="Bottom" />
//       <p className="side-num">234</p>
//       <div>
//         <img className="right-image" src={card} alt="Right" />
//         <p className="para">M T W T F S S</p>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Card;


import React from 'react';
import './Card.css';
import progress from "./assets/Frame 39.png";
import card from "./assets/Group.png";
import progress1 from "./assets/red.png";
import redhill from "./assets/redhill.png";
import progress2 from "./assets/Frame 39.png";
import card1 from "./assets/Group.png";
import progress3 from "./assets/Frame 39.png";
import card2 from "./assets/Group.png";
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="title">In Training Workers</h2>
        <h2>3,354</h2>
        <img src={progress} alt="none" className='progress'/>
        <p className='para'>243</p>
        <img src={card} alt="none" className='right-image'/>
        <p className='paragraph'>M T W T F S S</p>
      </div>
      <div className="card">
        <h2 className="title">Video Watch-Time (Hrs)</h2>
        <h2>2,433</h2>
        <img src={progress1} alt="none" className='progress'/>
        <p className='para'>435</p>
        <img src={redhill} alt="none" className='right-image'/>
        <p className='paragraph'>M T W T F S S</p>
      </div>
      <div className="card">
        <h2 className="title">% Workers Passing Quiz</h2>
        <h2>95%</h2>
        <img src={progress2} alt="none" className='progress'/>
        <p className='para'>24%</p>
        <img src={card1} alt="none" className='right-image'/>
        <p className='paragraph'>M T W T F S S</p>
      </div>
      <div className="card">
        <h2 className="title">Avg Days Taken</h2>
        <h2>6</h2>
        <img src={progress3} alt="none" className='progress'/>
        <p className='para'>3</p>
        <img src={card2} alt="none" className='right-image'/>
        <p className='paragraph'>M T W T F S S</p>
      </div>
    </div>
  );
};

export default Card;
