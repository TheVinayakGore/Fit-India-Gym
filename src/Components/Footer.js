import React from 'react';
import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer({ darkMode }) {

  const linkClass = 'hover:text-zinc-400';

  return (
    <>
      <div className="links flex flex-col items-center justify-between pt-20 pb-10 px-16 text-white bg-gradient-to-b from-transparent via-transparent/[0.8] to-black w-full">
        <div className="flex items-start justify-between m-auto pb-40 text-lg w-full">
          <div>
            <ul className="items-start text-md space-y-3">
              <li className="text-green-400 pb-2 text-2xl font-medium">Gym</li>
              <li><a href="/" className={linkClass}>Professional</a></li>
              <li><a href="/" className={linkClass}>Home Workouts</a></li>
              <li><a href="/" className={linkClass}>Gym Workouts</a></li>
              <li><a href="/" className={linkClass}>Diet Plan</a></li>
            </ul>
          </div>
          <div>
            <ul className="items-start text-md space-y-3">
              <li className="text-green-400 pb-2 text-2xl font-medium">Links</li>
              <li><a href="/" className={linkClass}>Home</a></li>
              <li><a href="/" className={linkClass}>About</a></li>
              <li><a href="/" className={linkClass}>Service</a></li>
              <li><a href="/" className={linkClass}>Contact</a></li>
            </ul>
          </div>
          <div>
            <ul className="items-start text-md space-y-3">
              <li className="text-green-400 pb-2 text-2xl font-medium">Pricing</li>
              <li><a href="/" className={linkClass}>Offers</a></li>
              <li><a href="/" className={linkClass}>Monthly</a></li>
              <li><a href="/" className={linkClass}>Yearly</a></li>
              <li><a href="/" className={linkClass}>Weekly</a></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-5 text-sm w-80">
            <textarea placeholder="Write something..." className="p-2 bg-transparent/[0.1] border border-zinc-700 text-white rounded-md focus:outline-none" />
            <a href="/">
              <button className="p-2 rounded-md bg-gradient-to-r from-rose-700 to-purple-700 hover:from-cyan-700 hover:to-blue-700 text-white w-full">
                Comment
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between m-auto w-full">
          <div className="flex space-x-5 text-2xl">
            <a href="/" className="hover:text-rose-500"><FaTwitter /></a>
            <a href="/" className="hover:text-rose-500"><FaInstagram /></a>
          </div>
          <h1>© FITMODE {new Date().getFullYear()}</h1>
        </div>
      </div>
    </>
  );
}