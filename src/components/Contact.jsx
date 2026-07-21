import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white relative">
      
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Visit <span className="text-teal-400">Our Store</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Drop by our showroom in Salem or book an appointment for a comprehensive eye checkup.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Next to Hotel Cenneys Gateway, Near Five Roads,<br />
                    Swarnapuri, Salem, Tamil Nadu 636004
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                  <p className="text-slate-300">Mon - Sat: 9:30 AM - 9:00 PM</p>
                  <p className="text-slate-300">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="text-slate-300">+91 99865 31949</p>
                  <p className="text-slate-300">info@radhaoptical.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-teal-400" />
              Book Appointment
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Phone Number</label>
                <input type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Your Number" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Preferred Date</label>
                <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" />
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 mt-6">
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>

        {/* Embedded Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 h-[300px] md:h-[320px] relative w-full md:max-w-3xl mx-auto"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Radha%20Optical%20Co%2C%20Alagapuram%2C%20Salem%2C%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Radha Optical Co Location Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
