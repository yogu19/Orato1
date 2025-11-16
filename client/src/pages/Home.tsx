import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Programs from "@/components/Programs";
import WhyChoose from "@/components/WhyChoose";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <Programs />
      <WhyChoose />
      <Statistics />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
