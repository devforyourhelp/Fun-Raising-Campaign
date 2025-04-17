
import { Link } from "react-router-dom";
import { Heart, GraduationCap, Users, PiggyBank, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampaignTypes = () => {
  const categories = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      name: "Medical",
      description: "Fund medical treatments, equipment, and healthcare needs.",
      color: "bg-red-50",
      link: "/campaigns?category=medical"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      name: "Education",
      description: "Support scholarships, school programs, and educational initiatives.",
      color: "bg-blue-50",
      link: "/campaigns?category=education"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      name: "Community",
      description: "Help local communities with projects and essential services.",
      color: "bg-green-50",
      link: "/campaigns?category=community"
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-primary" />,
      name: "Personal",
      description: "Fundraise for personal financial needs and life events.",
      color: "bg-yellow-50",
      link: "/campaigns?category=personal"
    },
    {
      icon: <Leaf className="h-6 w-6 text-primary" />,
      name: "Environment",
      description: "Support environmental conservation and sustainability projects.",
      color: "bg-emerald-50",
      link: "/campaigns?category=environment"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      name: "Nonprofit",
      description: "Help nonprofits raise funds for their missions and programs.",
      color: "bg-purple-50",
      link: "/campaigns?category=nonprofit"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fund What Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whatever cause you care about, our platform makes it easy to raise the funds you need and make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="block group"
            >
              <div className="p-6 border border-gray-100 rounded-xl bg-white hover:shadow-lg transition h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-5`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-5">{category.description}</p>
                <div className="mt-auto">
                  <Button variant="ghost" className="text-primary group-hover:bg-primary/10 transition">
                    Browse {category.name} Campaigns →
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignTypes;
