import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="bg-primary shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500"
        >
          Blog 🚀
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600"
                } hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;