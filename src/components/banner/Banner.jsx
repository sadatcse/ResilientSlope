import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Banner = () => {
    const IMAGE_URL = "https://teaxo-bd.s3.ap-southeast-1.amazonaws.com/banner2.jpg";
    const TITLE = "Resilient Slope";

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-neutral-900">
            {/* Parallax Background */}
            <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                <div 
                    className="w-full h-[120%] bg-cover bg-center grayscale-[20%]" 
                    style={{ backgroundImage: `url(${IMAGE_URL})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ opacity }}
                    className="text-center"
                >
                    {/* Minimalist Badge */}
 

                    {/* Staggered Text Reveal */}
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        {TITLE.split(" ").map((word, i) => (
                            <span key={i} className="block overflow-hidden pb-2">
                                <motion.span 
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ 
                                        delay: 0.3 + (i * 0.15), 
                                        duration: 1, 
                                        ease: [0.16, 1, 0.3, 1] 
                                    }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    {/* Minimalist Navigation/CTA */}
     
                </motion.div>
            </div>

            {/* Scroll Progress Line (Bottom Right) */}
            <div className="absolute bottom-12 right-12 hidden md:block overflow-hidden">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="w-32 h-[1px] bg-white/40 origin-left"
                />
            </div>
        </section>
    );
};

export default Banner;