import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useViewMode } from '../context/ViewModeContext';

const Home = () => {
    const { isMobile } = useViewMode();
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <div className={`relative w-full overflow-hidden bg-dark-900 flex flex-col ${!isMobile ? 'h-[calc(100vh-80px)] md:flex-row' : 'min-h-[calc(100vh-80px)] h-auto py-12'} items-center justify-center`}>
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-dark-900 to-black opacity-50 z-0"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-3xl rounded-full translate-x-1/2"></div>

            {/* Left Text Content */}
            <div className={`relative z-20 flex flex-col justify-center items-end text-right px-6 ${!isMobile ? 'w-full md:w-1/2 h-full' : 'w-full h-auto pr-6 pb-12'}`}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col items-end"
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.5em] text-red-500 mb-4 mr-1">
                        ACTOR
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 relative">
                        <span className="relative z-30">LIM GAON</span>
                        {/* Decorative line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute -bottom-4 right-0 h-1 bg-white/20"
                        ></motion.div>
                    </h1>

                    <p className={`max-w-xl text-gray-400 font-light leading-relaxed tracking-wide mb-10 mt-8 ${!isMobile ? 'text-sm md:text-base' : 'text-base'}`}>
                        "이곳을 스쳐 가는 모든 인연에<br />
                        평안과 행복이 가득하기를.<br /><br />
                        함께해 주셔서 감사합니다."
                    </p>

                    <Link
                        to="/profile"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <button className="px-8 py-3 border border-white/30 text-white font-light tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            VIEW PROFILE
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Right Image Content */}
            <div className={`relative z-10 flex items-center justify-center ${!isMobile ? 'w-full md:w-1/2 h-[50vh] md:h-full' : 'w-full h-auto justify-center px-6'}`}>
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`relative shadow-2xl ${!isMobile ? 'h-[80%] max-h-[700px] w-auto aspect-[3/4]' : 'w-full aspect-[3/4]'}`}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                    <img
                        src="/assets/profile_main.jpg"
                        alt="Lim Gaon"
                        className={`w-full h-full object-cover object-top transition-all duration-700 ${isHovering ? 'grayscale' : 'grayscale-0'}`}
                    />
                    {/* Border accent */}
                    <div className="absolute -inset-4 border border-white/5 z-0 pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
