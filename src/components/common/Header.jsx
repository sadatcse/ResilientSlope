import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '/logo.png';

const Header = () => {
    const navlinks = <> 
    <li className='text-sky-500'><NavLink to="/">Home</NavLink></li>
    <li className='text-sky-500'><NavLink to="/service">Service</NavLink></li>
    <li className='text-sky-500'><NavLink to="/vetivergrass">Vetiver Grass</NavLink></li>
    <li className='text-sky-500'><NavLink to="/recycledplastic">Recycled Plastic Pin</NavLink></li>
    <li className='text-sky-500'><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
<div className="navbar bg-base-100 border-b border-gray-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex">
        {navlinks}
      </ul>
    </div>
    <img src={Logo} alt="Logo" className="h-16 w-auto" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
    );
};

export default Header;