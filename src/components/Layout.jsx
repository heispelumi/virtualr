
import React from 'react';
import Nav from './Nav'; 

const Layout = ({ children }) => {
  return (
    <div>
      <Nav /> 
      <main className="p-4">{children}</main> 
    </div>
  );
};

export default Layout;
