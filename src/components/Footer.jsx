import React from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
              <Eye className="h-5 w-5 text-teal-400" />
            </div>
            <span className="font-bold text-lg text-white">Radha Optical Co</span>
          </div>
          <p className="text-sm max-w-sm mb-6">
            Providing premium eye care and exclusive eyewear collections to the residents of Salem for years. Your vision is our priority.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm hover:text-teal-400 transition-colors">Facebook</a>
            <a href="#" className="text-sm hover:text-teal-400 transition-colors">Instagram</a>
            <a href="#" className="text-sm hover:text-teal-400 transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="hero" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">Home</Link></li>
            <li><Link to="services" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">Services</Link></li>
            <li><Link to="showcase" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">Collections</Link></li>
            <li><Link to="reviews" smooth={true} duration={500} className="hover:text-teal-400 cursor-pointer">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-teal-400">Return Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Radha Optical Co. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for perfect vision.</p>
      </div>
    </footer>
  );
};

export default Footer;
