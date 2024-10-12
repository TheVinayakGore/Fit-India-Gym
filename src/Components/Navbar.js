import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../img/logo2.svg';

export default function Navbar() {

  return (
    <>
      <nav className="flex items-center justify-between m-auto text-white text-sm px-6 fixed top-0 z-10 bg-gradient-to-r from-black/[0.5] to-zinc-800/[0.5] w-full">
        <Link to="/" className="flex items-center space-x-2">
          <button>
            <img src={Logo} alt="logo" className="w-14" />
          </button>
          <button className='flex flex-col items-start'>
            <span className="text-xs">FIT</span>
            <p className='text-xl leading-4'>
              <span className="text-orange-500">IN</span>
              <span>D</span>
              <span className="text-green-600">IA</span>
            </p>
          </button>
        </Link>
        <ul className="space-x-10 m-auto text-md font-normal flex">
          <li>
            <ScrollLink to="about" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>About</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="workout" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Workout</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="diet-plans" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Diet Plans</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="pricing" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Pricing</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="review" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Review</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Contact</button>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="links" spy={true} smooth={true} duration={500}>
              <button className='hover:text-zinc-400'>Links</button>
            </ScrollLink>
          </li>
        </ul>
        <ul className="space-x-10 flex items-center justify-center py-2">
          <li>
            <a href="/">
              <button className="rounded-3xl p-2 w-36 bg-gradient-to-r from-purple-700 to-pink-500 hover:from-green-600 hover:to-teal-700">
                Join Now
              </button>
            </a>
          </li>
          <li>
            <a href="/">
              <button className="text-xl">
                <i class="fa-solid fa-moon"></i>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
