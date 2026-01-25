import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import AccommodationSection from "@/components/AccommodationSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <ImportantDatesSection />
        <AccommodationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
