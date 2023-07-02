import React from 'react';
import './Chart.css';
import chart from "./assets/chart.png";

const Chart = () => {
  return (
    <div className="carding">
      <h2 className="headline">Chapter Wise Status</h2>
      <div className="image-container">
        <img src={chart} alt="chart" />
      </div>
      <ul className="points">
        <li>Finished Training</li>
        <li>Chapter B</li>
        <li>Haven't Started Yet</li>
        <li>Chapter A</li>
        <li>Chapter C</li>
      </ul>
    </div>
  );
};

export default Chart;
