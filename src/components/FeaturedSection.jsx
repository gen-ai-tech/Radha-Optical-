import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

/* ─── Frame Shapes ─── */
const frameShapes = [
  {
    label: 'Rectangle',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
  {
    label: 'Cat Eye',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
  {
    label: 'Aviator',
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=300',
    objectFit: 'cover',
  },
  {
    label: 'Round',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
  {
    label: 'Wayfarer',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
  {
    label: 'Geometric',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
  {
    label: 'Rimless',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Randlose_Bildschirmarbeitsplatzbrille.jpg/500px-Randlose_Bildschirmarbeitsplatzbrille.jpg',
    objectFit: 'contain',
  },
  {
    label: 'Oversized',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=300&q=80',
    objectFit: 'cover',
  },
];

/* ─── Trending Looks ─── */
const trendingLooks = [
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85',
    label: 'Bold & Chic',
    tag: 'Cat Eye',
    color: 'from-pink-600 to-rose-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=85',
    label: 'Classic Look',
    tag: 'Rectangle',
    color: 'from-teal-600 to-cyan-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=85',
    label: 'Street Style',
    tag: 'Oversized',
    color: 'from-violet-600 to-purple-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=85',
    label: 'Minimalist',
    tag: 'Rimless',
    color: 'from-amber-600 to-orange-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=85',
    label: 'Power Look',
    tag: 'Aviator',
    color: 'from-blue-600 to-indigo-500',
  },
  {
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=85',
    label: 'Sun Ready',
    tag: 'Wayfarer',
    color: 'from-slate-600 to-gray-500',
  },
];

/* ─── Brand Strip ─── */
const brands = [
  { name: 'Ray-Ban', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ray-Ban_logo.svg/320px-Ray-Ban_logo.svg.png' },
  { name: 'Oakley', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Oakley_logo.svg/320px-Oakley_logo.svg.png' },
  { name: 'Vogue', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vogue_logo.svg/320px-Vogue_logo.svg.png' },
  { name: 'Titan', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Titan_company_logo.svg/320px-Titan_company_logo.svg.png' },
  { name: 'Polaroid', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Polaroid_Logo.svg/320px-Polaroid_Logo.svg.png' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const FeaturedSection = () => {
  const shapeScrollRef = useRef(null);

  const scrollShapes = (dir) => {
    if (shapeScrollRef.current) {
      shapeScrollRef.current.scrollBy({ left: dir * 260, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION 1 — Frame Shapes
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-1">Browse by Shape</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Perfect Frame</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollShapes(-1)}
                className="p-2 rounded-full border border-slate-200 hover:border-teal-400 hover:text-teal-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollShapes(1)}
                className="p-2 rounded-full border border-slate-200 hover:border-teal-400 hover:text-teal-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable shape chips */}
          <div
            ref={shapeScrollRef}
            className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {frameShapes.map((shape, i) => (
              <motion.div
                key={shape.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-teal-400 transition-all shadow-sm group-hover:shadow-lg bg-white">
                  <img
                    src={shape.image}
                    alt={shape.label}
                    className="w-full h-full transition-transform duration-500"
                    style={{ objectFit: shape.objectFit || 'cover', objectPosition: 'center' }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">
                  {shape.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — Trending Looks (photo grid)
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-1">#TrendingNow</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Looks</span>
              </h2>
            </div>
            <Link
              to="showcase"
              smooth
              duration={500}
              className="hidden md:flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 cursor-pointer transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2-row masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trendingLooks.map((look, i) => (
              <motion.div
                key={look.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md ${i === 0 || i === 4 ? 'md:row-span-1' : ''}`}
                style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/5' }}
              >
                <img
                  src={look.image}
                  alt={look.label}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Tag pill */}
                <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${look.color}`}>
                  {look.tag}
                </span>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-base leading-tight">{look.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">Shop this style →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — Full-width Split Banner
      ══════════════════════════════════════════ */}
      <section className="py-6 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Banner A */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-56 md:h-72 group cursor-pointer shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"
              alt="Sunglasses Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent flex flex-col justify-center px-8">
              <span className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-2">New In</span>
              <h3 className="text-white text-2xl font-extrabold leading-tight mb-3">Sunglasses<br />Collection</h3>
              <Link to="contact" smooth duration={500}
                className="w-fit text-xs font-bold text-white bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-full transition-colors cursor-pointer">
                Book Now
              </Link>
            </div>
          </motion.div>

          {/* Banner B */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="relative rounded-2xl overflow-hidden h-56 md:h-72 group cursor-pointer shadow-lg"
          >
            <img
              src="./kid_with_glasses.png"
              alt="Kids Eyewear"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-transparent flex flex-col justify-center px-8">
              <span className="text-violet-300 text-xs font-bold uppercase tracking-widest mb-2">Kids Special</span>
              <h3 className="text-white text-2xl font-extrabold leading-tight mb-3">Fun Frames<br />for Kids</h3>
              <Link to="contact" smooth duration={500}
                className="w-fit text-xs font-bold text-white bg-violet-500 hover:bg-violet-400 px-4 py-2 rounded-full transition-colors cursor-pointer">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
