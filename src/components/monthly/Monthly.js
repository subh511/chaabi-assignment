import React from 'react';
import arrow from "./assets/Arrow - Up.png";
import eclipse from "./assets/Ellipse 138.png"
import eclipse1 from "./assets/Ellipse 138.png"
import eclipse2 from "./assets/Ellipse 138.png"
//import eclipse3 from "./assets/Ellipse 138.png"
import "./Monthly.css";

const MonthlyComponent = () => {
  return (
    <div className='carder'>
      <h2>Monthly Training Activity</h2>
      <img src={arrow} alt="Logo"  className='arrow'/>
      <p className='month'>
        16% more enrollees this month
      </p>
      <h3>
        <img src={eclipse} alt="Logo 1" className='logo' />
        course a
      </h3>
      <span>23 workers took this course this week</span>
      <h3>
        <img src={eclipse1} alt="Logo 2" className='logo' />
        course b
      </h3>
      <span>253 workers took this course this week</span>
      <h3>
        <img src={eclipse2} alt="Logo 3" className='logo' />
        course c
      </h3>
      <span>253 workers took this course this week</span>
    </div>
  );
};

export default MonthlyComponent;

// <h3>
// <img src={eclipse3} alt="Logo 4" className='logo' />
// course
// </h3>
// <span>253 workers took this course this week</span>

