import React from 'react';
import './style.css';
import DPP from './logo-Photoroom-Photoroom-removebg-preview-fotor-2024120702026.png';

const Header = () => {
  return (
    <div className="w-full min-h-[65px] fixed z-50">
      <header className="bg-[#6552D0] bg-opacity-80 min-h-[65px] mx-auto rounded-b-3xl rounded-t-xl flex flex-wrap items-center px-4 sm:px-6 md:px-8 lg:px-16 w-full sm:w-[90%] md:w-[80%] lg:w-3/4">
        {/* Logo Section */}
        <div className="flex items-center justify-start w-1/4 sm:w-1/6 md:w-1/4 min-h-[65px]">
          <img
            src={DPP}
            alt="DPP logo"
            className="w-16 xs:w-12 sm:w-14 md:w-16 lg:w-20 ml-4 xs:ml-2 sm:ml-4 md:ml-6"
          />
        </div>
        {/* Navigation Menu */}
        <div className="flex justify-end w-3/4 sm:w-5/6 md:w-3/4">
          <ul className="list-none flex flex-wrap items-center gap-4 sm:gap-3 md:gap-5 lg:gap-8 mr-4 sm:mr-2 md:mr-4 lg:mr-8 text-[14px] xs:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
            <li>
              <a href="#home" className="cursor-pointer">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="cursor-pointer">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#services" className="cursor-pointer">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#office" className="cursor-pointer">
                OFFICE TEAM
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
