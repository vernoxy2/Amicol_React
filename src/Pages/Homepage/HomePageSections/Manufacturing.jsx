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

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") ? "+" : ""}
    </span>
  );
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

      {/* GRID: mobile/tab/ipad = stacked, xl(1280px+) = side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-12 items-stretch">

        {/* Left - Image */}
        <div className="xl:col-span-4 overflow-hidden h-56 sm:h-72 md:h-96 xl:h-auto">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={Manfacture}
            alt="Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Black Content */}
        <div className="xl:col-span-8 flex flex-col justify-center space-y-6 bg-black px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 relative overflow-hidden">

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Manufacturing Strength
          </h2>

          {/* Stats Area */}
          <div className="relative overflow-hidden" style={{ minHeight: "160px" }}>

            {/* RollerBg revealed */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={RollerBg}
                alt=""
                className="w-full h-full object-fill"
              />
            </motion.div>

            {/* Numbers with Circles */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="relative z-10 grid grid-cols-3 h-full py-6 sm:py-8 md:py-10"
            >
              {stats.map((stat, index) => {
                const words = stat.label.split(" ");
                return (
                  <div key={index} className="flex flex-col items-center justify-center gap-2">
                    {/* Circle */}
                    <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                      <h3 className="text-base sm:text-2xl md:text-4xl font-black text-primary leading-none">
                        {isInView && <CountUp value={stat.number} />}
                      </h3>
                    </div>
                    {/* Label */}
                    <div className="text-primary font-bold uppercase tracking-widest text-[8px] sm:text-[10px] md:text-xs text-center leading-tight px-1">
                      <p>{words.slice(0, 2).join(" ")}</p>
                      <p>{words.slice(2).join(" ")}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Roller */}
            <motion.div
              initial={{ left: "-10%" }}
              animate={isInView ? { left: "110%" } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center"
              style={{ width: "clamp(60px, 12vw, 180px)" }}
            >
              <img
                src={Roller}
                alt="Roller"
                className="w-full h-full object-contain"
                style={{
                  transform: "scale(2)",
                  transformOrigin: "center",
                  filter: "drop-shadow(-10px 0 15px rgba(0,0,0,0.5))",
                }}
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Advanced paint production powered by modern technology, high capacity, strict quality control, and skilled workforce delivering durable, reliable solutions. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;