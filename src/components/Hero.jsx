import React, { useState, useEffect, useRef } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import { RiInstagramFill, RiRedditFill, RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { key: 'en', label: 'English' },
    { key: 'fr', label: 'French' },
    { key: 'sp', label: 'Español' },
    { key: 'zh-CN', label: '中文 ' },
  ];

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleLanguageChange = (langKey) => {
    setCurrentLanguage(langKey);
    i18n.changeLanguage(langKey);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className=''>
      {/* Text area */}
      <div className='flex flex-col items-center overflow-hidden mt-12'>
        <h1 className='sm:w-[1000px] lg:pt-[50px] text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
          {t('title')}
          <span className='text-center bg-gradient-to-r from-orange-500 to-red-800 text-transparent mx-4 bg-clip-text'>
            {t('for_developers')}
          </span>
        </h1>
        <p className='mt-7 text-[13px] py-6 lg:text-[20px] sm:text-lg text-center text-neutral-500 max-w-md sm:max-w-3xl lg:max-w-4xl'>
          {t('description')}
        </p>
        {/* Buttons */}
        <div className='flex space-x-4 sm:space-x-8'>
          <button className='buttons my-10 text-[14px] md:text-[20px]'>{t('start_for_free')}</button>
          <button>
            <h1 className='border border-white bg-black py-3 px-4 md:text-[20px] text-[14px] rounded-md'>{t('documentation')}</h1>
          </button>
        </div>
        {/* Videos */}
        <div className='flex items-center lg:px-[150px] lg:pt-[100px] text-center'>
          <div className="grid items-center md:space-x-10 grid-cols-1 md:flex md:justify-center mt-10">
            <video autoPlay loop muted src={video1} className="rounded-lg w-[350px] lg:w-[600px] border border-orange-700 shadow-orange-400 my-4"></video>
            <video autoPlay loop muted src={video2} className="rounded-lg w-[350px] lg:w-[600px] border border-orange-700 shadow-orange-400 my-4"></video>
          </div>
        </div>
      </div>
       
       {/* Footer */}
      {/* <footer className='text-white px-[7px] lg:px-[150px]  lg:pt-[250px] '>
      
            <div className='grid grid-cols-2  md:space-x-36 sm:grid sm:grid-cols-6 px-1 pb-5 col-span-2  '>

            <div className=''>
              <div className='flex items-center py-2'>
                <div className="flex items-center">
                  <img className="w-[100px] h-[50px] object-cover" src={logo} alt="Nexcent Logo" />
                  <span className='text-neutralGray text-[30px] font-semibold ml-2'>nexcent</span>
                </div>
              </div>
              <div ref={dropdownRef} className= "relative group ">
                <div onClick={toggleDropdown} className="flex items-center text-xl gap-x-1 h-[72px] cursor-pointer text-orange-500">
                  {languages.find(lang => lang.key === currentLanguage)?.label || 'English'}
                  <span>
                    <IoMdArrowDropdown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-10 left-0 items-center flex flex-col text-center mt-2 w-[140px] rounded-md bg-[#24282F] shadow-md p-2 text-white">
                    {languages.map(lang => (
                      <button
                        key={lang.key}
                        className="block text-[15px] px-4 py-4 text-white hover:text-orange-500"
                        onClick={() => handleLanguageChange(lang.key)}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
          
            </div>

              <div className='flex flex-col w-full pt-[100px]  md:pt-5'>
                <h1 className='text-white pb-3 text-[16px]'>Company</h1>
                <h1 className='text-zinc-400     py-1 text-[16px]'>Careers</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Blog</h1>
                <h1 className=' text-zinc-400    py-1 text-[16px]'>Press Kit</h1>
                <h1 className=' text-zinc-400    py-1 text-[16px]'>Newsletter</h1>
                <h1 className= 'text-zinc-400    py-1  text-[16px]'>Newsroom</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Github</h1>
              </div>

              <div className='flex flex-col  w-full  pb-[200px]  md:pt-5'>
                <h1 className='text-white pb-3 text-[16px]'>Features</h1>
                <h1 className='text-zinc-400     py-1 text-[16px]'>Cross-platform</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>WebXR</h1>
                <h1 className=' text-zinc-400    py-1 text-[16px]'>Assets</h1>
                <h1 className=' text-zinc-400    py-1 text-[16px]'>Code-editor</h1>
                <h1 className= 'text-zinc-400    py-1  text-[16px]'>Responsive</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Collaboration</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Optimization</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Export</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Interactivity</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Templates</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Analytics</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Multiplayer</h1>
                <h1 className=' text-zinc-400    py-1  text-[16px]'>Scalability</h1>
              </div>

              <div className='flex flex-col w-full   md:pt-5'>
                <h1 className='text-white  pb-3 text-[16px]'>Discover</h1>
                <h1 className='text-zinc-400     py-1 text-[16px]'>FAQ</h1>
                <h1 className=' text-zinc-400   py-1  text-[16px]'>Explore</h1>
                <h1 className=' text-zinc-400    py-1 text-[16px]'> Inscribe GPT </h1>
              </div>


          

     


                  <div className='flex    md:pt-3'>
                  <div className='px-2'>
                  <RiTwitterXFill   className='text-[25px]'  />
                  </div >
                  <div className='px-2'>
                  <RiTiktokFill     className='text-[25px]'    />
                  </div>
                  <div className='px-2'>
                  <RiInstagramFill  className='text-[25px]'  />
                  </div>
                  <div className='px-2'>
                  <RiRedditFill     className='text-[25px]'     />
                  </div>

                  </div>
            
            </div>
          
            
        

       
      </footer> */}<footer className='text-white px-4 lg:px-[150px] lg:pt-[100px]'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
    {/* Logo and Language Dropdown */}
    <div>
      <div className='flex items-center py-2'>
        <div className="flex items-center">
          <img className="w-[100px] h-[50px] object-cover" src={logo} alt="Nexcent Logo" />
          <span className='text-neutralGray text-[30px] font-semibold ml-2'>nexcent</span>
        </div>
      </div>
      <div ref={dropdownRef} className="relative group">
        <div onClick={toggleDropdown} className="flex items-center text-xl gap-x-1 h-[72px] cursor-pointer text-orange-500">
          {languages.find(lang => lang.key === currentLanguage)?.label || 'English'}
          <span>
            <IoMdArrowDropdown className={`transition-all duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </span>
        </div>
        {isDropdownOpen && (
          <div className="absolute z-10 left-0 items-center flex flex-col text-center mt-2 w-[140px] rounded-md bg-[#24282F] shadow-md p-2 text-white">
            {languages.map(lang => (
              <button
                key={lang.key}
                className="block text-[15px] px-4 py-4 text-white hover:text-orange-500"
                onClick={() => handleLanguageChange(lang.key)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Company Section */}
    <div className='flex flex-col'>
      <h1 className='text-white pb-3 text-[16px]'>Company</h1>
      {['Careers', 'Blog', 'Press Kit', 'Newsletter', 'Newsroom', 'Github'].map((item, index) => (
        <h1 key={index} className='text-zinc-400 py-1 text-[16px]'>{item}</h1>
      ))}
    </div>

    {/* Features Section */}
    <div className='flex flex-col'>
      <h1 className='text-white pb-3 text-[16px]'>Features</h1>
      {['Cross-platform', 'WebXR', 'Assets', 'Code-editor', 'Responsive', 'Collaboration', 'Optimization', 'Export', 'Interactivity', 'Templates', 'Analytics', 'Multiplayer', 'Scalability'].map((item, index) => (
        <h1 key={index} className='text-zinc-400 py-1 text-[16px]'>{item}</h1>
      ))}
    </div>

    {/* Discover Section */}
    <div className='flex flex-col'>
      <h1 className='text-white pb-3 text-[16px]'>Discover</h1>
      {['FAQ', 'Explore', 'Inscribe GPT'].map((item, index) => (
        <h1 key={index} className='text-zinc-400 py-1 text-[16px]'>{item}</h1>
      ))}
    </div>
  </div>

  {/* Social Media Icons */}
  <div className='flex justify-center space-x-4 py-4'>
    <RiTwitterXFill className='text-[25px]' />
    <RiTiktokFill className='text-[25px]' />
    <RiInstagramFill className='text-[25px]' />
    <RiRedditFill className='text-[25px]' />
  </div>
</footer>

    </div>
  );
};

export default Hero;

