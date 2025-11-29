import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { navLinks, linkClass } from "../utils/utilities";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background text-foreground shadow-lg">
      {/* 1. Logo and Toggle Section */}
      <div className="flex flex-col bg-black justify-between items-center w-full p-1 pb-4 md:p-0 md:pb-2">
        {/* Logo Container */}
        <div className="md:justify-center py-3">
          <img
            src="logo.png"
            alt="AFO Hotel & Suite logo"
            className="h-20 sm:h-24"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3 absolute right-4 top-8 text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className="text-primary text-white" />
          ) : (
            <Menu size={24} className="text-primary text-white" />
          )}
        </button>
      </div>

      {/* 2. Navigation Lists (Desktop and Mobile) */}
      <div
        // --- ANIMATION IMPLEMENTATION ---
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"} 
          w-full bg-black md:block
          md:border-t md:border-border
          md:max-h-full md:opacity-100
        `}
      >
        <div>
          <ul className="flex flex-col md:flex-row text-center justify-center space-y-2 md:space-y-0 md:space-x-8 p-1 mx-5 mb-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.href} className={linkClass}>
                {/* Use Render Prop to access isActive for the underline logic */}
                {({ isActive }) => (
                  <>
                    {link.name}

                    <div
                      className={`
              underline absolute bottom-0 left-0 h-0.5 bg-(--primary) transition-all duration-300 ease-in-out
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
                    ></div>
                  </>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
