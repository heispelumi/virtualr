// Layout.js
import React from 'react';
import Nav from './Nav'; // Import the Nav component

const Layout = ({ children }) => {
  return (
    <div>
      <Nav /> {/* Navigation bar is always displayed */}
      <main className="p-4">{children}</main> 
    </div>
  );
};

export default Layout;
