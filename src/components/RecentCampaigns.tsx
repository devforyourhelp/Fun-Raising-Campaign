
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for recent campaigns
const recentCampaigns = [
  {
    id: "1",
    title: "Help Build a Community Garden",
    category: "Community",
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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    raisedAmount: 3800,
    goalAmount: 4000,
    daysLeft: 8,
    donorsCount: 42
  }
];

const RecentCampaigns = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Recent Campaigns</h2>
          <Link to="/campaigns">
            <Button variant="outline">View All Campaigns</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentCampaigns.map(campaign => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video relative">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4">
                  {campaign.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">
                  <Link to={`/campaigns/${campaign.id}`} className="hover:text-primary transition">
                    {campaign.title}
                  </Link>
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">${campaign.raisedAmount.toLocaleString()}</span>
                    <span className="text-gray-500">of ${campaign.goalAmount.toLocaleString()}</span>
                  </div>
                  <Progress 
                    value={(campaign.raisedAmount / campaign.goalAmount) * 100} 
                    className="h-2"
                  />
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{campaign.daysLeft} days left</span>
                  <span>{campaign.donorsCount} donors</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Link to={`/campaigns/${campaign.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Donate Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/start-campaign">
            <Button size="lg">
              Start Your Own Campaign
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentCampaigns;
