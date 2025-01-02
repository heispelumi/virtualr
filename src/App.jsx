import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the Layout component
import Hero from './components/Hero'; 
import Features from './components/Features'; 
import Workflow from './components/Workflow'; 
import Pricing from './components/Pricing'; 
import Testimonials from './components/Testimonials'; 

function App() {
  return (

    <div className="max-w-[90rem]  mx-auto  ">
    <Layout> 

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
        </Routes>
     
    </Layout>

    </div>
  );
}

export default App;

