
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CommitmentSection from "@/components/CommitmentSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <CommitmentSection />
      <WhyChooseSection />
      <GallerySection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
