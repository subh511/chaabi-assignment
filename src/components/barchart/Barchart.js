import React from 'react';
import barchat from "./assets/barChart.png";
import "./Barchart.css";

const BarChart = () => {
  return (
    <div>
      <img
        src={barchat}
        alt="Bar Chart"
        className='barchart'
      />
    </div>
  );
};

export default BarChart;
