import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Youtube, Facebook, Copyright, Globe } from 'lucide-react';

// NOTE: Original Logo component/path kept as per provided code structure
import Logo from '/icologo.png'; 
const START_YEAR = 2024;
// --- Constants ---
const LEGAL_LINKS = [
    { title: "Terms of Use", path: "/termsofuse" },
    { title: "Privacy Policy", path: "/privacypolicy" },
    { title: "Cookie Policy", path: "/cookiepolicy" },
    { title: "Contact Us", path: "/contact" },
];

const SOCIAL_LINKS = [
    { name: "Twitter", icon: Twitter, url: "#" }, // Replace '#' with actual URLs
    { name: "YouTube", icon: Youtube, url: "#" }, 
    { name: "Facebook", icon: Facebook, url: "#" }, 
];
const currentYear = new Date().getFullYear();
  const yearRange = currentYear > START_YEAR ? `${START_YEAR}\u2013${currentYear}` : `${START_YEAR}`;
// --- Sub-Components for Cleanliness ---

const LegalLink = ({ title, path }) => (
    <NavLink 
        to={path} 
        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
    >
        {title}
    </NavLink>
);

const SocialIcon = ({ Icon, name, url }) => (
    <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={name}
        className="text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
    >
        <Icon className="h-6 w-6" />
    </a>
);

// --- Main Footer Component ---

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    {/* 1. Copyright and Logo (Left Section) */}
                    <aside className="flex items-center space-x-3 order-2 md:order-1">
                        <img src={Logo} className="w-8 h-8 object-contain" alt="Logo Icon" />
                        <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                            <Copyright className="h-4 w-4 mr-1" />
                            <p>{yearRange} .Resilient Slope LLC. All rights reserved.</p>
                        </div>
                    </aside>
                    
                    {/* 2. Legal Links (Center Section - Stacks on mobile) */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
                        {LEGAL_LINKS.map((link) => (
                            <LegalLink key={link.path} title={link.title} path={link.path} />
                        ))}
                    </div>

                    {/* 3. Social Media Icons (Right Section) */}
                    <nav className="flex space-x-6 order-3 md:order-3">
                        {SOCIAL_LINKS.map((social) => (
                            <SocialIcon 
                                key={social.name}
                                Icon={social.icon}
                                name={social.name}
                                url={social.url}
                            />
                        ))}
                    </nav>

                </div>
                
                {/* Optional: Location/Global Context */}
                {/* <div className="mt-8 text-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center">
                        <Globe className="h-3 w-3 mr-1" />
                        Serving clients globally from Arlington, TX.
                    </p>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;