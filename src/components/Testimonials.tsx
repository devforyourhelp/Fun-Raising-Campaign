
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "Harpreet's CFP helped me raise money for my daughter's medical treatment in just two weeks. The platform was easy to use and the support team was incredible.",
    name: "Jessica T.",
    role: "Medical Campaign",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "As a small nonprofit, we struggled with fundraising until we found this platform. Now we've raised enough to expand our community programs.",
    name: "Michael R.",
    role: "Nonprofit Director",
    image: "https://i.pravatar.cc/150?img=53"
  },
  {
    quote: "After the hurricane destroyed our community center, we needed help fast. This platform made it possible to rebuild within months.",
    name: "Dana L.",
    role: "Community Organizer",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform has helped thousands of people raise funds for causes that matter. Here are some of their stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <QuoteIcon className="h-12 w-12 text-primary/20 mb-4" />
                <p className="text-gray-700 mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
