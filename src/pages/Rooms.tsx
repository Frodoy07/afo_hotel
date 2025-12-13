import { RoomSection, PageHeader } from "../components/UIElements";
import { type roomData } from "../utils/utilities";

const deluxe2 = "deluxe2.jpg";
const standard2 = "standard2.jpg";

const deluxeRoomData: roomData = {
  image: deluxe2,
  title: "Deluxe Room",
  features: [
    "2 People",
    "Standing fans",
    "A/C",
    "1 Bathroom",
    "Study/Dining Table",
    "Well Spacious",
  ],
  message:
    "I'd like to know the availability and pricing of the Deluxe room for the dates of _______.",
};

const standardRoomData: roomData = {
  image: standard2,
  title: "Standard Room",
  features: ["2 People", "Wall fan", "A/C", "1 Bathroom", "Well Spacious"],
  message:
    "I'd like to know the availability and pricing of the Standard room for the dates of _______.",
};

const Rooms = () => {
  return (
    <>
      <PageHeader title="Our Rooms" />
      <section className="relative w-full bg-gradient-to-b from-background to-background/60 py-20 md:py-28 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-zinc-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-primary/50"></div>
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Luxury Accommodation
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-primary to-primary/50"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground tracking-tight mb-6">
              Experience Refined
              <span className="block text-primary mt-2">
                Comfort & Elegance
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light text-white leading-relaxed max-w-3xl mx-auto">
              Discover our carefully curated selection of rooms and suites, each
              designed to provide an unparalleled experience of luxury, comfort,
              and sophistication.
            </p>
          </div>

          {/* Deluxe Room Section */}
          <RoomSection
            title="Deluxe Room"
            description="Experience elevated comfort in our Deluxe Room, a stylish retreat designed for guests seeking premium relaxation. This room features a plush king-size bed, warm lighting, and a spacious layout perfect for unwinding after a busy day. Large windows fill the space with natural light, while the modern ensuite bathroom offers soft towels and quality amenities. Ideal for couples, business travelers, or anyone looking for affordable luxury, the Deluxe Room delivers comfort, convenience, and a peaceful hotel stay that feels truly rewarding."
            roomData={deluxeRoomData}
          />

          {/* Divider */}
          <div className="relative my-3 md:my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-3 bg-(--background) border-border/30 rounded-full">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary/80 tracking-widest">
                    Both Rooms Include
                  </span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  {[
                    "Free WiFi",
                    "24/7 Room Service",
                    "Daily Cleaning",
                    "Complimentary Breakfast",
                  ].map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs font-bold text-white"
                    >
                      ✓ {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Standard Room Section */}
          <RoomSection
            title="Standard Room"
            description="Relax in our Standard Room, a clean, comfortable space crafted for travelers who want value without sacrificing quality. Enjoy a cozy bed, soft lighting, and a practical workspace that makes planning your day easy. The room includes smart storage and an ensuite bathroom with all essential amenities. Perfect for solo guests, students, or quick business trips, the Standard Room offers a calm, budget-friendly stay and the dependable comfort you expect from a well-rated hotel."
            roomData={standardRoomData}
            reverse={true}
          />

          {/* Comparison Section (Optional Enhancement) */}
          <div className="mt-20 md:mt-28">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/50"></div>
                  <h3 className="text-lg font-semibold text-foreground tracking-widest uppercase">
                    Room Comparison
                  </h3>
                  <div className="w-8 h-px bg-gradient-to-l from-primary to-primary/50"></div>
                </div>
                <p className="text-white">
                  Choose the perfect accommodation for your stay
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-2xl bg-(--background) border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">
                      Deluxe Room
                    </h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                  <div className="space-y-2">
                    {deluxeRoomData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-white"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-(--background) border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-foreground">
                      Standard Room
                    </h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Best Value
                    </span>
                  </div>
                  <div className="space-y-2">
                    {standardRoomData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-white"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-primary/80 to-primary/20 border border-primary/20 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium tracking-widest uppercase text-foreground">
                  Need Assistance?
                </span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                Let Us Help You Choose
              </h3>

              <p className="text-white max-w-xl">
                Our team is available 24/7 to help you select the perfect room
                for your needs and answer any questions about our amenities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a
                  href="tel:+2348024409982"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/2348024409982"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:shadow-lg hover:shadow-emerald/20 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
