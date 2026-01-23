import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import PrimaryBtn from "../UI/PrimaryBtn";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full  shadow-2xl ">
      <nav className="mx-auto flex  items-center justify-between px-8 p-4 ">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/public/Logo.svg"
            alt="Amicol Paints Logo"
            className="w-[140px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#E33534] text-xl font-bold">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#E33534] text-xl font-bold">About</Link></li>
          {/* <li><Link to="/services" className="hover:text-[#E33534] text-xl font-bold">Services</Link></li> */}
          <li><Link to="/products" className="hover:text-[#E33534] text-xl font-bold">Products</Link></li>
          <li><Link to="/contact" className="hover:text-[#E33534] text-xl font-bold">Contact Us</Link></li>
        </ul>

        {/* Right Side Button */}
        <div className="hidden md:block">
          <Link
            to="/contact">
              <PrimaryBtn Btntext="Request A Quote" />
            
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <LuMenu className="text-[#E33534] text-3xl" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <Link to="/" onClick={() => setIsSidebarOpen(false)}>
            <img src="/public/Logo.svg" alt="Logo" className="w-[120px]" />
          </Link>
          <button onClick={() => setIsSidebarOpen(false)}>
            <IoClose className="text-2xl" />
          </button>
        </div>

        <ul className="flex flex-col gap-3 p-6 font-medium">
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
          {/* <li><Link to="/services" onClick={() => setIsSidebarOpen(false)}>Services</Link></li> */}
          <li><Link to="/products" onClick={() => setIsSidebarOpen(false)}>Products</Link></li>
          <li><Link to="/contact" onClick={() => setIsSidebarOpen(false)}>Contact Us</Link></li>
        </ul>

        <div className="px-6">
          <Link
            to="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="inline-block rounded-full bg-[#E33534] text-white px-4 py-2.5 font-semibold hover:opacity-90"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
