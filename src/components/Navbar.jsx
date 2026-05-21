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
    <nav className=" shadow-md top-0 z-50">

      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-3">

        {/* TOP ROW (logo + menu button) */}
        <div className="flex items-center justify-between w-full md:w-auto">

          <Link to="/">
            <img className="h-8" src={Logo} alt="LearnLiftApp" />
          </Link>

          <button
            className="md:hidden text-textPrimary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>

        {/* SEARCH (mobile + desktop) */}
        <div className="w-full md:flex md:justify-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary size-4" />

            <input
              type="text"
              placeholder="Search"
              className="
                w-full h-10
                pl-10 pr-4
                border border-gray-300
                rounded-md
                outline-none
                focus:border-primary
                focus:ring-2 focus:ring-primary/30
              "
            />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 font-heading text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? "text-primary" : "text-textPrimary"
                } hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 bg-surface shadow-sm font-heading text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-medium ${
                  isActive ? "text-primary" : "text-textPrimary"
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