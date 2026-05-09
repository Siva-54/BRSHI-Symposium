import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sponsorLogo from "@/assets/sponsor-logo.png"

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sponsors
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              We gratefully acknowledge the support of our sponsoring organizations
              for making this symposium possible.
            </p>
          </div>

          {/* Sponsor Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition">

              {/* Logo Space */}
              <div className="bg-muted rounded-xl h-48 flex items-center justify-center mb-6 overflow-hidden">
                
                {/* Replace with actual logo */}
                <img
                  src= {sponsorLogo}
                  alt="ANRF Sponsor Logo"
                  className="max-h-36 object-contain"
                />
              </div>

              {/* Sponsor Title */}
              <h2 className="text-xl md:text-2xl font-semibold text-center">
                Anusandhan National Research Foundation (ANRF)
              </h2>

              <p className="text-center text-muted-foreground mt-2">
                Official Sponsor
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;