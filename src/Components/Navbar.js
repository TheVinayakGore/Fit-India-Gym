import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../img/logo2.svg';
import { LuSun, LuMoonStar } from "react-icons/lu";

// 🌐 Navigation Links Data
const navLinks = [
  { id: 1, label: "About", to: "about" },
  { id: 2, label: "Workout", to: "workout" },
  { id: 3, label: "Diet Plans", to: "diet-plans" },
  { id: 4, label: "Pricing", to: "pricing" },
  { id: 5, label: "Review", to: "review" },
  { id: 6, label: "Contact", to: "contact" },
  { id: 7, label: "Links", to: "links" },
];

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <>
      <nav className={`flex items-center justify-between m-auto text-sm py-1 px-10 fixed top-0 z-10 
        ${darkMode ? "bg-black/[0.5] text-white" : "bg-white/[0.5] text-black border-b border-transparent/[0.1]"} 
        backdrop-blur-md z-50 w-full`}
      >
        {/* 🔹 Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <button>
            <img src={Logo} alt="logo" className="w-12" />
          </button>
          <button className='flex items-center gap-1 font-bold text-xl'>
            <span>FIT</span>
            <span className="text-orange-500">MODE</span>
          </button>
        </Link>

        {/* 🔹 Navigation Links */}
        <ul className="space-x-10 m-auto text-sm font-normal flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink to={link.to} spy={true} smooth={true} duration={500}>
                <button className='hover:text-rose -500'>{link.label}</button>
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* 🔹 CTA & Theme Toggle */}
        <ul className="space-x-10 flex items-center justify-center py-2">
          <li>
            <a href="/">
              <button className="rounded-3xl p-2 w-36 text-white bg-gradient-to-r from-purple-700 to-pink-500 hover:from-green-600 hover:to-teal-700">
                Join Now
              </button>
            </a>
          </li>
          <li>
            <button onClick={toggleTheme} className="text-xl focus:outline-none">
              {darkMode ? <LuSun /> : <LuMoonStar />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;