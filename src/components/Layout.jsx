import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Monitor, Smartphone } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

const Layout = ({ children }) => {
    const { isMobile, setIsMobile } = useViewMode();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white flex flex-col">
            {/* View Toggle Bar */}
            <div className="fixed top-0 left-0 right-0 h-14 bg-zinc-900 border-b border-zinc-800 z-[100] flex items-center justify-center gap-6">
                <button
                    onClick={() => setIsMobile(false)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${!isMobile ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                >
                    <Monitor size={16} />
                    WEB
                </button>
                <button
                    onClick={() => setIsMobile(true)}
                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isMobile ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                >
                    <Smartphone size={16} />
                    MOBILE
                </button>
            </div>

            {/* Main Content Wrapper */}
            <div className={`flex flex-col flex-grow transition-all duration-300 mt-14 ${isMobile ? 'max-w-[430px] mx-auto border-x border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.5)]' : 'w-full'}`}>
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
