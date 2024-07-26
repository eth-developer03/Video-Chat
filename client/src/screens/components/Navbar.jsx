import React from 'react';
// import Im from './107.jpg';
import { useState } from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Navbar() {
  const [show, setshow] = useState(false);
  const shownav = () => {
    setshow(!show);
  };
  return (
    <div>
      <div className="flex justify-between h-11 bg-black text-yellow-50 items-center">
        <div className="flex justify-center space-x-4">
          <div className="pl-4">
            {/* <img src={Im} width="30px" /> */}
          </div>
          <div className="text-yellow-500 font-bold">
            <h1>
              <strong>REAL ZOOM MEET</strong>
            </h1>
          </div>
        </div>
        <div className="2xl:flex justify-center space-x-4 xl:flex justify-center space-x-4 lg:flex justify-center space-x-4 md:flex justify-center space-x-4 hidden">
          <div>
            {/* <a href="/">Home</a> */}
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/Paint"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Painting
            </NavLink>
          </div>
          <div className="pr-4">
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Contact
            </NavLink>
            {/* <Link to="/Contact">Contact </Link> */}
          </div>
        </div>
        <div
          className="p-2 2xl:hidden xl:hidden lg:hidden md:hidden sm:block relative "
          onClick={shownav}
        >
          <div className="bg-white w-3 h-1 mb-2"></div>
          <div className="bg-white w-3 h-1  mb-2"></div>
          <div className="bg-white w-3 h-1  "></div>
        </div>
      </div>
      <div
        className={`hin absolute text-white bg-black p-2 pt-10 right-0 text-yellow-200-500 sm:block md:hidden lg:hidden xl:hidden 2xl:hidden ${
          show ? 'dispnav' : 'hiddenv'
        }`}
      >
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Painting
          </NavLink>
        </div>

        <div className="pr-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact{' '}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
