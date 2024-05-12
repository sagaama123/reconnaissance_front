import React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/navbar/Navbar';
import './new.scss';
import { Stats } from '../../components/stats/Stats';

export const New = () => {
  return (
    <div className="newAdmin">
      <Sidebar />
      <div className="newcontainerA">
        <Navbar />
        <Stats />
      </div>
    </div>
  );
};
