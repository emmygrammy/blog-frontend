import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Search } from "lucide-react";
import { useState } from "react";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-surface shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link
          to="/"
        >
            <img className="h-8"  src={Logo} alt="LearnLiftApp"  />
        </Link>
           
           {/* Search */}
        <div className="flex items-center">
        <div className="relative">
            {/* icon */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary size-4" />

            {/* input */}
            <input
            className="
                w-40 h-9 pl-10 pr-4
                border border-surface
                rounded-md
                outline-none
                transition-all duration-200
                focus:border-primary
                focus:ring-2 focus:ring-primary/30
            "
            placeholder="Search"
            />
        </div>
        </div>


        {/* Desktop Menu */}
        <div className=" font-popins hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-Tertiaryary"
                    : "text-Tertiaryary"
                } hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>


        {/* Mobile Menu */}
            {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-primary"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;