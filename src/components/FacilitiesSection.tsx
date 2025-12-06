import { useScrollAnimation } from "../utils/utilities";

const FacilitiesSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  // Facility Data with Inline SVGs
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
      className="w-full bg-zinc-50 px-5 md:px-10 py-16 sm:py-24 border-y border-(--primary/20)"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div
          className={` text-start md:text-center mb-16 transition-opacity duration-1000 ${
            isVisible ? "animate-slide-in-down" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light text-(--primary) mb-4 tracking-wide">
            World-Class Amenities
          </h2>
          <p className="text-(--muted-foreground) max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Indulge in a curated selection of world-class facilities designed to
            elevate every moment of your stay. From the assurance of 24/7
            uninterrupted power and maximum security to the leisure of our
            swimming pool and fine dining restaurant, every detail is crafted to
            provide you with an experience of effortless luxury and comfort.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`
                group flex items-center gap-5 p-4 rounded-sm transition-all duration-500 hover:bg-white hover:shadow-lg border border-transparent hover:border-(--primary/10)
                ${
                  isVisible
                    ? `animate-slide-in-up delay-${(index % 3) * 200}`
                    : "opacity-0"
                }
              `}
            >
              {/* Icon Container: White background for contrast against light gray section */}
              <div
                className="
                shrink-0
                w-14 h-14 
                flex items-center justify-center 
                bg-black 
                text-(--primary) 
                border border-(--primary/20) 
                rounded-sm 
                shadow-sm 
                group-hover:scale-105 transition-transform duration-300
              "
              >
                {facility.icon}
              </div>

              {/* Label Container */}
              <div className="flex flex-col">
                <span className="text-zinc-900 font-light text-lg tracking-wide">
                  {facility.label}
                </span>
                <span className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                  Available
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
