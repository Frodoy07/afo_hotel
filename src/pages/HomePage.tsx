import FacilitiesSection from "../components/FacilitiesSection";
import { Hero, Herro } from "../components/UIElements";
import { useScrollAnimation } from "../utils/utilities";

// image urls
const heroBackground = import.meta.env.BASE_URL + "frontt.jpg";
const abRoom = import.meta.env.BASE_URL + "about_room.jpg";
const lounge = import.meta.env.BASE_URL + "lounge.jpg";

const HomePage = () => {
  const { elementRef: aboutRef, isVisible: isAboutVisible } =
    useScrollAnimation();
  const { elementRef: ctaRef, isVisible: isCtaVisible } = useScrollAnimation();

  return (
    <>
      <Herro
        children={
          <>
            <h1 className="text-4xl mb-6 md:text-6xl font-serif font-bold text-white tracking-widest transition-opacity duration-700 animate-slide-in-down">
              WELCOME TO AFO HOTEL & SUITE
            </h1>

            <p className="text-md text-white font-light transition-opacity duration-700 animate-slide-in-up delay-200">
              Experience comfort at AFO Hotel & Suite. The top-rated
              accommodation in Ijegun, Alimosho offering affordable luxury and
              24/7 power.
            </p>
          </>
        }
        bgUrl={heroBackground}
      />

      {/* About section */}
      <section
        ref={aboutRef}
        className="bg-zinc-50 py-16 lg:py-20 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 px-5 md:px-10 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`flex flex-col justify-center text-left transition-opacity duration-1000 ${
                isAboutVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-light text-zinc-900 mb-4 tracking-wide">
                REDEFINING LUXURY <br />
                <span className="text-(--primary)">IN THE HEART OF LAGOS</span>
              </h2>

              <div className="space-y-4 text-(--muted-foreground) text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Welcome to{" "}
                  <strong className="text-zinc-900">AFO Hotel & Suite</strong>,
                  where timeless elegance meets contemporary comfort. Nestled in
                  the serene Ilero Avenue, our establishment is designed to be
                  your sanctuary away from the bustle of the city.
                </p>
                <p>
                  We believe that true hospitality lies in the details. From our
                  meticulously appointed rooms to our world-class amenities,
                  every aspect of your stay is curated to provide an experience
                  of unmatched sophistication. Whether you are visiting for
                  business or leisure, discover a level of service that makes
                  every moment unforgettable.
                </p>
              </div>
            </div>

            {/* Right Column: Image Section - Fades in with delay when visible */}
            <div
              className={`relative h-[250px] md:h-[350px] w-full rounded-sm overflow-hidden  shadow-lg group transition-opacity duration-1000 ${
                isAboutVisible ? "animate-fade-in delay-200" : "opacity-0"
              }`}
            >
              {/* Image Placeholder - Replace 'interior.jpg' with your actual image */}
              <img
                src={abRoom}
                alt="AFO Hotel Luxury Interior"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay: Subtle tint for image depth */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <FacilitiesSection />

      {/* Events */}
      <Hero bgUrl={lounge}>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-light text-(--primary) tracking-widest uppercase mb-7">
          WE HOST PARTIES AND EVENTS
        </h1>

        <p className="text-xs sm:text-sm md:text-lg font-light px-4 md:px-0 text-white/80 tracking-wide max-w-lg leading-relaxed">
          Lagos's premier destination for exclusive events. Exceptional spaces,
          exquisite catering, and a team dedicated to making your occasion
          flawless. From high-profile corporate galas to intimate private
          celebrations, our versatile venues offer a sophisticated backdrop
          tailored to your unique vision. Experience the pinnacle of hospitality
          where state-of-the-art facilities meet timeless elegance, ensuring
          every moment of your event is nothing short of extraordinary.
        </p>
      </Hero>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="w-full bg-zinc-50 border-y border-(--primary/20) py-16 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-serif font-light text-zinc-900 tracking-wide transition-opacity duration-700 ${
                isCtaVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              Get a room already.
            </h2>

            <div
              className={`transition-opacity duration-700 ${
                isCtaVisible ? "animate-slide-in-right delay-200" : "opacity-0"
              }`}
            >
              <a
                href="https://wa.me/2348024409982?text=I%20want%20to%20make%20enquiries%20about%20availability%20and%20pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="
              inline-block
              px-10 py-4 
              bg-(--primary) text-(--primary-foreground) 
              text-sm md:text-base font-semibold uppercase tracking-[0.2em]
              rounded-sm 
              transition-all duration-300 
              hover:bg-zinc-900 hover:text-(--primary) 
              focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-white
              shadow-lg
              cursor-pointer
            "
              >
                <span>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
