import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

const Footer = () => {
    const { isMobile } = useViewMode();

    return (
        <footer className="bg-dark-900 border-t border-gray-800 py-12">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-4 mb-10">
                    <h2 className="text-2xl font-light tracking-wider text-white">LIM GAON</h2>
                    <p className="text-red-500 text-sm tracking-[0.3em] font-medium">CONTACT</p>
                </div>

                <div className={`flex flex-col ${!isMobile ? 'md:flex-row' : ''} justify-center items-center gap-6 text-gray-400 font-light tracking-wide ${isMobile ? 'text-xs' : ''}`}>
                    {/* Email */}
                    <a href="mailto:gaontherun@naver.com" className="flex items-center gap-2 hover:text-white transition-colors group">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Mail size={16} />
                        </div>
                        <span>gaontherun@naver.com</span>
                    </a>

                    <div className={`${!isMobile ? 'hidden md:block' : 'hidden'} w-px h-4 bg-gray-800`}></div>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/gaontherun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-pink-600/20 transition-colors">
                            <Instagram size={16} className="group-hover:text-pink-500 transition-colors" />
                        </div>
                        <span>@gaontherun</span>
                    </a>

                    <div className={`${!isMobile ? 'hidden md:block' : 'hidden'} w-px h-4 bg-gray-800`}></div>

                    {/* Phone */}
                    <a href="tel:01046491230" className="flex items-center gap-2 hover:text-white transition-colors group">
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <Phone size={16} />
                        </div>
                        <span>010.4649.1230</span>
                    </a>
                </div>

                <div className="mt-16 text-gray-800 text-xs tracking-widest">
                    &copy; {new Date().getFullYear()} LIM GAON. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
