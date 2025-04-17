
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to start your fundraising journey?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Create your campaign in minutes and start raising money for what matters to you. 
          Our platform makes it simple, secure, and effective.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/start-campaign">
            <Button size="lg" variant="secondary" className="font-medium px-6">
              Start a Campaign
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button size="lg" variant="outline" className="font-medium px-6 text-white border-white hover:bg-white/20">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
