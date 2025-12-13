import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { navLinks } from "../utils/utilities";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    <footer
      ref={footerRef}
      className={`relative bg-gradient-to-b from-background to-background/95 overflow-hidden border-t border-border/40 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30" />

      <div className="relative container mx-auto px-4 py-16 md:py-20 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Logo & Address Section */}
          <div className={`
            flex flex-col items-center lg:items-start text-center lg:text-left gap-10
            ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"}
          `}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="logo.png"
                alt="AFO HOTEL AND SUITE Logo"
                className="relative h-32 w-auto object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Address */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 text-left group">
                <div className="relative mt-1">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm" />
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
                    className="relative text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className="text-white/80 leading-relaxed text-sm lg:text-base group-hover:text-foreground transition-all duration-300">
                  <span className="font-medium text-foreground/90">Prime Location:</span><br />
                  8, Segun Olowookere Street, Ilero<br />
                  Avenue, Ilero Ijegun, Lagos State
                </p>
              </div>
              
              {/* Opening Hours */}
              <div className="p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-xl border border-border/30">
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>24/7 OPEN</span>
                </div>
                <p className="text-xs text-white">Always available for your comfort</p>
              </div>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className={`
            text-center lg:text-left
            ${isVisible ? "animate-slide-in-up delay-200" : "opacity-0 translate-y-8"}
          `}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/50"></div>
                <h3 className="text-lg font-semibold text-foreground tracking-widest uppercase">
                  Quick Links
                </h3>
                <div className="w-8 h-px bg-gradient-to-l from-primary to-primary/50"></div>
              </div>
            </div>
            
            <ul className="space-y-4 text-sm">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  className="block group relative py-2"
                >
                  {({ isActive }) => (
                    <>
                      <span className={`
                        relative z-10 text-white/80 text-sm lg:text-base
                        transition-all duration-300
                        ${isActive 
                          ? 'text-primary font-medium pl-4' 
                          : 'group-hover:text-primary group-hover:pl-4'
                        }
                      `}>
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        {link.name}
                      </span>
                      <div className={`
                        absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 to-primary/20
                        transition-all duration-500 ease-out
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `} />
                    </>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media Section */}
          <div className={`
            text-center lg:text-left
            ${isVisible ? "animate-slide-in-up delay-400" : "opacity-0 translate-y-8"}
          `}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/50"></div>
                <h3 className="text-lg font-semibold text-foreground tracking-widest uppercase">
                  Get In Touch
                </h3>
                <div className="w-8 h-px bg-gradient-to-l from-primary to-primary/50"></div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4 text-sm group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm"></div>
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
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
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="tel:+2348024409982"
                    className="text-white/80 text-sm lg:text-base hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                  >
                    +234 802 440 9982
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 text-sm group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm"></div>
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 group-hover:border-primary/30 transition-colors duration-300">
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
                        className="text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                  </div>
                  <a
                    href="mailto:afohotelandsuite@gmail.com"
                    className="text-white/80 text-sm lg:text-base hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                  >
                    afohotelandsuite@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <p className="text-sm font-medium text-foreground/80 mb-4 tracking-widest uppercase">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      name: "Instagram",
                      href: "https://www.instagram.com/afohotelandsuite/",
                      icon: (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                      ),
                    },
                    {
                      name: "TikTok",
                      href: "https://www.tiktok.com/@afo_hotel?is_from_webapp=1&sender_device=pc",
                      icon: (
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative p-3.5 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                      aria-label={social.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        className="relative text-white group-hover:text-primary transition-colors duration-300"
                      >
                        {social.icon}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`
          text-center border-t border-border/50 pt-12
          ${isVisible ? "animate-fade-in delay-700" : "opacity-0"}
        `}>
          {/* Brand Name */}
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-50" />
            <h3 className="relative text-3xl md:text-4xl font-serif font-light text-primary tracking-widest">
              AFO HOTEL & SUITE
            </h3>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <p className="text-white/70 tracking-wide">
              &copy; {new Date().getFullYear()} AFO Hotel & Suite. All Rights Reserved.
            </p>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <p className="text-white/70 tracking-wide">
              Experience Luxury Redefined
            </p>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
            <p className="text-white/70 tracking-wide">
              Designed with Excellence
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/30">
            {[
              "24/7 Security",
              "Premium Service",
              "Luxury Experience",
              "Guest Satisfaction",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 to-transparent border border-border/30"
              >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span className="text-xs font-medium text-white">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;