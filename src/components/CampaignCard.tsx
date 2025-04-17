
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface CampaignCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  raisedAmount: number;
  goalAmount: number;
  daysLeft: number;
  donorsCount: number;
}

const CampaignCard = ({
  id,
  title,
  category,
  description,
  image,
  raisedAmount,
  goalAmount,
  daysLeft,
  donorsCount,
}: CampaignCardProps) => {
  const progress = (raisedAmount / goalAmount) * 100;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition h-full flex flex-col">
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 left-4">
          {category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold">
          <Link to={`/campaigns/${id}`} className="hover:text-primary transition">
            {title}
          </Link>
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-grow">
        <p className="text-gray-600 line-clamp-2">
          {description}
        </p>
        
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">${raisedAmount.toLocaleString()}</span>
            <span className="text-gray-500">of ${goalAmount.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-gray-500">
          <span>{daysLeft} days left</span>
          <span>{donorsCount} donors</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/campaigns/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Donate Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
