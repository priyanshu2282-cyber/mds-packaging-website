import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/logo/logo-transparent.png";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="MDS Packaging"
            className="h-8 md:h-12 w-auto"
          />

          <span className="hidden sm:block text-white font-semibold text-lg">
          MDS Packaging
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <a
          href="#about"
          className="hover:text-green-400 transition duration-300">About</a>
          <a href="#products" className="hover:text-green-400 transition duration-300">Products</a>
          <a href="#industries" className="hover:text-green-400 transition duration-300">Industries</a>
          <a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden text-white">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
          />
        </div>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col p-6 gap-5 text-white">

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="#products" onClick={() => setOpen(false)}>
              Products
            </a>

            <a href="#industries" onClick={() => setOpen(false)}>
              Industries
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;