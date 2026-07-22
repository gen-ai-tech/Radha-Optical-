import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Eye } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Collections', to: 'showcase' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Location', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-md border-b border-slate-800' : 'bg-slate-900 py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 shadow-sm">
              <Eye className="h-6 w-6 text-teal-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-white">Radha Optical Co</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-teal-300 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Book Appointment
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)} 
        style={{ zIndex: 40 }}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-[280px] bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 50 }}
      >
        <div className="flex justify-end items-center p-6 border-b border-slate-800">
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors focus:outline-none">
            <X className="h-7 w-7" />
          </button>
        </div>
        
        <div className="px-6 py-8 flex flex-col gap-6 flex-grow overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-teal-400 font-medium text-xl transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-2 pb-8">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="flex justify-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-xl font-bold w-full transition-colors shadow-lg cursor-pointer"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
