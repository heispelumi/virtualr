import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import Hero from './components/Hero'; 
import Features from './components/Features'; 

function App() {
  return (

    <div className="max-w-9xl mx-auto pt-20 px-6">
    <Layout> 

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
        </Routes>
     
    </Layout>

    </div>
  );
}

export default App;

