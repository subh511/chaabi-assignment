import React from 'react';
import "./Sidebar.css"
import logo from "../sidebar/assets/Logo.png";
import category from "../sidebar/assets/Category.png";
import game from "../sidebar/assets/Game.png";
import stamps from "../sidebar/assets/Ticket Star.png";
import location from "../sidebar/assets/Location.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="chaabi" />
      </div>
      <div className="line"></div>
      <div className="sidebar-items">
        <div className="sidebar-it">
        <img src={category} alt="none"/>
          <span className='dash'>Dashboard</span>
        </div>
        <div className="sidebar-item">
        <img src={game} alt="none"/>
          <span>Trainings</span>
        </div>
        <div className="sidebar-item">
        <img src={stamps} alt="none"/>
          <span>Users</span>
        </div>
        <div className="sidebar-item">
        <img src={location} alt="none"/>
          <span>Analytics</span>
        </div>
        <div className="sidebar-item">
        <img src={location} alt="none"/>
          <span>My Account</span>
        </div>
        <div className="sidebar-item">
        <img src={location} alt="none"/>
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
