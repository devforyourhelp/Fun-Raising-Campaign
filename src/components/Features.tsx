
import { CreditCard, Shield, TrendingUp, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Secure Payments",
      description: "Multiple payment methods with industry-leading security and fraud protection."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "100% Transparency",
      description: "Track every donation with real-time dashboards and detailed reporting."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Maximize Impact",
      description: "Built-in tools to promote your campaign and reach more donors."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Quick Setup",
      description: "Create your campaign in minutes and start receiving donations immediately."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Harpreet's CFP?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need for successful fundraising, from secure payments to powerful campaign tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition bg-white"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
