import { useScrollAnimation, type roomData } from "../utils/utilities";

//image imports
const pageHeaderImage = "deluxe2.jpg";

const Button: React.FunctionComponent<{
  children: React.ReactNode;
  url: string;
}> = ({ children, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center
        px-8 py-3.5 md:px-10 md:py-4
        bg-gradient-to-r from-primary via-primary/95 to-primary
        text-primary-foreground
        text-sm md:text-base font-medium tracking-[0.15em] uppercase
        rounded-lg
        transition-all duration-500 ease-out
        shadow-lg shadow-primary/20
        hover:shadow-xl hover:shadow-primary/30
        hover:scale-105 hover:bg-gradient-to-r hover:from-primary hover:via-primary hover:to-primary/90
        active:scale-95
        focus:outline-none focus:ring-3 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background
        overflow-hidden group"
    >
      {/* Button glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <span className="relative flex items-center gap-2">
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </span>
    </a>
  );
};

const Herro: React.FunctionComponent<{
  children: React.ReactNode;
  bgUrl?: string;
}> = ({ children, bgUrl }) => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[70vh] min-h-[600px] bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url("${bgUrl || ""}")`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-float"
            style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div
        className={`
          relative z-10 
          w-[90%] max-w-[400px] md:max-w-[1000px] min-h-[550px]
          mx-auto p-10 md:p-16
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          shadow-2xl shadow-black/30
          flex flex-col items-center justify-center text-center gap-8
          transition-all duration-1000 ease-out
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:-z-10
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }
        `}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/50 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/50 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/50 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/50 rounded-br-lg" />

        {children}
      </div>
    </div>
  );
};

const Hero: React.FunctionComponent<{
  children: React.ReactNode;
  bgUrl?: string;
}> = ({ children, bgUrl }) => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[600px] bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${
          bgUrl || ""
        }")`,
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/20 animate-gradient-shift" />

      {/* Content wrapper */}
      <div
        className={`
          relative z-10 flex flex-col items-center justify-center text-center px-4
          transition-all duration-1000 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }
        `}
      >
        {/* Glowing accent line */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-8 shadow-lg shadow-primary/30" />

        {children}

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-8 shadow-lg shadow-primary/30" />
      </div>
    </div>
  );
};

const RoomCard: React.FunctionComponent<{
  image: string;
  title: string;
  features: string[];
  message: string;
}> = ({
  image = "room-placeholder.jpg",
  title = "Executive Suite",
  features = ["King Size Bed & Jacuzzi", "Complimentary Breakfast & WiFi"],
  message,
}) => {
  const { elementRef: cardRef, isVisible: isCardVisible } =
    useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`
        group relative w-full max-w-md mx-auto bg-card rounded-2xl overflow-hidden
        transition-all duration-700 ease-out
        hover:shadow-2xl hover:shadow-primary/10
        hover:-translate-y-2
        ${
          isCardVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }
      `}
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card opacity-50" />

      {/* 1. Image Section */}
      <div className="relative w-full h-52 md:h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 w-full h-full 
            object-cover object-center 
            transition-all duration-700 ease-out 
            group-hover:scale-110 group-hover:brightness-110
          "
        />

        {/* Floating badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-medium tracking-widest uppercase rounded-full shadow-lg">
            Available
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="relative w-full p-6 md:p-8 flex flex-col gap-4 bg-gradient-to-b from-card to-background">
        {/* Title with decorative underline */}
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground tracking-tight group-hover:text-primary transition-colors duration-500">
            {title}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-16 transition-all duration-500" />
        </div>

        {/* Features list */}
        <ul className="space-y-3 mb-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-white text-sm md:text-base font-light group-hover:text-foreground/80 transition-colors duration-300"
            >
              <div className="flex items-center mt-1 mr-3">
                <div className="w-2 h-2 bg-gradient-to-br from-primary to-primary/70 rounded-full shadow-sm" />
                <div className="w-1 h-1 bg-white/80 rounded-full absolute ml-0.5" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Book Now Button */}
        <div className="mt-4 pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
          <WhatsAppEnquiry message={message} />
        </div>
      </div>
    </div>
  );
};

const RoomSection: React.FunctionComponent<{
  title: string;
  description: string;
  roomData: roomData;
  reverse?: boolean;
}> = ({ title, description, roomData, reverse = false }) => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`
        relative w-full flex flex-col items-center gap-12 md:gap-16 py-16 md:py-24 px-4 md:px-8
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
        before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent
      `}
    >
      {/* Text Content Side */}
      <div className="relative w-full md:w-1/2 flex flex-col gap-8 md:gap-10 px-4 md:px-12">
        {/* Decorative number */}
        <div className="absolute -top-4 -left-4 text-[120px] md:text-[160px] font-serif font-bold text-primary/5 -z-10">
          {reverse ? "02" : "01"}
        </div>

        <div
          className={`
          space-y-6 transition-all duration-700 delay-300
          ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }
        `}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/50" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              Luxury Stay
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-serif font-light text-foreground tracking-tight">
            {title}
            <span className="block text-2xl md:text-3xl text-primary mt-2 font-light">
              Experience
            </span>
          </h3>

          <p className="text-lg md:text-xl font-light text-white leading-relaxed tracking-wide">
            {description}
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-gradient-to-br from-primary/70 to-primary/5 rounded-xl border border-border/30">
              <div className="text-2xl font-serif text-primary">★ 4.9</div>
              <div className="text-sm text-white">Guest Rating</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-background/70 to-background/5 rounded-xl border border-border/30">
              <div className="text-2xl font-serif text-primary">24/7</div>
              <div className="text-sm text-white">Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Side */}
      <div
        className={`
        relative w-full md:w-1/2 flex justify-center
        transition-all duration-700
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-3xl -z-10" />
        <RoomCard
          image={roomData.image}
          title={roomData.title}
          features={roomData.features}
          message={roomData.message}
        />
      </div>
    </div>
  );
};

const PageHeader: React.FunctionComponent<{
  title: string;
}> = ({ title = "Page Title" }) => {
  return (
    <div
      className="relative w-full h-20 md:h-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${pageHeaderImage}")`,
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 animate-gradient-x" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-white tracking-wider uppercase animate-slide-in-right pr-8 md:pr-12">
            {title}
          </h1>

          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent blur-xl -z-10 opacity-50" />
        </div>
      </div>
    </div>
  );
};

const WhatsAppEnquiry: React.FunctionComponent<{ message: string }> = ({
  message,
}) => {
  const phone = "2348024409982";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Button url={url}>
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        </svg>
        <span>Book Now</span>
      </div>
    </Button>
  );
};

export {
  Button,
  Hero,
  RoomCard,
  Herro,
  RoomSection,
  PageHeader,
  WhatsAppEnquiry,
};
