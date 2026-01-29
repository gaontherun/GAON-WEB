import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useViewMode } from '../context/ViewModeContext';

const Navbar = () => {
    const { isMobile } = useViewMode();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Profile', path: '/profile' },
        { name: 'Filmography', path: '/filmography' },
        { name: 'Media', path: '/media' },
    ];

    return (
        <nav className={`fixed z-50 transition-all duration-300 top-14 ${isMobile ? 'w-full max-w-[430px] left-1/2 -translate-x-1/2' : 'w-full left-0'} ${scrolled ? 'bg-dark-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className={`container mx-auto flex justify-between items-center ${isMobile ? 'px-3' : 'px-6'}`}>
                <Link to="/" className="flex items-center gap-0 group">
                    <img src="/assets/logo.png" alt="Lim Gaon Logo" className="h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className={`text-xl font-light tracking-widest text-white group-hover:text-gray-300 transition-colors ${isMobile ? '-ml-3' : ''}`}>
                        GAONTHERUN
                    </div>
                </Link>

                <div className={`${!isMobile ? 'hidden md:flex' : 'hidden'} space-x-12`}>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest font-light hover:text-red-400 transition-colors relative py-1
                                ${location.pathname === link.path ? 'text-white border-b border-red-500' : 'text-gray-400'}
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className={`${!isMobile ? 'md:hidden' : ''}`}>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${!isMobile ? 'md:hidden' : ''} absolute top-full left-0 w-full bg-dark-900 border-t border-gray-800 overflow-hidden`}
                >
                    <div className="flex flex-col py-6 px-6 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg tracking-widest font-light ${location.pathname === link.path ? 'text-white' : 'text-gray-400'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
