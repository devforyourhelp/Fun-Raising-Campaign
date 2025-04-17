
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, X } from "lucide-react";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [goal, setGoal] = useState("");
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  
  const categories = [
    "Medical", 
    "Education", 
    "Community", 
    "Personal",
    "Environment",
    "Animals",
    "Nonprofit"
  ];
  
  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would submit the form data to your backend
    console.log({
      title,
      category,
      goal,
      endDate,
      description,
      coverImage,
      galleryImages
    });
    
    alert("Campaign created successfully! In a real app, this would redirect to the campaign page.");
  };
  
  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server/cloud storage
      // For now, we'll just use a local URL
      setCoverImage(URL.createObjectURL(file));
    }
  };
  
  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setGalleryImages([...galleryImages, ...newImages]);
    }
  };
  
  const removeGalleryImage = (index: number) => {
    const updatedImages = [...galleryImages];
    updatedImages.splice(index, 1);
    setGalleryImages(updatedImages);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">Create a Campaign</h1>
          <p className="text-gray-600 mb-8">
            Fill in the details below to start your fundraising campaign.
          </p>
          
          <form onSubmit={handleCreateCampaign}>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="title" className="text-base">Campaign Title</Label>
                    <Input 
                      id="title" 
                      placeholder="Give your campaign a clear, descriptive title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category" className="text-base">Category</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger id="category" className="mt-2">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="goal" className="text-base">Fundraising Goal</Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input 
                        id="goal" 
                        type="number"
                        min="1"
                        step="1"
                        placeholder="How much do you need to raise?"
                        className="pl-8"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="endDate" className="text-base">Campaign End Date</Label>
                    <div className="mt-2">
                      <DatePicker 
                        date={endDate} 
                        setDate={setEndDate} 
                        required
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Campaign Story</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="coverImage" className="text-base">Cover Image</Label>
                    <div className="mt-2">
                      {coverImage ? (
                        <div className="relative">
                          <img 
                            src={coverImage} 
                            alt="Cover preview" 
                            className="w-full h-auto rounded-lg aspect-[16/9] object-cover" 
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => setCoverImage(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                          <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-4">
                            <label htmlFor="coverImageInput" className="cursor-pointer text-primary hover:text-primary/80 font-medium">
                              Upload cover image
                              <input 
                                id="coverImageInput" 
                                type="file" 
                                accept="image/*"
                                className="sr-only"
                                onChange={handleCoverImageUpload}
                              />
                            </label>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">16:9 ratio recommended</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="gallery" className="text-base">Gallery Images (Optional)</Label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {galleryImages.map((img, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden aspect-square">
                          <img 
                            src={img} 
                            alt={`Gallery ${index + 1}`} 
                            className="w-full h-full object-cover" 
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => removeGalleryImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      
                      {galleryImages.length < 6 && (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center aspect-square">
                          <div className="text-center p-4">
                            <ImagePlus className="mx-auto h-8 w-8 text-gray-400" />
                            <label htmlFor="galleryInput" className="mt-2 cursor-pointer text-primary hover:text-primary/80 text-sm font-medium block">
                              Add Image
                              <input 
                                id="galleryInput" 
                                type="file" 
                                accept="image/*"
                                className="sr-only"
                                onChange={handleGalleryImageUpload}
                              />
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">You can upload up to 6 gallery images</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-base">Campaign Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Tell potential donors about your campaign. What are you raising money for? How will the funds be used?"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-2 min-h-[200px]"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-end">
              <Button type="submit" size="lg">
                Create Campaign
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateCampaign;
