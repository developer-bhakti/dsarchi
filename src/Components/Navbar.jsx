import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-semibold tracking-tight">
          <img src={logo} alt="Archform Logo" className="h-20 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-neutral-600 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-neutral-600 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-neutral-600 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-neutral-600 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-neutral-600 transition">
            Contact
          </Link>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-neutral-900 text-white px-6 py-2 rounded-full text-sm hover:bg-neutral-700 transition">
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-4 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">
            Home
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block">
            Projects
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block">
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
            Contact
          </Link>

          <button className="w-full bg-neutral-900 text-white px-6 py-2 rounded-full text-sm hover:bg-neutral-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}