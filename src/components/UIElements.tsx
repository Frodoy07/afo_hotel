const Button: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className="  px-5 py-2
              bg-(--primary) text-[#f5f5f5]
              text-sm md:text-md font-light uppercase tracking-[0.2em]
              rounded-sm 
              transition-all duration-300 
              hover:bg-[#f5f5f5] hover:text-(--primary) 
              focus:outline-none"
    >
      {children}
    </button>
  );
};

const Hero: React.FunctionComponent<{
  button?: React.ReactNode;
  backgroundUrl: string;
  heading: string;
  para?: string;
}> = ({ button, backgroundUrl, heading, para }) => {
  return (
    <div
      className="relative w-full h-[75vh] min-h-[550px] bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url("${backgroundUrl}")`,
      }}
    >
      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Heading: Slide In Down */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-lg animate-slide-in-down">
            {heading}
          </h1>

          {/* Paragraph: Slide In Up (Delayed) */}
          <p className="text-base sm:text-sm md:text-lg text-(--foreground) font-light tracking-wider drop-shadow-md animate-slide-in-up delay-200">
            {para}
          </p>

          {/* Button: Slide In Up (More Delayed) */}
          <div className="pt-4 animate-slide-in-up delay-400">{button}</div>
        </div>
      </div>
    </div>
  );
};

export { Button, Hero };
