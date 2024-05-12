// Homeadmin.jsx
import React from 'react';
import "./home.scss";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from '../../components/navbar/Navbar';
import { Widget } from '../../components/widget/Widget';
import { Featured } from '../../components/featured/Featured';
import { Chart } from '../../components/chart/Chart';

export const Homeadmin = () => {
  return (
    <div className="homeAdmin">
      <Sidebar />
      <div className="homeContainer">
       <Navbar /> {/* Ensure that the Navbar component is rendered */}
       <div className="widgets">
          <Widget type="user" style={{ width: '10%' }} /> {/* Adjust width as needed */}
          <Widget type="verified" style={{ width: '25%' }} /> {/* Adjust width as needed */}
          <Widget type="male" style={{ width: '25%' }} /> {/* Adjust width as needed */}
          <Widget type="female" style={{ width: '25%' }} /> {/* Adjust width as needed */}
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};
