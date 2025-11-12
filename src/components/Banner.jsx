import React, { useState, useEffect } from 'react'; // ❌🔰 নতুন: useState + useEffect add করা auto-looping এর জন্য
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion'; // ❌🔰 নতুন: Framer Motion import করা

// Banner content
const title = 'Share & Find Free Food in Your Community';
const subtitle =
  'Reduce waste. Help neighbors. Collect food near you — fast and simple.';

// ❌🔰 নতুন: multiple images array তৈরি করা
const images = [
  'https://i.ibb.co.com/nqPPZ7DC/photo-1727003826885-4512f0a8388a.jpg',
  'https://i.ibb.co.com/NgPRFMmM/photo-1676471865269-8149a23a2f4d.jpg',
  'https://i.ibb.co.com/MxZDypSY/photo-1593253814586-6a8d3df59494.jpg',
];

const Banner = () => {
  // ❌🔰 নতুন: image carousel এর জন্য state
  const [currentIndex, setCurrentIndex] = useState(0);

  // ❌🔰 নতুন: auto-looping effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // প্রতি 4 সেকেন্ডে ছবি পরিবর্তন
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full overflow-hidden h-[60vh] md:h-[72vh] lg:h-[80vh] rounded-3xl my-5">
      {/* ❌🔰 overflow-hidden দিতে হবে scaled images overflow আটকাতে */}

      {/* ❌🔰 Animated Image */}
      <AnimatePresence>
        <motion.div
          key={currentIndex} // ❌🔰 প্রতিটি ছবি আলাদা key
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0, scale: 1.1 }} // ❌🔰 fade-in + zoom effect
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }} // ❌🔰 exit animation
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay + Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }} // ❌🔰 Hero heading fade + slide-up
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }} // ❌🔰 button fade + slide-up
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link
                to="/availableFoods"
                className="btn btn-primary btn-lg text-white hover:border-accent"
              >
                View All Foods
              </Link>
            </motion.div>

            {/* Small helper / trust badges */}
            <motion.div
              className="mt-6 flex items-center gap-4 text-sm text-gray-200"
              initial={{ opacity: 0 }} // ❌🔰 badges fade-in
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <span className="badge badge-accent">Verified Donors</span>
                <span className="opacity-80">•</span>
                <span>Community driven</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave / divider */}
      <div className="-mt-1">
        <svg
          viewBox="0 0 1440 64"
          className="w-full h-16 md:h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,96 480,0 720,32 C960,64 1200,0 1440,32 L1440 64 L0 64 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </header>
  );
};

export default Banner;
