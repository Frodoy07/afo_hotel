import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router";
import { navLinks } from "../utils/utilities";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-border/40 shadow-sm z-50">
      {/* Main container */}
      <div className="container mx-auto px-4">
        {/* Top bar with logo and toggle */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-xl"></div>
              <img
                src="logo.png"
                alt="AFO Hotel & Suite logo"
                className="relative h-16 w-auto drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg
                  ${isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-white hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {link.name}
                <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-2.5 rounded-xl bg-gradient-to-br from-background to-border/20 border border-border/30 shadow-sm hover:shadow-md transition-all duration-300 group"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
              {isOpen ? (
                <X size={20} className="relative text-primary transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={20} className="relative text-foreground/70 group-hover:text-primary transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${isOpen 
              ? "max-h-screen opacity-100 mt-2 mb-4" 
              : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg border border-border/30 rounded-2xl shadow-xl py-2">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={handleLinkClick}
                  >
                    {({ isActive }) => (
                      <div
                        className={`block mx-2 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
                        ${isActive
                          ? 'text-primary bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20'
                          : 'text-white hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="relative">
                            {link.name}
                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                          </span>
                          <ChevronDown size={16} className="text-foreground/40 -rotate-90" />
                        </div>
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
    </nav>
  );
};

export default NavBar;