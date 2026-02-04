import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import FooterLogo from "../../assets/Footer.svg";

const socials = [
  { icon: <FaTwitter />, round: "rounded-lg" },
  { icon: <FaWhatsapp />, round: "rounded-full" },
  { icon: <FaFacebookF />, round: "rounded-full" },
  { icon: <AiOutlineInstagram />, round: "rounded-lg" },
];

const pageLinks = ["Home", "About", "Services", "Products", "Contact"];

const Footer = () => {
  return (
    <div className="bg-textcolor relative flex justify-center pb-20">
      {/* Background Logo */}
      <img
        src={FooterLogo}
        alt="Footer Logo"
        className="absolute bottom-0 right-0 w-60 sm:w-80 md:w-[450px] opacity-30"
      />

      <div
        className="bg-white rounded-3xl relative z-20 w-[92%] max-w-7xl 
  px-6 py-10 pb-6 md:px-12 md:py-16 md:pb-6 -mt-16 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4 text-center sm:text-left">
            <img src="/Logo.svg" alt="Logo" className="w-44 mx-auto sm:mx-0" />
            <p className="text-[#1E1E1E]">
              Let’s connect to collaborate, create impactful projects, and build
              meaningful professional relationships together.
            </p>
            <hr className="border-primary w-20 mx-auto sm:mx-0" />
            <div className="flex justify-center sm:justify-start gap-4">
              {socials.map((s, i) => (
                <div
                  key={i}
                  className={`bg-[#E33534] text-white p-2 text-xl ${s.round}`}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Page Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-[#E33534] text-2xl font-extrabold mb-3">
              Page Link
            </h2>
            {pageLinks.map((link) => (
              <p key={link} className="text-[#1E1E1E]">
                {link}
              </p>
            ))}
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h2 className="text-[#E33534] text-2xl font-extrabold mb-3">
              Services
            </h2>
            {pageLinks.map((link) => (
              <p key={link} className="text-[#1E1E1E]">
                {link}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-[#E33534] text-2xl font-extrabold text-center sm:text-left">
              Contact
            </h2>

            <div className="flex gap-4 items-start">
              <div className="bg-[#F3F1F1] p-2 text-xl rounded-full text-[#E33534]">
                <PiMapPinAreaFill />
              </div>
              <p>
                Plot No.1101/1/B, Third Phase, G.I.D.C., Vapi-396195, Dist.
                Valsad, Gujarat.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#F3F1F1] p-2 text-xl rounded-full text-[#E33534]">
                <BiSolidPhoneCall />
              </div>
              <p>
                +91-9898666007 <br /> 0260 - 2430294
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#F3F1F1] p-2 text-xl rounded-full text-[#E33534]">
                <MdEmail />
              </div>
              <p className="break-all">Mamitchemicalindustries@gmail.com</p>
            </div>
          </div>
        </div>

        <div>
          <hr className="border-black mt-12" />
          <p className="text-center pt-4 text-black/80  mt-auto text-sm">
            © {new Date().getFullYear()} Developed by @Vernoxy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
