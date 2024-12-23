import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import Hero from './components/Hero'; // Import the Hero component


function App() {
  return (
    <Layout> {/* Wrap all routes inside the Layout */}
      <Routes>
        <Route path="/" element={<Hero />} /> 
   
   
      </Routes>
    </Layout>
  );
}

export default App;

