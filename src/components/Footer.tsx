
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Fun Raising Campaign</h3>
            <p className="text-gray-600 text-sm">
              Making fundraising simple, secure, and impactful for causes that matter.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Fundraising</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/campaigns" className="text-gray-600 hover:text-primary transition">Browse Campaigns</Link></li>
              <li><Link to="/start-campaign" className="text-gray-600 hover:text-primary transition">Start a Campaign</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 hover:text-primary transition">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-primary transition">How It Works</Link></li>
              <li><Link to="/fees" className="text-gray-600 hover:text-primary transition">Fees</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-primary transition">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="text-gray-600 hover:text-primary transition">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Fun Raising Campaign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
