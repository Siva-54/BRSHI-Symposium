import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccommodationSection from "@/components/AccommodationSection";

const Accommodation = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <AccommodationSection />
            </main>
            <Footer />
        </div>
    );
};

export default Accommodation;
