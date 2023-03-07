import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { links } from '../data.js';
import './navbar.css';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="loog" onClick={() => setShowNavbar(false)}>
          <h3>PopCorn Movies</h3>
        </Link>
        <ul className={`nav__links ${showNavbar ? 'show-nav' : 'hide-nav'}`}>
          {links.map(({ path, name }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setShowNavbar((prev) => !prev)}
                  // className={({ isActive }) => (isActive ? 'active-nav' : '')}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggel-btn"
          onClick={() => setShowNavbar((prev) => !prev)}
        >
          {showNavbar ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
        <div className="nav__icons">
          <FaFacebookF className="nav__icons-style" />
          <AiFillInstagram className="nav__icons-style" />
          <BsTwitter className="nav__icons-style" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
