import React from 'react';
import { motion } from 'framer-motion';

import { useViewMode } from '../context/ViewModeContext';

const Filmography = () => {
    const { isMobile } = useViewMode();

    const films = [
        { year: '2026', title: '단편 <Die Kraehe>', role: '주연 (no.15 역)', note: '아토믹 A.S.' },
        { year: '2026', title: '단편 <푸른 새벽>', role: '주연 (승우 역)', note: 'SXXX 영상워크숍' },
        { year: '2026', title: '장편 <자기애>', role: '주연 (상반기 크랭크인 예정)', note: '장XX 감독' },
    ];

    // ... (keep theater array same, just truncated in replacement for brevity if unchanged, but I need to include it or reference it correctly. I'll include it.)
    const theater = [
        { year: '2019', title: 'Concert Summer Gala Night', role: 'Soloist', note: 'In Düsseldorf' },
        { year: '2018', title: 'Concert Summer Gala Night', role: 'Soloist', note: 'In Düsseldorf' },
        { year: '2017', title: 'Arien, Lieder und Ruhig', role: 'Soloist', note: 'In Hilden' },
        { year: '2016', title: 'Opera Le nozze di Figaro', role: 'Ensemble', note: 'In Munich' },
        { year: '2015', title: 'Opera Die Zauberflöte', role: 'Chor', note: 'In Düsseldorf' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    const CareerList = ({ title, items }) => (
        <div className="mb-16 w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-red-500 border-l-4 border-red-500 pl-4">
                {title}
            </h3>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 w-full"
            >
                {items.map((work, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className={`group flex ${isMobile ? 'flex-row items-center py-2' : 'flex-col md:flex-row md:items-baseline pb-4'} w-full border-b border-gray-800 hover:border-gray-600 transition-colors overflow-hidden`}
                    >
                        <span className={`${isMobile ? 'text-sm w-12 text-gray-400' : 'text-xl font-light text-gray-500 w-24'}`}>{work.year}</span>
                        <div className={`flex-grow ${isMobile ? 'flex items-center gap-2 overflow-hidden' : ''}`}>
                            <span className={`${isMobile ? 'text-base font-bold whitespace-nowrap' : 'text-xl md:text-2xl font-medium'} text-white block md:inline mb-1 md:mb-0 group-hover:text-red-400 transition-colors`}>
                                {work.title}
                            </span>
                            <span className={`${isMobile ? 'text-xs text-gray-500 whitespace-nowrap' : 'md:ml-4 text-gray-400 font-light text-sm md:text-base'}`}>
                                {isMobile ? '' : '| '}{work.role}
                            </span>
                        </div>
                        <span className={`${isMobile ? 'text-xs ml-auto whitespace-nowrap pl-2' : 'text-sm italic mt-1 md:mt-0 text-right md:w-48'} text-gray-500`}>
                            {work.note}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <section className="w-full px-6 py-12 md:py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter text-white/20 relative">
                    CAREER
                    <div className="absolute -bottom-4 left-0 h-1 bg-white/20 w-full"></div>
                </h2>

                <CareerList title="Film" items={films} />
                <CareerList title="Theater & Opera" items={theater} />
            </motion.div>
        </section>
    );
};

export default Filmography;
