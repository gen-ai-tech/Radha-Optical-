import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Priya K.",
      role: "Local Guide",
      content: "Best optical showroom in Salem! The staff is extremely knowledgeable and helped me pick out the perfect frames. The eye testing equipment is very modern.",
      rating: 5
    },
    {
      name: "Suresh Kumar",
      role: "Regular Customer",
      content: "I have been coming to Radha Optical for years. Their customer service is unmatched, and the quality of their lenses is always top-notch.",
      rating: 5
    },
    {
      name: "Anita R.",
      role: "Verified Buyer",
      content: "Great collection of branded frames. The optometrist took their time to explain my prescription. Highly recommend for anyone needing premium eye care.",
      rating: 4.5
    }
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-slate-800">4.7 / 5.0</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Customers Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-500/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic relative z-10">"{review.content}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
