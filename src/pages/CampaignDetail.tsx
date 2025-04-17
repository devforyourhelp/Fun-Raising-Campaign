
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, Heart, Share2Icon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock campaign data
const mockCampaign = {
  id: "1",
  title: "Help Build a Community Garden",
  category: "Community",
  description: "We're creating a beautiful community garden to provide fresh produce and gathering space for our neighborhood. This project will transform an empty lot into a vibrant green space with vegetable beds, fruit trees, and a gathering area.\n\nThe garden will serve as both a source of fresh food and an educational space where children and adults can learn about sustainable gardening practices. We plan to host workshops on composting, organic gardening, and seasonal planting.\n\nYour support will help us purchase soil, seeds, tools, irrigation equipment, and building materials for raised beds and a small pavilion for community gatherings.",
  image: "https://images.unsplash.com/photo-1621928372414-30e144d51d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  ],
  raisedAmount: 4250,
  goalAmount: 5000,
  daysLeft: 12,
  donorsCount: 58,
  createdAt: "2023-08-15T10:00:00Z",
  organizer: {
    name: "Michael Johnson",
    title: "Community Organizer",
    image: "https://i.pravatar.cc/150?img=13",
    location: "Portland, OR"
  },
  updates: [
    {
      id: "u1",
      title: "Ground clearing has begun!",
      content: "We've started clearing the lot and preparing the soil for planting. Thank you to all the volunteers who came out to help!",
      date: "2 days ago"
    },
    {
      id: "u2",
      title: "Materials ordered",
      content: "Thanks to your generous donations, we've ordered the lumber for the raised beds and the first batch of soil and compost.",
      date: "1 week ago"
    }
  ],
  donors: [
    { id: "d1", name: "Sarah L.", amount: 250, message: "So excited for this project!", date: "2 days ago" },
    { id: "d2", name: "James R.", amount: 100, message: "Happy to support local community initiatives", date: "3 days ago" },
    { id: "d3", name: "Anonymous", amount: 500, message: "", date: "1 week ago" },
    { id: "d4", name: "Maria C.", amount: 75, message: "Can't wait to see the garden bloom!", date: "1 week ago" },
    { id: "d5", name: "Anonymous", amount: 50, message: "Good luck!", date: "2 weeks ago" },
  ]
};

// Mock donation amount options
const donationAmounts = [25, 50, 100, 250, 500];

const CampaignDetail = () => {
  const { id } = useParams();
  const [selectedDonationAmount, setSelectedDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  
  // In a real app, you would fetch the campaign data based on the ID
  const campaign = mockCampaign;
  
  const progress = (campaign.raisedAmount / campaign.goalAmount) * 100;
  
  const handleDonationClick = () => {
    const amount = selectedDonationAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      alert("Please select a valid donation amount");
      return;
    }
    
    // In a real app, this would redirect to the payment process
    alert(`Thank you for your donation of $${amount}!`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign details - left side */}
            <div className="col-span-2">
              <div className="rounded-xl overflow-hidden mb-8">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-auto object-cover aspect-[16/9]"
                />
              </div>
              
              <Badge className="mb-4">{campaign.category}</Badge>
              <h1 className="text-3xl font-bold mb-6">{campaign.title}</h1>
              
              <div className="flex items-center mb-8">
                <Avatar className="mr-3">
                  <AvatarImage src={campaign.organizer.image} alt={campaign.organizer.name} />
                  <AvatarFallback>{campaign.organizer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-gray-600">Organized by</p>
                  <p className="font-medium">{campaign.organizer.name}</p>
                </div>
                <div className="ml-6 pl-6 border-l border-gray-200">
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{campaign.organizer.location}</p>
                </div>
                <div className="ml-6 pl-6 border-l border-gray-200 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <p className="text-sm text-gray-600">
                    Created {new Date(campaign.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <Tabs defaultValue="story">
                <TabsList className="mb-6">
                  <TabsTrigger value="story">Story</TabsTrigger>
                  <TabsTrigger value="updates">Updates ({campaign.updates.length})</TabsTrigger>
                  <TabsTrigger value="donors">Donors ({campaign.donors.length})</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                
                <TabsContent value="story" className="space-y-6">
                  {campaign.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </TabsContent>
                
                <TabsContent value="updates">
                  <div className="space-y-8">
                    {campaign.updates.map(update => (
                      <Card key={update.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold">{update.title}</h3>
                            <p className="text-sm text-gray-500">{update.date}</p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{update.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="donors">
                  <div className="space-y-4">
                    {campaign.donors.map(donor => (
                      <Card key={donor.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <UserIcon className="h-4 w-4 mr-2 text-gray-500" />
                              <div>
                                <p className="font-medium">{donor.name}</p>
                                <p className="text-sm text-gray-500">{donor.date}</p>
                              </div>
                            </div>
                            <p className="font-semibold">${donor.amount}</p>
                          </div>
                          {donor.message && (
                            <p className="mt-2 text-gray-600 text-sm italic">
                              "{donor.message}"
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {campaign.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-auto object-cover aspect-[4/3]"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Donation section - right side */}
            <div>
              <Card className="sticky top-8">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-lg">${campaign.raisedAmount.toLocaleString()}</span>
                      <span className="text-gray-500">of ${campaign.goalAmount.toLocaleString()}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between mb-8">
                    <div className="flex items-center text-gray-600">
                      <UserIcon className="h-4 w-4 mr-1" />
                      <span>{campaign.donorsCount} donors</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{campaign.daysLeft} days left</span>
                    </div>
                  </div>
                  
                  <div className="space-y-5 mb-8">
                    <h3 className="font-semibold text-lg">Select an amount:</h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {donationAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedDonationAmount === amount ? "default" : "outline"}
                          className="text-lg font-medium"
                          onClick={() => {
                            setSelectedDonationAmount(amount);
                            setCustomAmount("");
                          }}
                        >
                          ${amount}
                        </Button>
                      ))}
                      
                      <div className="col-span-3 mt-2">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Custom amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedDonationAmount(null);
                            }}
                            className="w-full p-2 border border-gray-300 rounded-md pl-8"
                          />
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full text-lg py-6" 
                    size="lg"
                    onClick={handleDonationClick}
                  >
                    <Heart className="mr-2 h-5 w-5" /> Donate Now
                  </Button>
                  
                  <Button variant="outline" className="w-full mt-3">
                    <Share2Icon className="mr-2 h-4 w-4" /> Share Campaign
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampaignDetail;
