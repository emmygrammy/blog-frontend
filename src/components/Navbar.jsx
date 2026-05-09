import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Search, Menu, X } from "lucide-react";
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
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3">
        
        {/* Top Row */}
        <div className="flex items-center justify-between w-full md:w-auto">
          
          {/* Logo */}
          <Link to="/">
            <img className="h-8" src={Logo} alt="LearnLiftApp" />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-textPrimary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="size-7" />
            ) : (
              <Menu className="size-7" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="w-full md:w-auto">
          <div className="relative">
            
            {/* Search Icon */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary size-4" />

            {/* Input */}
            <input
              type="text"
              placeholder="Search"
              className="
                w-full md:w-60 h-10
                pl-10 pr-4
                border border-gray-300
                rounded-md
                outline-none
                transition-all duration-200
                focus:border-primary
                focus:ring-2 focus:ring-primary/30
              "
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="font-popins hidden md:flex items-center space-x-6 text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-textPrimary"
                } hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-surface shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-textPrimary"
                } hover:text-primary`
              }
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