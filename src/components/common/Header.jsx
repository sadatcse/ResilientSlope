import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react'; // Icons for menu toggle and dropdown
import { motion } from 'framer-motion'; // For smooth mobile animation

// NOTE: Original Logo component/path kept as per provided code structure
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

/**
 * Reusable NavLink styling component
 * @param {object} item - { title, path }
 * @param {string} className - Additional classes for the <li> wrapper
 */
const NavItem = ({ item, className }) => {
    // Defines active and inactive states for NavLink
    const linkClasses = ({ isActive }) =>
        `font-medium transition-colors hover:text-sky-600 dark:hover:text-sky-400 ${
            isActive 
                ? 'text-sky-500 dark:text-sky-400 font-semibold' // Active state styling
                : 'text-gray-700 dark:text-gray-300' // Inactive state styling
        }`;

    return (
        <li className={`p-1 ${className}`}>
            <NavLink to={item.path} className={linkClasses}>
                {item.title}
            </NavLink>
        </li>
    );
};

// --- Main Header Component ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Framer Motion variants for the mobile menu (slide-in effect)
    const menuVariants = {
        closed: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
        open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* Logo and Home Link */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={Logo} alt="Company Logo" className="h-14 w-auto object-contain" />
                            {/* Optionally add text branding here */}
                        </Link>
                    </div>

                    {/* Desktop Navigation (Hidden on small screens) */}
                    <nav className="hidden lg:flex">
                        <ul className="flex items-center space-x-6">
                            {NAV_ITEMS.map((item) => (
                                <NavItem key={item.path} item={item} />
                            ))}
                        </ul>
                    </nav>

                    {/* End Section / Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                    
                    {/* Placeholder for CTA Button (Hidden in original component, but often needed) */}
                    <div className="hidden lg:flex items-center ml-4">
                        {/* Example Button */}
                        <Link to="/contact" className="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md">
                            Get Quote
                        </Link>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Overlay (Off-canvas navigation using Framer Motion) */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuVariants}
                className="fixed inset-0 z-40 lg:hidden"
            >
                {/* Backdrop for click outside functionality */}
                <div 
                    className="absolute inset-0 bg-black/50" 
                    onClick={() => setIsMenuOpen(false)} 
                />

                {/* Actual Menu Panel (slides in from right) */}
                <div className="absolute right-0 top-0 w-64 h-full bg-white dark:bg-gray-900 shadow-2xl p-6 overflow-y-auto">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Close Menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            {NAV_ITEMS.map((item) => (
                                <NavItem 
                                    key={item.path} 
                                    item={item} 
                                    className="border-b border-gray-100 dark:border-gray-800 pb-2"
                                    // Close menu on click
                                    onClick={() => setIsMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <Link 
                            to="/contact" 
                            className="block w-full text-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;