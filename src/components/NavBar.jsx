import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const active = props.active;
  const [burgerClicked, setBurgerClicked] = useState(false);

  const handleBurgerMenuClick = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <div className='flex flex-row mx-10 lg:mx-20 my-10 lg:my-10 justify-between items-center fade-down-navbar'>
      <Link to="/">
        <img src='/logo_transparent.png' alt='Logo' className="w-56 md:w-80" />
      </Link>

      <div className='block lg:hidden z-40'>
          <p className={`${burgerClicked ? "text-white" : "text-black"} text-4xl burger-menu-button`} onClick={handleBurgerMenuClick}>
            {burgerClicked ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </p>
      </div>

      <div
          className={`burger-menu position block lg:hidden z-50 ${
          burgerClicked ? 'burger-menu-open' : ''
          }`}
      >
          <Link to="/" className={`text-white ${active === "home" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>home</Link>
          <Link to="/about" className={`text-white ${active === "about" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>about</Link>
          <Link to="/projects" className={`text-white ${active === "projects" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>projects</Link>
          <Link to="/contact" className={`text-white ${active === "contact" ? "font-bold" : "opacity-80 hover:opacity-100"}`} onClick={handleBurgerMenuClick}>contact</Link>
      </div>


      <div className='hidden lg:block'>
        <div className='flex flex-row space-x-10'>
            <Link to="/" className={`text-xl font-bold ${active === "home" ? "navbar-item-active" : "navbar-item"}`}>home</Link>
            <Link to="/about" className={`text-xl font-bold ${active === "about" ? "navbar-item-active" : "navbar-item"}`}>about</Link>
            <Link to="/projects" className={`text-xl font-bold ${active === "projects" ? "navbar-item-active" : "navbar-item"}`}>projects</Link>
            <Link to="/contact" className={`text-xl font-bold ${active === "contact" ? "navbar-item-active" : "navbar-item"}`}>contact</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
