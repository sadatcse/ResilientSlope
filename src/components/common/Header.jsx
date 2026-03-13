import React from 'react';
import { NavLink, Link } from "react-router-dom";
import Logo from '/logo.png'; 

// --- Constants ---
const NAV_ITEMS = [
    { title: "Home", path: "/" },
    { title: "Service", path: "/service" },
    { title: "Recycled Plastic Pin", path: "/recycledplastic" },
    { title: "Vetiver Grass", path: "/vetivergrass" },
    { title: "Contact", path: "/contact" },
];

// --- Sub-Components for Cleanliness ---

const NavItem = ({ item, onClick }) => {
    // NavLink classes for active/inactive state (Tailwind classes for color)
    const linkClasses = ({ isActive }) =>
        `${isActive 
            ? 'text-sky-500 font-semibold' 
            : 'text-gray-700 dark:text-gray-300' 
        } hover:text-sky-600 dark:hover:text-sky-400 transition-colors block px-4 py-2 text-sm`; 

    return (
        <li>
            <NavLink to={item.path} className={linkClasses} onClick={onClick}>
                {item.title}
            </NavLink>
        </li>
    );
};

// --- Main Header Component ---

const Header = () => {

    const closeDropdown = () => {
        // Function to close the mobile dropdown (often handled by the browser/daisyUI, but kept for cleanup)
    };

    // --- Custom Tailwind classes for the CTA button ---
    // Background: #0066cc
    // Hover: a slightly darker blue, e.g., #0052a3
    const ctaClasses = "btn btn-sm text-white bg-[#0066cc] border-none hover:bg-[#0052a3]";

    return (
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main daisyUI navbar container */}
                <div className="navbar h-20"> 
                    
                    {/* Navbar Start: Mobile Dropdown and Logo */}
                    <div className="navbar-start">
                        
                        {/* Mobile Dropdown Menu (visible on small screens) */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            
                            {/* Mobile Menu List */}
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {NAV_ITEMS.map((item) => (
                                    <NavItem 
                                        key={item.path} 
                                        item={item} 
                                        onClick={closeDropdown} 
                                    />
                                ))}
                                {/* Mobile CTA Button - UPDATED */}
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className={`${ctaClasses} mt-2`} 
                                        onClick={closeDropdown}
                                    >
                                        Get Quote
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Logo and Home Link */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={Logo} alt="Company Logo" className="h-14 w-auto object-contain" />
                        </Link>
                    </div>
                    
                    {/* Navbar Center: Desktop Navigation (Hidden on small screens) */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {NAV_ITEMS.map((item) => (
                                <NavItem key={item.path} item={item} />
                            ))}
                        </ul>
                    </div>
                    
                    {/* Navbar End: CTA Button - UPDATED */}
                    <div className="navbar-end">
                         <Link 
                             to="/contact" 
                             className={`${ctaClasses} hidden lg:flex`}
                         >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;