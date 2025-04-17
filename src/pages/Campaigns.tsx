
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignCard, { CampaignCardProps } from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

// Mock data for campaigns
const mockCampaigns: CampaignCardProps[] = [
  {
    id: "1",
    title: "Help Build a Community Garden",
    category: "Community",
    description: "We're creating a beautiful community garden to provide fresh produce and gathering space for our neighborhood.",
    image: "https://images.unsplash.com/photo-1621928372414-30e144d51d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    raisedAmount: 4250,
    goalAmount: 5000,
    daysLeft: 12,
    donorsCount: 58
  },
  {
    id: "2",
    title: "Medical Treatment for Sarah",
    category: "Medical",
    description: "Sarah needs urgent medical treatment for a rare condition. Your support will help cover her medical expenses.",
    image: "https://images.unsplash.com/photo-1631815585553-a8c2f4e1fb3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    raisedAmount: 15750,
    goalAmount: 20000,
    daysLeft: 5,
    donorsCount: 124
  },
  {
    id: "3",
    title: "School Supplies for Kids",
    category: "Education",
    description: "Help us provide essential school supplies to underprivileged children in our community for the upcoming school year.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    raisedAmount: 3800,
    goalAmount: 4000,
    daysLeft: 8,
    donorsCount: 42
  },
  {
    id: "4",
    title: "Local Animal Shelter Renovation",
    category: "Animals",
    description: "Our animal shelter needs urgent renovations to continue caring for abandoned pets in our community.",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    raisedAmount: 7200,
    goalAmount: 12000,
    daysLeft: 20,
    donorsCount: 86
  },
  {
    id: "5",
    title: "Clean Water for Village",
    category: "Environment",
    description: "Help us bring clean, safe drinking water to a village that currently has no access to this basic necessity.",
    image: "https://images.unsplash.com/photo-1581152302585-26761aaf5413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    raisedAmount: 9500,
    goalAmount: 15000,
    daysLeft: 15,
    donorsCount: 112
  },
  {
    id: "6",
    title: "Youth Arts Program",
    category: "Education",
    description: "Support our after-school arts program for underprivileged youth to explore creativity and develop talents.",
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    raisedAmount: 5600,
    goalAmount: 8000,
    daysLeft: 10,
    donorsCount: 73
  },
];

const categories = [
  "All Categories", 
  "Medical", 
  "Education", 
  "Community", 
  "Personal",
  "Environment",
  "Animals",
  "Nonprofit"
];

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  // Filter campaigns based on search query and category
  const filteredCampaigns = mockCampaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || campaign.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-purple-50 to-white py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Browse Campaigns</h1>
              <p className="text-gray-600 mb-8">
                Discover campaigns from around the world and help make a difference. 
                Your support can change lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Input
                  placeholder="Search campaigns..."
                  className="max-w-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">
                {filteredCampaigns.length} {filteredCampaigns.length === 1 ? 'Campaign' : 'Campaigns'} Found
              </h2>
              <Link to="/start-campaign">
                <Button>Start a Campaign</Button>
              </Link>
            </div>
            
            {filteredCampaigns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCampaigns.map(campaign => (
                  <CampaignCard key={campaign.id} {...campaign} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">No campaigns found</h3>
                <p className="text-gray-600 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                <Button onClick={() => {setSearchQuery(""); setSelectedCategory("All Categories");}}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;
