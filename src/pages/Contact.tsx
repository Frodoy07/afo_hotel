import { PageHeader } from "../components/UIElements";
import { useScrollAnimation } from "../utils/utilities";

const Contact = () => {
  const { elementRef: contactRef, isVisible: isContactVisible } =
    useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <PageHeader title={"Make Enquires"} />

      {/* Main Section */}
      <section
        className="relative bg-gradient-to-b from-background to-grad to-background/50"
        ref={contactRef}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-zinc-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container px-4 sm:px-6 lg:px-8 py-16 md:py-24 mx-auto">
          {/* Header Content */}
          <div
            className={`
              text-center max-w-3xl mx-auto mb-16
              transition-all duration-700 
              ${
                isContactVisible
                  ? "animate-slide-in-down opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/50"></div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Get In Touch
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-primary to-primary/50"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground tracking-tight">
              We're Here to
              <span className="block text-primary mt-2">Assist You</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl font-light text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Chat with our friendly team for personalized assistance with
              reservations, inquiries, or special requests. Your comfort is our
              priority.
            </p>
          </div>

          {/* Interactive Map Section */}
          <div
            className={`
              relative w-full h-72 md:h-96 mt-12 rounded-2xl overflow-hidden
              transition-all duration-1000 delay-200
              ${
                isContactVisible
                  ? "animate-fade-in opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }
            `}
          >
            {/* Map container with enhanced styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10" />

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=AFO+HOTEL+AND+SUITE+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full h-full overflow-hidden rounded-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Map overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

              {/* Interactive hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.9983864193446!2d3.253250773563342!3d6.511618193480762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8592c49961b1%3A0xe3c48d74758bbe23!2sAFO%20HOTEL%20AND%20SUITE!5e1!3m2!1sen!2sng!4v1765008329829!5m2!1sen!2sng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                title="AFO Hotel & Suite Location"
              ></iframe>

              {/* Hover action button */}
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div
                  className="
                  px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground 
                  font-semibold rounded-lg shadow-2xl shadow-primary/30 
                  transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                  transition-all duration-500 flex items-center gap-2
                "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 7m0 13V7m0 0L9 7"
                    />
                  </svg>
                  Get Directions
                </div>
              </div>

              {/* Location badge */}
              <div className="absolute bottom-4 left-4 z-30">
                <div className="flex items-center gap-2 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border/50">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">
                    📍 Our Location
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Grid */}
          <div
            className={`
              grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20
              transition-all duration-700 delay-400
              ${
                isContactVisible
                  ? "animate-slide-in-up opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {/* Card 1: Email */}
            <div className="group relative p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-lg"></div>
                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Chat to sales
              </h2>
              <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                Speak to our friendly team for personalized assistance with
                bookings and inquiries.
              </p>
              <a
                href="mailto:afohotelandsuite@gmail.com"
                className="inline-flex items-center gap-2 text-primary font-medium group/link hover:text-primary/80 transition-colors duration-300"
              >
                <span>afohotelandsuite@gmail.com</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            {/* Card 2: Address */}
            <div className="group relative p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-lg"></div>
                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 text-primary"
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
                </div>
              </div>

              <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Visit us
              </h2>
              <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                Experience luxury firsthand at our prime location in Lagos.
              </p>
              <div className="text-primary font-medium">
                <p className="leading-relaxed">
                  8, Segun Olowookere Street, Ilero Avenue, Ilero Ijegun, Lagos
                  State
                </p>
              </div>
            </div>

            {/* Card 3: Phone */}
            <div className="group relative p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-lg"></div>
                <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/30 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Call us
              </h2>
              <p className="text-muted-foreground/80 mb-6 leading-relaxed">
                Available 24/7 for immediate assistance and reservations.
              </p>
              <a
                href="tel:+2348024409982"
                className="inline-flex items-center gap-2 text-primary font-medium group/link hover:text-primary/80 transition-colors duration-300"
              >
                <span>+234 802 440 9982</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div
            className={`mt-20 text-center transition-all duration-1000 delay-700 ${
              isContactVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white">
                We typically respond within 1-2 hours
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
