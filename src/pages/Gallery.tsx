import { useScrollAnimation } from "../utils/utilities";
import { PageHeader } from "../components/UIElements";

//image imports
const main = "frontt.jpg";
const reception = "reception.jpg";
const lounge = "lounge.jpg";
const lounge1 = "lounge1.jpg";
const staircase = "staircase.jpg";
const bar = "bar.jpg";
const bar2 = "bar2.jpg";
const hallway = "hallway.jpg";
const standard2 = "standard2.jpg";
const deluxe2 = "deluxe2.jpg";
const bathroom = "bathroom.jpg";

const Gallery: React.FunctionComponent = () => {
  const { elementRef: galleryRef, isVisible } = useScrollAnimation(0.1);

  const galleryItems = [
    {
      id: 1,
      src: main,
      desc: "Main Hotel Building",
      category: "Exterior",
    },
    {
      id: 2,
      src: reception,
      desc: "Reception Area",
      category: "Lobby",
    },
    {
      id: 3,
      src: lounge,
      desc: "Executive Lounge",
      category: "Amenities",
    },
    {
      id: 4,
      src: lounge1,
      desc: "Premium Lounge View",
      category: "Amenities",
    },
    {
      id: 5,
      src: staircase,
      desc: "Grand Staircase",
      category: "Architecture",
    },
    {
      id: 6,
      src: bar,
      desc: "Bar Lounge",
      category: "Entertainment",
    },
    {
      id: 7,
      src: bar2,
      desc: "Bar & Dining Area",
      category: "Entertainment",
    },
    {
      id: 8,
      src: hallway,
      desc: "Elegant Hallway",
      category: "Interior",
    },
    {
      id: 9,
      src: standard2,
      desc: "Standard Suite",
      category: "Accommodation",
    },
    {
      id: 10,
      src: deluxe2,
      desc: "Deluxe Suite",
      category: "Accommodation",
    },
    {
      id: 11,
      src: bathroom,
      desc: "Luxury Bathroom",
      category: "Amenities",
    },
  ];

  return (
    <>
      <PageHeader title="Gallery" />
      <section
        ref={galleryRef}
        className="relative w-full bg-gradient-to-b from-background to-background/60 py-20 md:py-28 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-zinc-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`
              max-w-4xl mx-auto text-center mb-16 md:mb-24
              transition-all duration-1000
              ${
                isVisible
                  ? "animate-slide-in-down opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/50"></div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Visual Experience
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-primary to-primary/50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground tracking-tight mb-6">
              Luxury Through
              <span className="block text-primary mt-2">Our Lens</span>
            </h2>

            <p className="text-lg md:text-xl font-light text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Immerse yourself in the elegance, comfort, and unparalleled luxury
              that defines the{" "}
              <span className="font-semibold text-foreground">
                AFO Hotel & Suite
              </span>{" "}
              experience. Every corner tells a story of refined sophistication.
            </p>
          </div>

          {/* Category Filter (Optional Enhancement) */}
          <div
            className={`
            flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
          >
            {[
              "All",
              "Accommodation",
              "Amenities",
              "Entertainment",
              "Interior",
              "Exterior",
            ].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                         bg-white/50 backdrop-blur-sm border border-border/50
                         hover:bg-primary hover:text-primary-foreground hover:border-primary/30
                         hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group relative overflow-hidden rounded-2xl
                  transition-all duration-700 ease-out
                  hover:shadow-2xl hover:shadow-primary/10
                  hover:-translate-y-2
                  ${
                    isVisible
                      ? `opacity-100 scale-100 delay-${(index % 4) * 100}`
                      : "opacity-0 scale-95"
                  }
                `}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl" />

                {/* Image Container */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden">
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1.5 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground text-xs font-medium tracking-widest uppercase rounded-full shadow-lg">
                      {item.category}
                    </div>
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Main image */}
                  <img
                    src={item.src}
                    alt={item.desc}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-110"
                  />

                  {/* View more button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Container */}
                <div className="relative p-6 bg-gradient-to-b from-card to-background border-t border-border/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.desc}
                      </h3>
                      <p className="text-sm text-muted-foreground/70 font-light">
                        {item.category} • High Resolution
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs font-medium">4.8</span>
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-4 group-hover:w-12 transition-all duration-500"></div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div
            className={`
            mt-20 text-center transition-all duration-1000 delay-1000
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary to-primary/12 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-black">
                  Premium Quality Images
                </span>
              </div>
              <div className="w-px h-4 bg-primary/30"></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium text-black">
                  Professional Photography
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
