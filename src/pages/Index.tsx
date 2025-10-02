import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AboutDevFlow from "@/components/AboutDevFlow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <AboutDevFlow />
      <Footer />
    </div>
  );
};

export default Index;
