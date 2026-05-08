import React, { useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import ContactForm from "../../../Components/UI/ContactForm";
import { useLocation } from "react-router-dom";

const GetInTouch = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay ensures DOM is ready
      }
    }
  }, [location]);
  return (
    <section id="contact-form" className="container">
      {/* Heading */}
      <p data-aos="fade" data-aos-delay="100" className="uppercase text-sm sm:text-base font-bold text-[#E33534] tracking-wide">
        [ Get In Touch ]
      </p>
      <hr className="my-4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E1E1E] leading-tight">
            Reach out Anytime
          </h1>

          <p data-aos="fade-up" data-aos-delay="300" className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl">
            Let’s connect to collaborate, create impactful projects, and build
            meaningful professional relationships together.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-6 sm:space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" className="bg-[#F3F1F1] p-3 text-2xl sm:text-3xl rounded-full text-[#E33534]">
                <BiSolidPhoneCall />
              </div>
              <div className="overflow-hidden">
                <h2 data-aos="fade-right" data-aos-delay="400" className="text-lg sm:text-xl font-bold text-[#E33534]">
                  Call Us
                </h2>
                <p data-aos="fade-right" data-aos-delay="500" className="text-sm sm:text-base flex flex-wrap items-center gap-2">
                  <a href="tel:+919898666007" className="hover:text-[#E33534] transition-colors">+91-9898666007</a>
                  <span className="hidden sm:inline-block h-4 w-[2px] bg-[#E33534]" />
                  <a href="tel:02602430294" className="hover:text-[#E33534] transition-colors">0260-2430294</a>
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" className="bg-[#F3F1F1] p-3 text-2xl sm:text-3xl rounded-full text-[#E33534]">
                <PiMapPinAreaFill />
              </div>
              <div className="overflow-hidden">
                <h2 data-aos="fade-right" data-aos-delay="400" className="text-lg sm:text-xl font-bold text-[#E33534]">
                  Address
                </h2>
                <p data-aos="fade-right" data-aos-delay="500" className="text-sm sm:text-base text-gray-700">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Plot+No.1101/1/B,+Third+Phase,+G.I.D.C.,+Vapi-396195,+Dist.+Valsad,+Gujarat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#E33534] transition-colors"
                  >
                    Plot No.1101/1/B, Third Phase, G.I.D.C., Vapi-396195,
                    <br />
                    Dist. Valsad, Gujarat.
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1000" className="bg-[#F3F1F1] p-3 text-2xl sm:text-3xl rounded-full text-[#E33534]">
                <MdEmail />
              </div>
              <div className="overflow-hidden">
                <h2  data-aos="fade-right" data-aos-delay="400" className="text-lg sm:text-xl font-bold text-[#E33534]">
                  Email
                </h2>
                <p data-aos="fade-right" data-aos-delay="500" className="text-sm sm:text-base break-all">
                  <a href="mailto:amitchemicalindustries@gmail.com" className="hover:text-[#E33534] transition-colors">
                    amitchemicalindustries@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full">
          <ContactForm Btntext="Submit Now" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
