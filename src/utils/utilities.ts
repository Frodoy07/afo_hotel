const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/Rooms" },
  { name: "Facilities", href: "/Facilities" },
  { name: "Contact", href: "/Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }): string => {
  const baseClasses =
    "relative group text-md font-light block py-1 px-4 transition-colors duration-300 ease-in-out";
  const hoverTextClass = "hover:text-primary";

  if (isActive) {
    // Active: Light Text
    return `${baseClasses} text-[#f5f5f5] ${hoverTextClass}`;
  } else {
    // Inactive: Muted Text
    return `${baseClasses} text-[#AAAAAA] ${hoverTextClass}`;
  }
};

export { navLinks, linkClass };
