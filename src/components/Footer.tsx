import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { navLinks, linkClass } from "../utils/utilities";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When footer enters the viewport (10% visible)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run animation only once
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Applied 'animate-fade-in' conditionally based on scroll position
    <footer
      ref={footerRef}
      className={`bg-(--background) border-(--primary/20) overflow-hidden border-t ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8 lg:pt-16 ">
        {/* Top Section: Flex container for Logo, Links, Socials */}
        <div className="mx-4 md:mx-20 flex flex-col md:flex-row mb-8 gap-8 justify-between items-center md:items-start">
          {/* 1. Logo & Address Section - Slides up first */}
          <div
            className={`flex flex-col gap-9 items-center md:items-start text-center md:text-left ${
              isVisible ? "animate-slide-in-up" : "opacity-0"
            }`}
          >
            <div>
              <img
                src="logo.png"
                alt="AFO HOTEL AND SUITE Logo"
                className="h-28 object-contain"
              />
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 text-sm group text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--primary) mt-0.5 shrink-0"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-(--muted-foreground) leading-relaxed group-hover:text-(--foreground) transition-colors duration-300">
                8, Segun Olowookere Street, Ilero
                <br />
                Avenue, Ilero Ijegun, Lagos State
              </p>
            </div>
          </div>

          {/* 2. Navigation Links Section - Slides up with 200ms delay */}
          <div
            className={`text-center md:text-left w-full md:w-auto ${
              isVisible ? "animate-slide-in-up delay-200" : "opacity-0"
            }`}
          >
            <ul className="space-y-4 text-sm flex flex-col items-center md:items-start">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.href} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.name}</span>
                      {/* Animated Gold Underline */}
                      <div
                        className={`
                          absolute bottom-0 left-0 h-px bg-(--primary) transition-all duration-300 ease-in-out
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                        `}
                      ></div>
                    </>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* 3. Contact & Social Media Section - Slides up with 400ms delay */}
          <div
            className={`text-center md:text-left w-full md:w-auto ${
              isVisible ? "animate-slide-in-up delay-400" : "opacity-0"
            }`}
          >
            <p className="text-md font-serif font-medium text-(--foreground) mb-4">
              Contact Us:
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 items-center md:items-start">
                {/* Phone */}
                <div className="flex items-center gap-3 text-sm group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--primary) shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href="tel:+2348000000000"
                    className="text-(--muted-foreground) hover:text-(--primary) transition-colors duration-300"
                  >
                    +234 800 000 0000
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-sm group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--primary) shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:afohotelandsuite@gmail.com"
                    className="text-(--muted-foreground) hover:text-(--primary) transition-colors duration-300"
                  >
                    afohotelandsuite@gmail.com
                  </a>
                </div>
              </div>

              {/* --- Social Icons Section --- */}
              <div className="flex justify-center md:justify-start gap-6 mt-2">
                {/* Instagram Icon (SVG) */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-full border border-(--input) hover:border-(--primary) transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--muted-foreground) group-hover:text-(--primary) transition-colors"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* TikTok Icon (SVG) */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 rounded-full border border-(--input) hover:border-(--primary) transition-all duration-300"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--muted-foreground) group-hover:text-(--primary) transition-colors"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright - Fades in slowly at the end */}
        <div
          className={`container mx-auto px-4 text-center border-t border-(--border) pt-3 mt-8 ${
            isVisible ? "animate-fade-in delay-700" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-serif text-(--primary) tracking-widest">
            AFO HOTEL & SUITE
          </h3>

          <p className="text-xs text-(--muted-foreground) tracking-wide my-1 leading-none">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
