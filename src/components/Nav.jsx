// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiFacebook, CiLinkedin, CiMenuFries } from "react-icons/ci";
import logo from '../assets/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import { RiTwitterXFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <nav className='w-full overflow-hidden flex bg-black/50 border-b border-neutral-700/80 shadow-neutral-300 justify-between h-[80px]'>
      {/* Desktop View */}
      <div className='w-full px-6 md:px-[50px] lg:px-[150px] flex justify-between items-center'>
        {/* Brand Logo */}
        <div className='flex items-center py-8'>
          <div className="flex items-center">
            <img className="w-10 h-10 object-cover" src={logo} alt="Nexcent Logo" />
            <span className='text-neutralGray text-[15px] font-semibold ml-2'>nexcent</span>
          </div>
        </div>

        {/* Menu Links for Desktop */}
        <div className='hidden md:flex items-center text-white'>
          <div className='flex items-center sm:space-x-3 lg:space-x-8'>
            <Link to="/" className='hover:text-neutralGray text-[12px] lg:text-[15px]'>Home</Link>
            <Link to="/features" className='hover:text-neutralGray text-[12px] lg:text-[15px]'>Features</Link>
            <Link to="/shop" className='hover:text-neutralGray text-[12px] lg:text-[15px]'>Workflow</Link>
            <Link to="/community" className='hover:text-neutralGray text-[12px] lg:text-[15px]'>Pricing</Link>
            <Link to="/blog" className='hover:text-neutralGray text-[12px] lg:text-[15px]'>Testimonials</Link>
          </div>
        </div>

        {/* Buttons for Desktop */}
        <div className='items-center space-x-3 hidden md:flex justify-center'>
          <button className='flex'>
            <h1 className='border border-white bg-black p-3 text-[12px] rounded-md'> Sign in </h1>
          </button>
          <button className='buttons'>
            <h1 className='flex text-[12px] items-center'>Create an account</h1>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden'>
          <CiMenuFries
            onClick={() => setNav(!nav)}
            size={30}
            className="text-white cursor-pointer absolute top-6 right-8"
          />
        </div>
      </div>

      {/* Mobile Overlay */}
      {nav && <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-20"></div>}

      {/* Mobile Menu */}
      <div className={nav ? 'fixed top-0 left-0 h-screen w-full bg-black text-white font-bold flex flex-col items-center z-30 duration-300' : 'fixed bg-brandPrimary top-[-100%] left-0 h-full w-full z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className='absolute top-6 right-8 w-[22px] h-[22px] cursor-pointer'
        />
        <div className='flex md:hidden pt-[150px] flex-col items-center space-y-8'>
          <Link to="/"  onClick={() => setNav(false)} className='text-[20px] '>Home</Link>
          <Link to="/features"  onClick={() => setNav(false)} className='text-[20px] '>Features</Link>
          <Link onClick={() => setNav(false)} className='text-[20px] '>Workflow</Link>
          <Link onClick={() => setNav(false)} className='text-[20px] '>Pricing</Link>
          <Link onClick={() => setNav(false)} className='text-[20px] '>Testimonials</Link>
        </div>

       {/* buttons */}
       <div className='flex gap-x-3 pt-[40px]'>
        <button className='bg-black border px-4 py-3 rounded-md '>
            Sign in 
        </button>
        <button className='bg-gradient-to-r border rounded-md py-2 px-3 from-orange-600 to red-500 '>
           Create an account
        </button>
       </div>
        {/* Social Icons */}
        <div className='flex items-center pb-6 justify-center space-x-4 mt-auto z-20'>
          <CiFacebook className='w-[24px] h-[24px]' />
          <RiTwitterXFill className='w-[24px] h-[24px]' />
          <FaInstagram className='w-[24px] h-[24px]' />
          <CiLinkedin className='w-[24px] h-[24px]' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
