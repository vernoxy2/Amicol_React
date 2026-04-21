import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Manfacture from "../../../assets/HomePageAssets/manufacture/Manfacture.png";
import Roller from "../../../assets/HomePageAssets/manufacture/Roller.png";
import RollerBg from "../../../assets/HomePageAssets/manufacture/RollerBg.png";

const CountUp = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMilisekonds = duration * 1000;
      let incrementTime = totalMilisekonds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>;
};

const Manufacturing = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { number: "30+", label: "Years Of Experience" },
    { number: "100", label: "Number of Products" },
    { number: "30+", label: "Total Production Capacity" },
  ];

  return (
    <section className="container overflow-hidden" ref={sectionRef}>
      <div className="mb-8 pt-16">
        <p className="uppercase text-xl font-bold text-primary">
          [ Our Manufacturing Strength ]
        </p>
        <hr className="mt-2 border-black" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
        {/* Left Side - Image (4 Columns) */}
        <div className="md:col-span-4 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={Manfacture}
            alt="Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content (8 Columns) */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-8 bg-black p-8 md:p-16 relative">
          {/* Title */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our Manufacturing Strength
            </h2>
          </div>

          {/* Stats Area with Roller Reveal */}
          <div className="relative py-10 overflow-hidden min-h-[250px] flex items-center -ml-10 md:-ml-20 w-[calc(100%+2.5rem)] md:w-[calc(100%+5rem)] pr-10 md:pr-20">
            
            <div className="relative w-full h-full flex items-center">
              {/* 1. The Revealed Background (RollerBg) - Starting further left */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={isInView ? { clipPath: "inset(0 12% 0 0)" } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-y-0 left-0 w-full z-0"
              >
                <img 
                  src={RollerBg} 
                  alt="Background" 
                  className="w-full h-full object-fill"
                />
              </motion.div>

              {/* 2. The Numbers (Revealed along with the background) */}
              <motion.div 
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={isInView ? { clipPath: "inset(0 12% 0 0)" } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="grid grid-cols-3 gap-2 md:gap-6 z-10 relative w-full px-14 md:px-28"
              >
                {stats.map((stat, index) => {
                  const words = stat.label.split(' ');
                  return (
                    <div key={index} className="flex flex-col items-center md:items-start">
                      <div className="mb-2">
                        <h3 className="text-3xl md:text-6xl font-black text-primary leading-none">
                          {isInView && <CountUp value={stat.number} />}
                        </h3>
                      </div>
                      <div className="text-primary font-bold uppercase tracking-widest text-[9px] sm:text-[10px] md:text-xs text-center md:text-left leading-tight">
                        <p>{words.slice(0, 2).join(' ')}</p>
                        <p>{words.slice(2).join(' ')}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* 3. Roller Image - Swipes across and revealing everything */}
              <motion.div
                initial={{ left: "-5%" }}
                animate={isInView ? { left: "88%" } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 bottom-0 w-40 md:w-64 z-20 flex items-center justify-center pointer-events-none"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <img 
                  src={Roller} 
                  alt="Roller" 
                  className="w-full h-full object-contain scale-[2.2] md:scale-[3.2]"
                  style={{ 
                    filter: "drop-shadow(-10px 0 15px rgba(0,0,0,0.5))",
                    transformOrigin: "center"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Our manufacturing facility is equipped with state-of-the-art technology 
              to ensure the highest quality standards in paint production. We leverage 
              decades of expertise to deliver innovative coating solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
