
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">Fun Raising Campaign</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/campaigns" className="text-gray-600 hover:text-primary transition">
            Browse Campaigns
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary transition">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
