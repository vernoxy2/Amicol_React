import React, { useState, useEffect, useRef } from "react";
import HeroImg1 from "../../assets/HomePageAssets/Heropage1.png";
import HeroImg2 from "../../assets/HomePageAssets/Heropage2.png";
import HeroImg3 from "../../assets/HomePageAssets/Heropage3.png";

const heroImages = [HeroImg1, HeroImg2, HeroImg3];

const SLIDE_DURATION = 3000;
const FADE_DURATION  = 1500;

const HeaderSlider = ({ HeadText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading]         = useState(false);
  const nextIndexRef = useRef(1);
  const [displayNext, setDisplayNext]   = useState(1);
  const [zoomKey, setZoomKey]           = useState(0); // re-triggers zoom on each new image

  useEffect(() => {
    let slideTimer;
    let fadeTimer;

    const startCycle = () => {
      slideTimer = setTimeout(() => {
        setIsFading(true);

        fadeTimer = setTimeout(() => {
          const next = nextIndexRef.current;
          setCurrentIndex(next);
          setZoomKey((k) => k + 1); // restart zoom animation on the new image

          const upcoming = (next + 1) % heroImages.length;
          nextIndexRef.current = upcoming;
          setDisplayNext(upcoming);

          setIsFading(false);
          startCycle();
        }, FADE_DURATION);
      }, SLIDE_DURATION);
    };

    startCycle();

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  const totalCycle = SLIDE_DURATION + FADE_DURATION;

  return (
    <section className="relative h-60 md:h-96 lg:h-[650px] w-full overflow-hidden space-y-0">

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1);    }
          to   { transform: scale(1.08); }
        }
        .zoom-img {
          animation: slowZoom ${totalCycle}ms ease-in-out forwards;
        }
      `}</style>

      {/* Bottom layer — current image with zoom */}
      <img
        key={zoomKey}
        src={heroImages[currentIndex]}
        alt="Hero Background"
        className="zoom-img absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1, transformOrigin: "center center" }}
      />

      {/* Top layer — next image fades in (no zoom yet, starts when it becomes current) */}
      <img
        src={heroImages[displayNext]}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isFading ? 1 : 0,
          transition: isFading ? `opacity ${FADE_DURATION}ms ease-in-out` : "none",
          willChange: "opacity",
          transformOrigin: "center center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-start justify-end pb-4 md:pb-8 container px-0 w-11/12">
      {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white">
  Amicol
</h1> */}
        <div className="overflow-hidden">
          <h1
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white"
        >
          {HeadText}
        </h1>
        </div>
        <hr className="w-full h-[1px] bg-white border-0 mt-2 md:mt-4" />
      </div>

    </section>
  );
};

export default HeaderSlider;