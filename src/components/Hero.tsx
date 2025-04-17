
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Fund your cause with <span className="text-primary">community power</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 md:pr-12">
              Harpreet's CFP makes fundraising simple, secure, and effective. Create your campaign in minutes and start raising money for what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/start-campaign">
                <Button size="lg" className="font-medium px-6">
                  Start a Campaign
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button variant="outline" size="lg" className="font-medium px-6">
                  Browse Campaigns
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border border-white">
                  <span className="text-xs font-medium text-primary">JD</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border border-white">
                  <span className="text-xs font-medium text-primary">SR</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center border border-white">
                  <span className="text-xs font-medium text-primary">KL</span>
                </div>
              </div>
              <span className="ml-3 text-sm text-gray-600">
                <span className="font-medium text-primary-700">2.5K+</span> successful campaigns
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="People at fundraising event"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <p className="font-medium">$3.2M+ raised</p>
              </div>
              <p className="text-sm text-gray-500">Across all campaigns</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-24 left-4 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-12 right-8 w-64 h-64 bg-accent/20 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Hero;
