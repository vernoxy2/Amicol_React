import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const socials = [
  { icon: <FaTwitter />, round: "rounded-lg" },
  { icon: <FaWhatsapp />, round: "rounded-full" },
  { icon: <FaFacebookF />, round: "rounded-full" },
  { icon: <AiOutlineInstagram />, round: "rounded-lg" },
];

const pageLinks = ["Home", "About", "Services", "Products", "Contact"];

const Footer = () => {
  return (
    <div className="bg-textcolor pb-20  relative">
      {/* Background Logo */}
      <img
        src="/src/assets/Footer.svg"
        alt="Footer Logo"
        className="absolute bottom-0 right-0 w-[500px] max-w-full"
      />

      <div className="py-10 md:py-20 bg-white rounded-3xl shadow-lg relative z-10 container">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap gap-y-6">

            {/* Logo */}
            <div className="md:w-3/12 space-y-3 pr-5 md:pr-14">
              <img
                src="/Logo.svg"
                alt="Logo"
                className="w-[200px]"
              />
              <p className="text-[#1E1E1E] pl-3">
                Let’s connect to collaborate, create impactful projects, and
                build meaningful professional relationships together.
              </p>
              <hr className=" border-primary ms-3" />
              <div className="ps-3 flex gap-4">
                {socials.map((s, i) => (
                  <div
                    key={i}
                    className={`bg-[#E33534] text-white p-1 text-xl ${s.round}`}
                  >
                    {s.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Page Links */}
            <div className="md:w-3/12 pl-3 flex flex-col gap-1">
              <h2 className="text-[#E33534] text-2xl font-extrabold">
                Page Link
              </h2>
              {pageLinks.map((link) => (
                <p key={link} className="text-[#1E1E1E]">
                  {link}
                </p>
              ))}
            </div>

            {/* Services Links */}
            <div className="md:w-3/12 pl-3 flex flex-col gap-1">
              <h2 className="text-[#E33534] text-2xl font-extrabold">
                Services
              </h2>
              {pageLinks.map((link) => (
                <p key={link} className="text-[#1E1E1E]">
                  {link}
                </p>
              ))}
            </div>

            {/* Contact */}
            <div className="md:w-3/12 pl-3 flex flex-col gap-4">
              <h2 className="text-[#E33534] text-2xl font-extrabold">
                Contact
              </h2>

              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-[#F3F1F1] p-2 text-2xl rounded-full text-[#E33534]">
                  <PiMapPinAreaFill />
                </div>
                <p>
                  Plot No.1101/1/B, Third Phase, G.I.D.C., Vapi-396195,
                  Dist. Valsad, Gujarat.
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="bg-[#F3F1F1] p-2 text-2xl rounded-full text-[#E33534]">
                  <BiSolidPhoneCall />
                </div>
                <p>
                  +91-9898666007 <br />
                  0260 - 2430294
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-[#F3F1F1] p-2 text-2xl rounded-full text-[#E33534]">
                  <MdEmail />
                </div>
                <p className="break-all">
                  Mamitchemicalindustries@gmail.com
                </p>
              </div>
            </div>
          </div>

          <hr className="border-black mt-10 md:mt-20" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
