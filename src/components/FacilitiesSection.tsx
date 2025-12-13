import { useScrollAnimation } from "../utils/utilities";

const FacilitiesSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  const facilities = [
    {
      label: "24/7 Power Supply",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      label: "Fine Dining Restaurant",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
        </svg>
      ),
    },
    {
      label: "Secure Parking",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <path d="M2 10h20"></path>
          <path d="M7 15h0"></path>
          <path d="M17 15h0"></path>
        </svg>
      ),
    },
    {
      label: "Maximum Security",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      label: "Exclusive Bar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 22h8" />
          <path d="M12 15v7" />
          <path d="M5.85 15a6 6 0 0 0 12.3 0L21 6H3l2.85 9Z" />
        </svg>
      ),
    },
    {
      label: "Luxury Lounge",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5" />
          <path d="M4 11h16" />
        </svg>
      ),
    },
    {
      label: "24/7 Support Service",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-background to-background/60 py-20 md:py-28 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-zinc-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div
          className={`max-w-4xl mx-auto mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible
              ? "animate-slide-in-down opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/30"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Premium Facilities
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-primary to-primary/30"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6 tracking-tight">
            World-Class
            <span className="block text-primary mt-2">
              Amenities & Services
            </span>
          </h2>

          <p className="text-white max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Indulge in a curated selection of world-class facilities designed to
            elevate every moment of your stay. From the assurance of 24/7
            uninterrupted power and maximum security to the leisure of our
            swimming pool and fine dining restaurant, every detail is crafted to
            provide you with an experience of effortless luxury and comfort.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`
                relative group flex flex-col items-center text-center gap-6 p-8 
                rounded-2xl transition-all duration-500 ease-out
                bg-black/85 backdrop-blur-sm border border-zinc-200/50
                hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5
                hover:-translate-y-2
                ${
                  isVisible
                    ? `opacity-100 translate-y-0 delay-${index * 100}`
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                <div
                  className="
                    relative z-10 w-16 h-16 
                    flex items-center justify-center 
                    bg-gradient-to-br from-background to-white
                    text-primary
                    border border-zinc-200
                    rounded-xl
                    shadow-lg shadow-primary/5
                    group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/10
                    group-hover:border-primary/30
                    transition-all duration-500
                  "
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {facility.icon}
                  </div>
                </div>

                {/* Pulsing dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-lg animate-pulse">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-black transition-colors duration-300">
                  {facility.label}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-px bg-primary/50"></div>
                  <span className="text-sm font-medium uppercase tracking-widest text-primary">
                    24/7 Available
                  </span>
                  <div className="w-4 h-px bg-primary/50"></div>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">
                All amenities maintained to highest standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
