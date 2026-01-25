import Header from "@/components/Header";
import CommitteeSection from "@/components/CommitteeSection";
import Footer from "@/components/Footer";

const Committee = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CommitteeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Committee;
