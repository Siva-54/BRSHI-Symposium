import Header from "@/components/Header";
import SpeakersSection from "@/components/SpeakersSection";
import Footer from "@/components/Footer";

const Speakers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SpeakersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Speakers;
