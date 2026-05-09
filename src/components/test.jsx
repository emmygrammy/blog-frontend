import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-primary text-white mt-20 font-popins">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="text-left px-1">
            <h2 className="text-2xl font-heading font-bold">
              LearnLiftApp
            </h2>
            <p className="text-white/80 mt-2 text-sm">
              A modern blog platform built for learning and sharing ideas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-white/80">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>

          {/* Downloading our app */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Download Our App</h3>
            <p className="text-white/80">
              Get the latest updates and features by downloading our app.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} LearnLiftApp. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;