
import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import '../navbar/Navbar.css'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
