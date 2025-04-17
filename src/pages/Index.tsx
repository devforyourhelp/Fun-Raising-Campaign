
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CampaignTypes from "@/components/CampaignTypes";
import RecentCampaigns from "@/components/RecentCampaigns";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <RecentCampaigns />
        <CampaignTypes />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
