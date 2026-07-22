import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Glasses, ScanLine, Sun, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-scroll';

const services = [
  {
    id: 0,
    icon: Eye,
    tag: '01',
    title: 'Prescription Lenses',
    subtitle: 'High-Quality Custom Lenses',
    description:
      'We provide precise, high-quality prescription lenses tailored to your vision needs, ensuring maximum clarity and comfort with every pair of glasses.',
    bullets: ['Single vision lenses', 'Progressive lenses', 'Blue light protection', 'Anti-reflective coating'],
    image: './images/image copy.png',
    accent: '#14b8a6',
    gradient: 'from-teal-500 to-cyan-400',
    bg: 'from-teal-50 to-cyan-50',
  },
  {
    id: 1,
    icon: Glasses,
    tag: '02',
    title: 'Premium Frame Styling',
    subtitle: 'Personalised Style Session',
    description:
      'Our frame stylists guide you through thousands of options — matching the perfect frame to your face shape, skin tone, and lifestyle for a look that is uniquely yours.',
    bullets: ['Face-shape analysis', '1000+ frame choices', 'International brands', 'Virtual try-on'],
    image: './images/image copy 2.png',
    accent: '#6366f1',
    gradient: 'from-indigo-500 to-violet-400',
    bg: 'from-indigo-50 to-violet-50',
  },
  {
    id: 2,
    icon: ScanLine,
    tag: '03',
    title: 'Contact Lens Fitting',
    subtitle: 'All-Day Comfort Guarantee',
    description:
      'Expert consultation and precise fitting for all types of contact lenses — daily, monthly, toric and multifocal — ensuring crystal-clear vision and all-day comfort.',
    bullets: ['Toric & multifocal lenses', 'Trial lenses available', 'Hygiene guidance', 'Follow-up care'],
    image: './images/image.png',
    accent: '#f59e0b',
    gradient: 'from-amber-500 to-orange-400',
    bg: 'from-amber-50 to-orange-50',
  },
  {
    id: 3,
    icon: Sun,
    tag: '04',
    title: 'Premium Sunglasses',
    subtitle: 'UV Protection & Style',
    description:
      'Explore our vast collection of designer sunglasses offering 100% UV protection, polarization, and unparalleled style for any occasion.',
    bullets: ['Polarized lenses', '100% UV Protection', 'Designer brands', 'Sports eyewear'],
    image: './images/image copy.png',
    accent: '#ec4899',
    gradient: 'from-pink-500 to-rose-400',
    bg: 'from-pink-50 to-rose-50',
  },
];

const brands = [
  { name: 'ALCON', letter: 'A' },
  { name: 'ARCADIO', letter: 'AR' },
  { name: 'BAUSCH & LOMB', letter: 'B' },
  { name: 'FRESH LOOK', letter: 'FL' },
  { name: 'JAGUAR', letter: 'J' },
  { name: 'Ray-Ban', letter: 'RB' },
  { name: 'SCOTT', letter: 'SC' },
  { name: 'Tommy Hilfiger', letter: 'TH' },
];

const ServicesNew = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">

      {/* ── Decorative blobs ── */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: current.accent }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: current.accent }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: current.accent }}
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5"
          >
            Our{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(to right, ${current.accent}, #6366f1)` }}
            >
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            We offer comprehensive eye care solutions tailored to your unique needs, combining advanced technology with expert care.
          </motion.p>
        </div>

        {/* ── Tab pills ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                style={isActive ? { background: `linear-gradient(to right, ${s.accent}, #6366f1)` } : {}}
              >
                <Icon className="w-4 h-4" />
                {s.title.split(' ').slice(0, 2).join(' ')}
              </button>
            );
          })}
        </div>

        {/* ── Main panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={`rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 bg-gradient-to-br ${current.bg}`}
          >
            {/* LEFT — content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                  style={{ background: current.accent }}
                >
                  {current.tag}
                </span>
                <span className="text-sm font-semibold text-slate-500">{current.subtitle}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                {current.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                {current.description}
              </p>

              <ul className="grid grid-cols-2 gap-3 mb-10">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: current.accent }} />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to="contact"
                smooth
                duration={500}
                className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full text-white font-bold text-sm cursor-pointer shadow-lg hover:scale-105 transition-transform"
                style={{ background: `linear-gradient(to right, ${current.accent}, #6366f1)` }}
              >
                Book Appointment <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* RIGHT — image */}
            <div className="relative h-72 md:h-auto overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              {/* Number watermark */}
              <span
                className="absolute bottom-4 right-5 text-8xl font-black opacity-20 leading-none select-none"
                style={{ color: current.accent }}
              >
                {current.tag}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Stat strip ── */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '15+', label: 'Years of Experience' },
            { value: '10K+', label: 'Happy Patients' },
            { value: '50+', label: 'Frame Brands' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-slate-50 rounded-2xl py-6 px-4 border border-slate-100"
            >
              <p
                className="text-3xl font-extrabold mb-1"
                style={{ color: current.accent }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Brand Marquee ── */}
        <div className="mt-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted Brands We Carry</p>
          <div className="relative overflow-hidden">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, white, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, white, transparent)' }} />

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 flex-shrink-0 hover:border-slate-300 hover:shadow-md transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${current.accent}, #6366f1)` }}
                  >
                    {brand.letter}
                  </div>
                  <span className="font-bold text-slate-700 text-sm whitespace-nowrap group-hover:text-slate-900">
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesNew;
