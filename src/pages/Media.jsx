import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';

const Media = () => {
    const { isMobile } = useViewMode();

    const videos = [
        { title: '개인독백영상.1', videoUrl: 'https://www.youtube.com/embed/DkfTTXqbA2k' },
        { title: 'Monologue - Drama', duration: '01:30', thumbnail: 'bg-zinc-800' },
        { title: 'Short Film Clip', duration: '02:15', thumbnail: 'bg-zinc-800' },
        { title: 'Opera Performance', duration: '04:20', thumbnail: 'bg-zinc-800' },
    ];

    return (
        <section className="w-full px-6 py-12 md:py-24 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter text-right text-white/20 relative"
            >
                MEDIA
                <div className="absolute -bottom-4 right-0 h-1 bg-white/20 w-full"></div>
            </motion.h2>

            <div className={`grid ${isMobile ? 'grid-cols-1 -mx-6 w-[calc(100%+3rem)]' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full'} gap-8`}>
                {videos.map((video, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative ${isMobile ? 'aspect-video' : 'aspect-video'} bg-zinc-900 overflow-hidden cursor-pointer`}
                    >
                        {video.videoUrl ? (
                            <div className="w-full h-full">
                                <iframe
                                    className="w-full h-full"
                                    src={video.videoUrl}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute bottom-0 left-0 w-full p-4 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className={`${isMobile ? 'text-2xl font-bold' : 'text-xl font-medium'} tracking-wide text-white drop-shadow-md`}>{video.title}</h3>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Thumbnail Placeholder */}
                                <div className={`w-full h-full ${video.thumbnail} opacity-50 group-hover:opacity-70 transition-opacity bg-gradient-to-br from-zinc-800 to-black`}></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        <Play className="fill-white text-white ml-1" />
                                    </div>
                                </div>

                                {/* Title */}
                                <div className={`absolute bottom-0 left-0 w-full ${isMobile ? 'p-4' : 'p-6'} bg-gradient-to-t from-black/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform`}>
                                    <h3 className={`${isMobile ? 'text-2xl font-bold' : 'text-xl font-medium'} tracking-wide`}>{video.title}</h3>
                                    <p className={`${isMobile ? 'text-base' : 'text-sm'} text-gray-400 font-light`}>{video.duration}</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


export default Media;
