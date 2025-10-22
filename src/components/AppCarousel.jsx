import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import local images
import slide1 from "../img/slide1.webp";
import slide2 from "../img/slide2.webp";
import slide3 from "../img/slide3.webp";

const slides = [
  {
    id: 1,
    image: slide1,
    title: "One App for All Your Recharges & Bill Payments",
    description:
      "Simplify your daily payments — from mobile recharges to electricity, water, and more — all in one secure platform.",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: 2,
    image: slide2,
    title: "Pay Utility Bills Easily",
    description:
      "LCR PAY lets you manage all your utility bills from one place — electricity, water, gas, broadband, and more — with ease and speed.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: 3,
    image: slide3,
    title: "Secure Wallet & Instant Rewards",
    description:
      "Experience a next-gen wallet — load funds, make secure payments, and earn instant cashback rewards with every transaction.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const AppCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 7000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50 to-blue-50 py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-200 blur-3xl opacity-30 -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200 blur-3xl opacity-30 -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <span
                className={`inline-block text-sm font-semibold px-5 py-2 rounded-full bg-gradient-to-r ${currentSlide.gradient} text-white shadow-md`}
              >
                LCR PAY • Fintech Revolution
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                {currentSlide.title}
              </h1>

              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {currentSlide.description}
              </p>

              <div className="flex justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.LcrPay.LcrPay" target="_blank"
                  className={`px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${currentSlide.gradient} shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-0.5 duration-300`}
                >
                  Get Started
                </a>
                <button className="px-8 py-3 rounded-xl font-semibold border border-gray-200 bg-white/70 backdrop-blur-md hover:shadow-lg transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.image}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-transparent opacity-20 blur-3xl rounded-3xl" />
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-[300px] h-[550px] max-w-md mx-auto  rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? `w-10 h-3 bg-gradient-to-r ${currentSlide.gradient} shadow-lg`
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AppCarousel;
