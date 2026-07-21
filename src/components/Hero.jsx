import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Eye } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 md:pt-[clamp(6rem,8vw,9rem)] pb-20 md:pb-32 flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Background Image & Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <img 
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Premium optical store background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/80 to-teal-50/80"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 md:gap-24 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left pt-0"
        >

          
          <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight font-bold text-slate-900 mb-6">
            Precision Vision, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Premium Style.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Experience world-class eye care and discover our exclusive collection of premium eyewear at Salem's most trusted optical center.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full mx-auto md:mx-0 items-center sm:items-stretch">
            <Link 
              to="contact" 
              smooth={true}
              duration={500}
              className="w-fit flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-6 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            
            <a 
              href="tel:09986531949" 
              className="w-fit flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-slate-900 border border-gray-200 px-6 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md group relative overflow-hidden cursor-pointer whitespace-nowrap"
            >
              <div className="absolute inset-0 bg-teal-50/50 w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
              <Phone className="w-5 h-5 text-teal-500 z-10 animate-pulse" />
              <span className="z-10">Call Now</span>
            </a>
          </div>
          

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:flex md:justify-center md:items-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-[clamp(250px,30vw,350px)] mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Eyewear at Radha Optical Co" 
              className="w-full aspect-[4/5] object-cover rounded-xl"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
