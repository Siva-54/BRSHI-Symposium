import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ThemesSection from "@/components/ThemesSection";
import ImportantDatesSection from "@/components/ImportantDatesSection";
import RegistrationSection from "@/components/RegistrationSection";
import AbstractSection from "@/components/AbstractSection";
import SpeakersSection from "@/components/SpeakersSection";
import CommitteeSection from "@/components/CommitteeSection";
import AccommodationSection from "@/components/AccommodationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <ImportantDatesSection />
        <RegistrationSection />
        <AbstractSection />
        <SpeakersSection />
        <CommitteeSection />
        <AccommodationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
