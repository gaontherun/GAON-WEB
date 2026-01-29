import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Monitor, Smartphone } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
