import Image from "next/image";

export function PartnersSection() {
  const partners = [
    {
      name: "Partner 2",
      logo: "/images/FLC PARTNER LOGOS-2.png",
    },
    {
      name: "Partner 3",
      logo: "/images/FLC PARTNER LOGOS-3.png",
    },
    {
      name: "Partner 4",
      logo: "/images/FLC PARTNER LOGOS-4.png",
    },
    {
      name: "Partner 5",
      logo: "/images/FLC PARTNER LOGOS-5.png",
    },
    {
      name: "Partner 6",
      logo: "/images/FLC PARTNER LOGOS-6.png",
    },
    {
      name: "Partner 7",
      logo: "/images/FLC PARTNER LOGOS-7.png",
    },
    {
      name: "Partner 8",
      logo: "/images/FLC PARTNER LOGOS-8.png",
    },
    {
      name: "Partner 9",
      logo: "/images/FLC PARTNER LOGOS-9.png",
    },
    {
      name: "Partner 10",
      logo: "/images/FLC PARTNER LOGOS-10.png",
    },
    {
      name: "Partner A1",
      logo: "/images/FLC PARTNER LOGOS-A1.png",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-slate-800 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're proud to work with amazing organizations that share our
            commitment to youth development and community building through flag
            football.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={100}
                height={50}
                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
