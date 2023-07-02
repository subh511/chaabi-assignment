// import React from 'react';
// import Sidebar from "./sidebar/Sidebar";
// import "./Layout.css";
// import Navbar from './navbar/Navbar';
// import Card from './card/Card';
// import Chart from './chart/Chart';
// import BarChart from './barchart/Barchart';


// const Layout = () => {
//   return (
//     <div className="layout">
//     <Sidebar/>
//       <div className="content">
//       <Navbar/>
//       <Card/>
//       <Chart/>
//       <BarChart/>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import "./Layout.css";
import Navbar from './navbar/Navbar';
import Card from './card/Card';
import Chart from './chart/Chart';
import BarChart from './barchart/Barchart';
import MonthlyComponent from './monthly/Monthly';
import Training from './Training/Training';
import Quiz from './quiz/Quiz';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="card-section">
          <Card />
        </div>
        <div className="chart-section">
          <Chart />
          <BarChart />
        </div>
        <div className="end-section">
        <MonthlyComponent/>
        <Quiz/>
        <Training/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
