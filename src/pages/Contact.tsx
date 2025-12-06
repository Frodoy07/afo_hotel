import { PageHeader } from "../components/UIElements";
import { useScrollAnimation } from "../utils/utilities";

const Contact = () => {
  // Using the requested variable names for animation state
  const { elementRef: contactRef, isVisible: isContactVisible } =
    useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <PageHeader title={"Make Enquires"} />

      {/* Main Section - Light Mode Only (bg-zinc-50) */}
      <section className="bg-zinc-50" ref={contactRef}>
        <div className="container px-6 py-12 mx-auto">
          {/* Header Content - Animated Slide Down */}
          <div
            className={`
              text-center transition-opacity duration-700 
              ${isContactVisible ? "animate-slide-in-down" : "opacity-0"}
            `}
          >
            <p className="font-light text-(--primary) text-sm tracking-widest uppercase">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-light text-zinc-900 md:text-3xl">
              We’d love to hear from you
            </h1>

            <p className="mt-3 text-zinc-500 font-light">
              Chat to our friendly team.
            </p>
          </div>

          {/* Map/Image Placeholder - Sizes Preserved
              - 'h-64 lg:h-96': Dimensions strictly maintained.
              - Prepared for Google Maps (add 'id="map"' here later).
          */}
          <div
            id="google-map-placeholder"
            className={`
              w-full h-64 mt-10 rounded-lg lg:h-96 overflow-hidden shadow-sm
              transition-opacity duration-1000 delay-200
              ${isContactVisible ? "animate-fade-in" : "opacity-0"}
            `}
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=AFO+HOTEL+AND+SUITE+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full h-full overflow-hidden rounded-lg border border-[hsl(0,0%,27%)] bg-[hsl(0,0%,10%)] hover:border-[hsl(43,55%,53%)] transition-colors duration-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.9983864193446!2d3.253250773563342!3d6.511618193480762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8592c49961b1%3A0xe3c48d74758bbe23!2sAFO%20HOTEL%20AND%20SUITE!5e1!3m2!1sen!2sng!4v1765008329829!5m2!1sen!2sng"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300 grayscale-[0.8] invert-[0.9] contrast-[1.1] pointer-events-none"
                loading="lazy"
              ></iframe>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-[hsl(43,55%,53%)] text-black font-semibold rounded-md shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Get Directions
                </span>
              </div>

              <div className="absolute bottom-2 left-2 bg-[hsl(0,0%,10%)]/90 border border-[hsl(0,0%,27%)] px-2 py-1 rounded text-xs text-[hsl(0,0%,96%)]">
                📍 View on Map
              </div>
            </a>
          </div>

          {/* Contact Grid - Animated Slide Up */}
          <div
            className={`
              grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2
              transition-opacity duration-700 delay-400
              ${isContactVisible ? "animate-slide-in-up" : "opacity-0"}
            `}
          >
            {/* Card 1: Email */}
            <div className="p-4 rounded-lg bg-white border border-zinc-200 shadow-sm md:p-6 hover:shadow-md transition-shadow">
              <span className="inline-block p-3 text-(--primary) rounded-lg bg-(--primary)/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-light text-zinc-900">
                Chat to sales
              </h2>
              <p className="mt-2 text-sm text-zinc-500 font-light">
                Speak to our friendly team.
              </p>
              <p className="mt-2 text-sm text-(--primary) font-light">
                afohotelandsuite@gmail.com
              </p>
            </div>

            {/* Card 2: Address */}
            <div className="p-4 rounded-lg bg-white border border-zinc-200 shadow-sm md:p-6 hover:shadow-md transition-shadow">
              <span className="inline-block p-3 text-(--primary) rounded-lg bg-(--primary)/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-light text-zinc-900">
                Visit us
              </h2>
              <p className="mt-2 text-sm text-zinc-500 font-light">
                Visit our office HQ.
              </p>
              <p className="mt-2 text-sm text-(--primary) font-light">
                8, Segun Olowookere Street, Ilero Avenue, Ilero Ijegun, Lagos
                State
              </p>
            </div>

            {/* Card 3: Phone */}
            <div className="p-4 rounded-lg bg-white border border-zinc-200 shadow-sm md:p-6 hover:shadow-md transition-shadow">
              <span className="inline-block p-3 text-(--primary) rounded-lg bg-(--primary)/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-base font-light text-zinc-900">
                Call us
              </h2>
              <p className="mt-2 text-sm text-zinc-500 font-light">
                8am to 9pm Everyday.
              </p>
              <p className="mt-2 text-sm text-(--primary) font-light">
                +234 802 440 9982
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
