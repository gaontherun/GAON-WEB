import React from 'react';
import { motion } from 'framer-motion';
import { useViewMode } from '../context/ViewModeContext';

const Profile = () => {
    const { isMobile } = useViewMode();

    return (
        <section className="w-full px-6 py-12 md:py-24">
            <div className={`flex flex-col ${!isMobile ? 'md:flex-row lg:gap-24' : ''} gap-12 items-start`}>
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`${!isMobile ? 'w-full md:w-1/2 lg:w-5/12' : 'w-full'}`}
                >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-900 relative shadow-2xl">
                        <img
                            src="/assets/profile_closeup.jpg"
                            alt="Lim Gaon Closeup"
                            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
                    </div>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`${!isMobile ? 'w-full md:w-1/2 lg:w-7/12' : 'w-full'} pt-4`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">임 가 온</h2>
                    <h3 className="text-xl md:text-2xl font-light tracking-[0.2em] text-red-500 mb-12">LIM, GAON</h3>

                    <div className="space-y-8 font-light tracking-wide text-lg md:text-xl text-gray-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-2">생년월일</h4>
                                <p>1991. 03. 12 (대한민국)</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-2">키 / 몸무게</h4>
                                <p>187cm / 75kg</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-2">신체사이즈</h4>
                                <p>상의 110 / 하의 31 / 신발 285</p>
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-2">특기</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['성악', '오페라', '미술', '독일어'].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 text-sm border border-white/10 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-800 mt-8">
                            <h4 className="text-sm text-gray-500 tracking-widest uppercase mb-4">Contact</h4>
                            <div className="flex flex-col gap-2">
                                <a href="mailto:gaontherun@naver.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-20 text-gray-500">Email.</span> gaontherun@naver.com
                                </a>
                                <a href="tel:01046491230" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <span className="w-20 text-gray-500">Mobile.</span> 010.4649.1230
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Profile;
