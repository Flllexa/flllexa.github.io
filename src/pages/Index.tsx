import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AboutDevFlow from "@/components/AboutDevFlow";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.hash]);

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
