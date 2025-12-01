import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ title }) => {
    // Framer Motion variants for a subtle entrance animation
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="w-full py-8 bg-gray-50 dark:bg-gray-900">
            <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                // Using max-w-4xl for content containment and mx-auto for centering, 
                // replacing the rigid 'col-start-2 col-span-4' grid pattern.
                // We'll use a strong primary color (e.g., sky-600) for the background.
                className="max-w-4xl mx-auto rounded-lg shadow-lg bg-sky-600 dark:bg-sky-700"
            >
                <h1 
                    className='text-center text-3xl sm:text-4xl text-white p-5 font-extrabold tracking-tight'
                    // NOTE: Removed 'font-title'. If 'font-title' is defined in tailwind.config.js, 
                    // use it here. Otherwise, use a standard utility like font-extrabold.
                >
                    {title}
                </h1>
            </motion.div>
        </div>
    );
};

export default Title;