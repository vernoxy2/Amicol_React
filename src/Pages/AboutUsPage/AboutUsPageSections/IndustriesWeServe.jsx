import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "A reliable name delivering long-lasting protection and premium industrial paints.",
      name: "Rahul Sharma",
      role: "Business Men",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      quote: "Trusted for durable protection and superior-quality industrial coating solutions.",
      name: "Priya Shah",
      role: "Real Estate Agent",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      quote: "Outstanding quality and exceptional service. Their coatings have exceeded our expectations in every project.",
      name: "Amit Patel",
      role: "Construction Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      quote: "The best industrial paint solutions we've used. Highly recommend for any large-scale industrial application.",
      name: "Sarah Johnson",
      role: "Factory Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 1;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-200 overflow-hidden">
      {/* Background Paint Cans Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&h=900&fit=crop')`,
          filter: 'brightness(0.7)'
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-800/70"></div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-red-600 text-sm font-semibold tracking-wider uppercase mb-4">
              [ TESTIMONIALS ]
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our customers say
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 lg:-translate-x-16 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white"
              aria-label="Previous testimonials"
            >
              <FaChevronLeft size={28} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 lg:translate-x-16 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all duration-300 text-white shadow-lg"
              aria-label="Next testimonials"
            >
              <FaChevronRight size={28} />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
                >
                  {getVisibleTestimonials().map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-lg shadow-xl p-8 sm:p-10 hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <FaQuoteLeft className="w-12 h-12 text-red-600" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-8 min-h-[80px]">
                        {testimonial.quote}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md"
                          />
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-600 rounded-full border-4 border-white"></div>
                        </div>
                        <div>
                          <h4 className="text-red-600 font-bold text-lg sm:text-xl">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 text-sm sm:text-base">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-red-600' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Paint Cans Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

export default TestimonialsSlider;