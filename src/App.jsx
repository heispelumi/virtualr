import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import Hero from './components/Hero'; // Import the Hero component
import Features from './components/Features'; // Import the Features component

function App() {
  return (
    <Layout> {/* Wrap all routes inside the Layout */}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
        </Routes>
     
    </Layout>
  );
}

export default App;

