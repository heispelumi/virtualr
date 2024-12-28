

import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import logo from '../assets/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import { RiInstagramFill, RiRedditFill, RiTiktokFill, RiTwitterXFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Lock body scroll when nav is open, allow scroll when closed
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [nav]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black lg:bg-transparent lg:backdrop-blur-lg border-b border-neutral-700/80 shadow-neutral-300 z-50">
      {/* Desktop View */}
      <div className="w-full px-6 md:px-[50px] lg:px-[150px] flex justify-between items-center h-[80px]">
        {/* Brand Logo */}
        <div className="flex items-center py-8">
          <div className="flex items-center">
            <img className="w-[60px] h-[30px] lg:w-[100px] lg:h-[50px] object-cover" src={logo} alt="Nexcent Logo" />
            <span className="text-neutralGray text-[20px] sm:text-[20px] lg:text-[30px] font-semibold ml-2">nexcent</span>
          </div>
        </div>

        {/* Menu Links for Desktop */}
        <div className="hidden md:flex items-center text-white">
          <div className="flex items-center sm:space-x-2 lg:space-x-8">
            <Link to="/" className="hover:text-neutralGray text-[10px] sm:text-[10px] lg:text-[15px]">{t('home')}</Link>
            <Link to="/features" className="hover:text-neutralGray text-[12px] lg:text-[15px]">{t('features')}</Link>
            <Link to="/shop" className="hover:text-neutralGray text-[12px] lg:text-[15px]">{t('workflow')}</Link>
            <Link to="/community" className="hover:text-neutralGray text-[12px] lg:text-[15px]">{t('pricing')}</Link>
            <Link to="/blog" className="hover:text-neutralGray text-[12px] lg:text-[15px]">{t('testimonials')}</Link>
          </div>
        </div>

        {/* Buttons for Desktop */}
        <div className="items-center space-x-3 hidden md:flex justify-center">
          <button className="flex">
            <h1 className="border border-white bg-black p-3 text-[12px] rounded-md">{t('sign_in')}</h1>
          </button>
          <button className="buttons">
            <h1 className="flex text-[12px] items-center">{t('create_account')}</h1>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <CiMenuFries
            onClick={() => setNav(!nav)}
            size={30}
            className="text-white cursor-pointer absolute top-6 right-8"
          />
        </div>
      </div>

      {/* Mobile Overlay */}
      {nav && (
        <div
          className="bg-black/80 fixed top-0 left-0 w-full h-screen z-20"
          onClick={() => setNav(false)} // Close menu when backdrop is clicked
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? 'fixed top-0 left-0 h-screen w-full bg-black text-white font-bold flex flex-col items-center ease-in-out z-30 duration-600' : 'fixed top-[-100%] left-0 h-full w-full z-30 ease-in-out duration-600'
        }`}
      >
        <AiOutlineClose
          onClick={() => setNav(false)} // Close menu when close button is clicked
          className="absolute top-6 right-8 w-[22px] h-[22px] cursor-pointer"
        />
        <div className="flex md:hidden pt-[150px] flex-col items-center space-y-8">  {/* Removed pt-[150px] */}
          <Link to="/" onClick={() => setNav(false)} className="text-[20px]">{t('home')}</Link>
          <Link to="/features" onClick={() => setNav(false)} className="text-[20px]">{t('features')}</Link>
          <Link onClick={() => setNav(false)} className="text-[20px]">{t('workflow')}</Link>
          <Link onClick={() => setNav(false)} className="text-[20px]">{t('pricing')}</Link>
          <Link onClick={() => setNav(false)} className="text-[20px]">{t('testimonials')}</Link>
        </div>

        {/* Buttons */}
        <div className="flex md:hidden gap-x-3 pt-[40px]">
          <button className="bg-black border px-4 py-3 rounded-md">
            {t('sign_in')}
          </button>
          <button className="bg-gradient-to-r border rounded-md py-2 px-3 from-orange-600 to red-500">
            {t('create_account')}
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex md:hidden items-center pb-6 justify-center space-x-4 mt-auto z-20">
          <RiTwitterXFill className="w-[24px] h-[24px]" />
          <RiTiktokFill className="w-[24px] h-[24px]" />
          <RiInstagramFill className="w-[24px] h-[24px]" />
          <RiRedditFill className="w-[24px] h-[24px]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
