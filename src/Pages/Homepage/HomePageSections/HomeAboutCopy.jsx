import React, { useEffect, useState } from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
import ZoomInImg from "../../../assets/HomePageAssets/HomeAboutus/ZoomInImg.png"
import AboutBgIons from "../../../assets/HomePageAssets/AboutBgIons.svg";
import LazyImage from "../../../Components/UI/LazyImage";
import ZoomIn from "../../../assets/HomePageAssets/HomeAboutus/ZoomIn.svg";
import ZoomOut from "../../../assets/HomePageAssets/HomeAboutus/ZoomOut.svg"

// import Ellipse from "../../../assets/HomePageAssets/Homepagesection/Ellipse.svg";

const HomeAbout = () => {
  const [textVisible, setTextVisible] = useState(true);

  // ABOUT US text animation loop
  useEffect(() => {
    let timeout;

    const cycle = () => {
      setTextVisible(true);
      timeout = setTimeout(() => {
        setTextVisible(false);
        timeout = setTimeout(() => {
          cycle();
        }, 5000);
      }, 2000);
    };
    cycle();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="pb-0">
      <div className="container relative space-y-2 md:space-y-4">
        {/* Background Icon */}
        <LazyImage
          src={AboutBgIons}
          alt=""
          className="absolute bottom-16 left-0 pointer-events-none w-[40%] hidden lg:block"
        />

        {/* Heading Animation */}
        <div className="overflow-hidden">
          <p
            className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534] transition-all duration-700 ease-in-out"
            style={{
              transform: textVisible ? "translateY(0)" : "translateY(100%)",
              opacity: textVisible ? 1 : 0,
            }}
          >
            [ About Us ]
          </p>
        </div>

        <hr className="bg-black" />

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 items-start">
          {/* Content */}
          <div className="w-full lg:w-5/12 space-y-3 md:space-y-6 lg:pt-14">
            <h1 className="font-extrabold text-[#1E1E1E] leading-tight">
              Our Company Story
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
              <span className="font-bold">AMIT CHEMICAL INDUSTRIES</span>, an
              ISO 9001:2015 Certified Company, manufactures Industrial
              Protective Paints & Coatings, Marine Paints, and Construction
              Chemicals under the brand AMICOL.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
              Established in 1988, we deliver durable, cost-effective coating
              solutions backed by 30+ years of industry expertise and a
              commitment to long-term protection and quality.
            </p>

            {/* Experience */}
            <div className="flex flex-col sm:flex-row items-center gap-14 pt-6">
              <div className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center">
                <span
                  className="text-6xl font-extrabold leading-none text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  30+
                </span>
                <p className="text-white font-bold text-base mt-1">
                  Years expertise
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[1px] h-32 bg-[#D9D9D9]"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold leading-none">
                    1988
                  </span>
                  <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm uppercase tracking-widest mt-2">
                    Established
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-7/12 h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] relative mt-10 lg:mt-24">
            <div className="relative w-full h-full overflow-hidden">
              {/* Ellipse Animation */}
              <img
                src={Ellipse}
                alt=""
                className="absolute -top-8 -right-8 w-56 h-56 z-0 pointer-events-none animate-ellipse-pulse"
                style={{ clipPath: "inset(0 0 0 25%)" }}
              />

              {/* Image with Strong Zoom */}
              <div className="absolute inset-0 overflow-hidden z-10">
                <LazyImage
                  src={AboutHero}
                  alt="About Us"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-125 origin-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ellipse Animation */}
      <style>{`
        @keyframes ellipsePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
        .animate-ellipse-pulse {
          animation: ellipsePulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HomeAbout;


// import React, { useEffect, useState } from "react";
// import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
// import AboutBgIons from "../../../assets/HomePageAssets/AboutBgIons.svg";
// import LazyImage from "../../../Components/UI/LazyImage";
// import Ellipse from "../../../assets/HomePageAssets/Homepagesection/Ellipse.svg";

// const HomeAbout = () => {
//   const [textVisible, setTextVisible] = useState(true);

//   // ABOUT US text animation loop
//   useEffect(() => {
//     let timeout;
//     const cycle = () => {
//       setTextVisible(true);
//       timeout = setTimeout(() => {
//         setTextVisible(false);
//         timeout = setTimeout(() => {
//           cycle();
//         }, 5000);
//       }, 2000);
//     };
//     cycle();
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section className="pb-0">
//       <div className="container relative space-y-2 md:space-y-4">
//         {/* Background Icon */}
//         <LazyImage
//           src={AboutBgIons}
//           alt=""
//           className="absolute bottom-16 left-0 pointer-events-none w-[40%] hidden lg:block"
//         />

//         {/* Heading Animation */}
//         <div className="overflow-hidden">
//           <p
//             className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534] transition-all duration-700 ease-in-out"
//             style={{
//               transform: textVisible ? "translateY(0)" : "translateY(100%)",
//               opacity: textVisible ? 1 : 0,
//             }}
//           >
//             [ About Us ]
//           </p>
//         </div>

//         <hr className="bg-black" />

//         <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 items-start">
//           {/* Content */}
//           <div className="w-full lg:w-5/12 space-y-3 md:space-y-6 lg:pt-14">
//             <h1 className="font-extrabold text-[#1E1E1E] leading-tight">
//               Our Company Story
//             </h1>

//             <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
//               <span className="font-bold">AMIT CHEMICAL INDUSTRIES</span>, an
//               ISO 9001:2015 Certified Company, manufactures Industrial
//               Protective Paints & Coatings, Marine Paints, and Construction
//               Chemicals under the brand AMICOL.
//             </p>

//             <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
//               Established in 1988, we deliver durable, cost-effective coating
//               solutions backed by 30+ years of industry expertise and a
//               commitment to long-term protection and quality.
//             </p>

//             {/* Experience */}
//             <div className="flex flex-col sm:flex-row items-center gap-14 pt-6">
//               <div className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center">
//                 <span
//                   className="text-6xl font-extrabold leading-none text-transparent"
//                   style={{ WebkitTextStroke: "1px white" }}
//                 >
//                   30+
//                 </span>
//                 <p className="text-white font-bold text-base mt-1">
//                   Years expertise
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-[1px] h-32 bg-[#D9D9D9]"></div>
//                 <div className="flex flex-col">
//                   <span className="text-5xl font-extrabold leading-none">
//                     1988
//                   </span>
//                   <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm uppercase tracking-widest mt-2">
//                     Established
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Section */}
//           {/* <div className="w-full lg:w-7/12 h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] relative mt-10 lg:mt-24"> */}
//           <div className="w-full lg:w-7/12 h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] relative mt-10 lg:mt-24">
//             <div className="relative w-full h-full overflow-hidden">
//               {/* Ellipse Animation */}
//               <img
//                 src={Ellipse}
//                 alt=""
//                 className="absolute -top-8 -right-8 w-56 h-56 z-0 pointer-events-none animate-ellipse-pulse"
//                 style={{ clipPath: "inset(0 0 0 25%)" }}
//               />

//               {/* Image with Strong Zoom */}
//               <div className="absolute inset-0 overflow-hidden z-10">
//                 <LazyImage
//                   src={AboutHero}
//                   alt="About Us"
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-125 origin-bottom"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ellipse Animation */}
//       <style>{`
//         @keyframes ellipsePulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.12); }
//         }
//         .animate-ellipse-pulse {
//           animation: ellipsePulse 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HomeAbout;
