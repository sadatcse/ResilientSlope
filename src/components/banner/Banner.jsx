import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import banner from "../../../public/banner2.jpg"
const Banner = () => {
    // 1. Data and Constants
    const IMAGE_URL = "https://teaxo-bd.s3.ap-southeast-1.amazonaws.com/banner2.jpg";
    const TITLE = "Resilient Slope";
    const SUBTITLE = "SUSTAINABLE AND CLIMATE RESILIENT SLOPE STABILIZATION";

    // 2. Framer Motion Variants
    const bannerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 1.2, 
                ease: [0.42, 0, 0.58, 1] 
            }
        },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                delay: 0.5, 
                duration: 0.8
            } 
        },
    };

    // 3. Memoized Style Object for Background
    const bannerStyle = useMemo(() => ({
        backgroundImage: `url(${IMAGE_URL})`,
    }), [IMAGE_URL]);

    return (
        <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            // KEY CHANGE 1: Removed 'rounded-lg' and 'shadow-xl' to make it fully edge-to-edge
            className="w-full min-h-[60vh] md:min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden relative" 
            style={bannerStyle}
            aria-label="Resilient Slope banner image"
        >
            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            
            {/* Content Container */}
            {/* KEY CHANGE 2: Removed 'px-4' to allow content to fill the full width if needed */}
            <div className="relative z-20 w-full max-w-4xl"> 
                
                {/* Text Box with Background */}
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    // KEY CHANGE 3: Reduced padding and added 'w-fit mx-auto' for better central alignment on narrow content
                    // Retained some vertical padding (py-8) but used minimal horizontal padding (px-4)
                    className="py-8 px-4 w-fit mx-auto rounded-lg bg-black/40 backdrop-blur-sm text-white" 
                >
                    <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center">
                        {TITLE}
                    </h1>
                    <p className="mb-2 text-lg sm:text-2xl md:text-3xl font-medium text-center">
                        {SUBTITLE}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Banner;