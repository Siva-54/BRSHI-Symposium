import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemesSection from "@/components/ThemesSection";

const ThemesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <ThemesSection />
      </main>

      <Footer />
    </div>
  );
};

export default ThemesPage;
