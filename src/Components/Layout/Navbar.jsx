import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose, IoChevronDown } from "react-icons/io5";
import PrimaryBtn from "../UI/PrimaryBtn";

const products = [
  {
    name: "Anti-Corrosive Paint",
    path: "/products/anti-corrosive-paint",
  },
  {
    name: "AMICOL Polyurethane Paint",
    children: [
      {
        name: "2K Polyurethane Paints",
        path: "/products/polyurethane-paint/2k",
      },
      {
        name: "2K Polyurethane HB Paints",
        path: "/products/polyurethane-paint/2k-hb",
      },
    ],
  },
  {
    name: "AMICOL Epoxy Paint",
    children: [
      {
        name: "2K Epoxy Paints",
        path: "/products/epoxy-paint/2k",
      },
      {
        name: "2K Epoxy High Build Paints",
        path: "/products/epoxy-paint/2k-high-build",
      },
    ],
  },
  {
    name: "Other Paints",
    path: "/products/other-paints",
  },
];

const activeClass = "text-[#E33534]";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="w-full shadow-2xl">
      <nav className="mx-auto flex items-center justify-between px-12 p-4">

        {/* Logo */}
        <Link to="/">
          <img src="/public/Logo.svg" alt="Logo" className="" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-xl font-bold">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : ""}>About</NavLink>

          {/* Products */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Products</span>
              <IoChevronDown className="transition-transform group-hover:rotate-180" />
            </div>

            <ul className="absolute left-0 mt-3 w-72 bg-white rounded-xl shadow-lg opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-200 z-50">
              {products.map((item) => (
                <li key={item.name} className="relative group/sub">
                  {item.children ? (
                    <>
                      <span className="flex justify-between items-center px-5 py-3 cursor-pointer hover:bg-gray-100">
                        {item.name}
                        <IoChevronDown className="-rotate-90 text-sm" />
                      </span>

                      {/* Submenu */}
                      <ul className="absolute left-full top-0 ml-1 w-72 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.path}
                            className="block px-5 py-3 hover:bg-gray-100"
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="block px-5 py-3 hover:bg-gray-100"
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </li>

          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : ""}>
            Contact Us
          </NavLink>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <PrimaryBtn Btntext="Request A Quote" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
          <LuMenu className="text-[#E33534] text-3xl" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 ${
          isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white z-50 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img src="/public/Logo.svg" className="w-[120px]" />
          <IoClose className="text-2xl cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>

        <ul className="p-6 flex flex-col gap-4 font-medium">
          <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsSidebarOpen(false)}>About</NavLink>

          {/* Mobile Products */}
          <li>
            <button
              onClick={() => setIsProductOpen(!isProductOpen)}
              className="flex justify-between w-full items-center"
            >
              Products
              <IoChevronDown className={`transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
            </button>

            {isProductOpen && (
              <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm">
                {products.map((item) => (
                  <li key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenSubMenu(openSubMenu === item.name ? null : item.name)
                          }
                          className="flex justify-between w-full items-center"
                        >
                          {item.name}
                          <IoChevronDown
                            className={`transition-transform ${
                              openSubMenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openSubMenu === item.name && (
                          <ul className="ml-4 mt-2 flex flex-col gap-2">
                            {item.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.path}
                                onClick={() => setIsSidebarOpen(false)}
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink to={item.path} onClick={() => setIsSidebarOpen(false)}>
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <NavLink to="/contact" onClick={() => setIsSidebarOpen(false)}>
            Contact Us
          </NavLink>
        </ul>

        <div className="px-6">
          <Link
            to="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="block text-center rounded-full bg-[#E33534] text-white px-4 py-2.5 font-semibold"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
