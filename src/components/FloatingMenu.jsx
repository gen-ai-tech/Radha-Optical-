import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone, MapPin, MessageCircle, X } from 'lucide-react';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', href: 'https://maps.app.goo.gl/pBZdVX5WyvS3iYHw5?g_st=awb', color: 'bg-teal-500 hover:bg-teal-600' },
    { icon: <Phone className="w-5 h-5" />, label: 'Call', href: 'tel:09986531949', color: 'bg-teal-500 hover:bg-teal-600' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', href: 'https://wa.me/919986531949', color: 'bg-teal-500 hover:bg-teal-600' },
  ];

  return (
    <div className="hidden md:flex fixed bottom-10 right-6 z-50 flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-4 items-center w-14"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-transform hover:scale-110 ${item.color}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={toggleMenu}
        className="w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 focus:outline-none"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <ArrowUp className="w-7 h-7" />}
        </motion.div>
      </button>
    </div>
  );
};

export default FloatingMenu;
