import Header from "@/components/Header";

import sponsorLogo from "@/assets/sponsor-logo.png";

import diamond1 from "@/assets/sponsors/diamond1.png";

import gold1 from "@/assets/sponsors/gold1.png";
import gold2 from "@/assets/sponsors/gold2.png";
import gold3 from "@/assets/sponsors/gold3.png";

import silver1 from "@/assets/sponsors/silver1.png";
import silver2 from "@/assets/sponsors/silver2.png";
import silver3 from "@/assets/sponsors/silver3.png";
import silver4 from "@/assets/sponsors/silver4.png";

import session1 from "@/assets/sponsors/session1.png";
import session2 from "@/assets/sponsors/session2.png";
import session3 from "@/assets/sponsors/session3.png";

const sponsorCategories = [
  // {
  //   category: "Title Sponsor",
  //   sponsors: [
  //     {
  //       name: "Anusandhan National Research Foundation (ANRF)",
  //       logo: sponsorLogo,
  //     },
  //   ],
  // },

  {
    category: "Diamond Sponsors",
    sponsors: [
      {
        name: "Anusandhan National Research Foundation (ANRF)",
        logo: sponsorLogo,
      },
      {
        name: "Dilip Buildcon Limited",
        logo: diamond1,
      },
    ],
  },

  {
    category: "Gold Sponsors",
    sponsors: [
      {
        name: "SRSC INFRA PVT LTD",
        logo: gold1,
      },
      {
        name: "ZYDEX INDUSTRIES PVT LTD",
        logo: gold2,
      },
      {
        name: "AVIJEET AGENCIES PVT LTD",
        logo: gold3,
      },
    ],
  },

  {
    category: "Silver & Other Sponsors",
    sponsors: [
      {
        name: "M/s SBB CONSTRUCTION (PVT) LTD",
        logo: silver1,
      },
      {
        name: "ACP CONSTRUCTION",
        logo: silver2,
      },
      {
        name: "CHIRAYU CONTROLS PVT LTD",
        logo: silver3,
      },
      {
        name: "RETTENMAIER INDIA PVT LTD",
        logo: silver4,
      },
    ],
  },

  {
    category: "Session Sponsors",
    sponsors: [
      {
        name: "JP ADVANCE TECHNOLOGIES PVT LTD",
        logo: session1,
      },
      {
        name: "AIMIL LTD",
        logo: session2,
      },
      {
        name: "ANTON PAAR INDIA PVT LTD",
        logo: session3,
      },
    ],
  },
];

const SponsorCard = ({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) => {
  return (
    <div
      className="
        bg-card
        border
        rounded-2xl
        p-5
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        flex
        flex-col
        items-center
      "
    >
      <div className="h-16 md:h-22 flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mt-4 text-sm md:text-base font-medium text-center">
        {name}
      </h3>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-20 pb-16 px-4">

        <div className="max-w-7xl mx-auto">

          {/* Page Heading */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sponsors
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto">
              We gratefully acknowledge the support of our sponsoring
              organizations and industry partners for making this
              symposium possible.
            </p>
          </div>

          {/* Sponsor Categories */}
          <div className="space-y-16">

            {sponsorCategories.map((section) => (
              <div key={section.category}>

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                  {section.category}
                </h2>

                <div
                  className={`
                    grid gap-6
                    ${
                      section.sponsors.length === 1
                        ? "grid-cols-1 max-w-md mx-auto"
                        : section.sponsors.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : section.sponsors.length === 3
                        ? "grid-cols-1 sm:grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                    }
                  `}
                >
                  {section.sponsors.map((sponsor, index) => (
                    <SponsorCard
                      key={index}
                      logo={sponsor.logo}
                      name={sponsor.name}
                    />
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </main>
    </div>
  );
};

export default Sponsors;