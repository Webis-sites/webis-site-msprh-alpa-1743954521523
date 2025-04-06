'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="מספרה אלפא - תמונת רקע"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-primary bg-opacity-40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 md:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            מספרה מוביל בישראל
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-lg text-xl text-white md:text-2xl"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className="rounded-full bg-secondary px-8 py-4 text-lg font-bold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 md:text-xl"
            >
              קבע תור עכשיו
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;