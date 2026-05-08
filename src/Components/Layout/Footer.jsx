import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/Footer.svg";
import { navbarProducts } from "../../Data/NavbarProductsData";

const socials = [
  { icon: <FaTwitter />, round: "rounded-lg", url: "https://twitter.com" },
  { icon: <FaWhatsapp />, round: "rounded-full", url: "https://wa.me/919898666007" },
  { icon: <FaFacebookF />, round: "rounded-full", url: "https://facebook.com" },
  { icon: <AiOutlineInstagram />, round: "rounded-lg", url: "https://instagram.com" },
];

const pageLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const productLinks = navbarProducts.reduce((acc, item) => {
  if (item.children) {
    return [...acc, ...item.children];
  }
  return [...acc, item];
}, []);

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
            <Link to="/">
              <img src="/Logo.svg" alt="Logo" className="w-40 mx-auto sm:mx-0" />
            </Link>
            <p className="text-[#1E1E1E]">
              Let’s connect to collaborate, create impactful projects, and build
              meaningful professional relationships together.
            </p>
            <hr className="border-primary w-20 mx-auto sm:mx-0" />
            <div className="flex justify-center sm:justify-start gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#E33534] text-white p-2 text-xl ${s.round} hover:scale-110 transition-transform`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Page Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-[#E33534] text-2xl font-extrabold mb-3">
              Page Link
            </h2>
            <div className="flex flex-col space-y-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[#1E1E1E] hover:text-primary transition-colors w-fit mx-auto sm:mx-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h2 className="text-[#E33534] text-2xl font-extrabold mb-3">
              Products
            </h2>
            <div className="flex flex-col space-y-2">
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[#1E1E1E] hover:text-primary transition-colors text-sm w-fit mx-auto sm:mx-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
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
                <a href="tel:+919898666007" className="hover:text-primary transition-colors">
                  +91-9898666007
                </a>
                <br />
                <a href="tel:02602430294" className="hover:text-primary transition-colors">
                  0260 - 2430294
                </a>
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-[#F3F1F1] p-2 text-xl rounded-full text-[#E33534]">
                <MdEmail />
              </div>
              <p className="break-all">
                <a
                  href="mailto:amitchemicalindustries@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  amitchemicalindustries@gmail.com
                </a>
              </p>
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


