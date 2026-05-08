import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose, IoChevronDown } from "react-icons/io5";
import PrimaryBtn from "../UI/PrimaryBtn";
import { navbarProducts as products } from "../../Data/NavbarProductsData";

const activeClass = "text-primary";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsProductOpen(false);
    setOpenSubMenu(null);
  };

  return (
    <header className="w-full shadow-2xl  top-0 bg-white z-50">
      <nav className="mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/Logo.svg" alt="AMICOL Logo" className="w-32 sm:w-30" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-lg xl:text-xl font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClass : "hover:text-primary transition-colors")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : "hover:text-[#E33534] transition-colors")}
            >
              About
            </NavLink>
          </li>

          {/* Products Dropdown */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#E33534] transition-colors">
              <span>Products</span>
              <IoChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
            </div>

            {/* Main Dropdown */}
            <ul className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 z-50 border border-gray-100">
              {products.map((item, index) => (
                <li
                  key={item.name}
                  className={`relative group/sub ${
                    index !== products.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {item.children ? (
                    <>
                      <div className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
                        <span>{item.name}</span>
                        <IoChevronDown className="-rotate-90 text-sm transition-transform" />
                      </div>

                      {/* Submenu */}
                      <ul className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 border border-gray-100">
                        {item.children.map((child, childIndex) => (
                          <li key={child.name}>
                            <NavLink
                              to={child.path}
                              className={`block px-5 py-3 hover:bg-gray-50 transition-colors ${
                                childIndex !== item.children.length - 1
                                  ? "border-b border-gray-100"
                                  : ""
                              }`}
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="block px-5 py-3 hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : "hover:text-[#E33534] transition-colors")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <PrimaryBtn Btntext="Request A Quote" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <LuMenu className="text-primary text-3xl" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-80 sm:w-96 h-full bg-white z-50 transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white">
          <Link to="/" onClick={closeSidebar}>
            <img src="/Logo.svg" alt="AMICOL Logo" className="w-28" />
          </Link>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-6">
          <ul className="flex flex-col gap-1 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-red-50 text-[#E33534]" : "hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-red-50 text-[#E33534]" : "hover:bg-gray-50"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            {/* Mobile Products */}
            <li>
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="flex justify-between w-full items-center px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Products</span>
                <IoChevronDown
                  className={`transition-transform duration-200 ${
                    isProductOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Products Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isProductOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 flex flex-col gap-1 text-sm">
                  {products.map((item) => (
                    <li key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() =>
                              setOpenSubMenu(openSubMenu === item.name ? null : item.name)
                            }
                            className="flex justify-between w-full items-center px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <span>{item.name}</span>
                            <IoChevronDown
                              className={`text-xs transition-transform duration-200 ${
                                openSubMenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Nested Submenu */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              openSubMenu === item.name
                                ? "max-h-[200px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <ul className="ml-4 mt-1 flex flex-col gap-1">
                              {item.children.map((child) => (
                                <li key={child.name}>
                                  <NavLink
                                    to={child.path}
                                    onClick={closeSidebar}
                                    className="block px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                                  >
                                    {child.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <NavLink
                          to={item.path}
                          onClick={closeSidebar}
                          className="block px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-red-50 text-[#E33534]" : "hover:bg-gray-50"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Mobile CTA Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              onClick={closeSidebar}
              className="block text-center rounded-full bg-[#E33534] text-white px-6 py-3 font-semibold hover:bg-[#d12f2e] active:scale-95 transition-all shadow-lg"
            >
              Request A Quote
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;