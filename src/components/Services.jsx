import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Glasses, ScanLine, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8 text-teal-500" />,
      title: "Comprehensive Eye Testing",
      description: "State-of-the-art digital eye examinations performed by our experienced optometrists to ensure your vision is perfect."
    },
    {
      icon: <Glasses className="w-8 h-8 text-blue-500" />,
      title: "Premium Frame Styling",
      description: "Personalized styling sessions to help you find the perfect frames that match your face shape and personal style."
    },
    {
      icon: <ScanLine className="w-8 h-8 text-teal-500" />,
      title: "Contact Lens Fitting",
      description: "Expert consultation and fitting for all types of contact lenses, ensuring comfort and clear vision all day."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "Eye Health Screening",
      description: "Advanced screening for common eye conditions, helping you maintain optimal eye health for years to come."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We offer comprehensive eye care solutions tailored to your unique needs, combining advanced technology with expert care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
