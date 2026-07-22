import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const slides = [
  {
    id: 1,
    image: '/images/banner1.png',
    badge: 'New Arrivals 2026',
    title: 'See the World',
    highlight: 'in Style',
    subtitle: 'Discover our premium collection of designer frames, tailored for every face and every occasion.',
    overlayFrom: 'from-pink-950/70',
    overlayTo: 'to-fuchsia-900/20',
    accentColor: '#ec4899',
    badgeBg: 'bg-pink-500',
    btnBg: 'bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600',
    dotActive: 'bg-pink-400',
  },
  {
    id: 2,
    image: '/images/banner2.png',
    badge: 'Premium Collection',
    title: 'Precision Crafted',
    highlight: 'Eyewear',
    subtitle: 'Experience crystal-clear vision with our carefully curated selection of premium optical frames.',
    overlayFrom: 'from-teal-950/75',
    overlayTo: 'to-cyan-900/20',
    accentColor: '#14b8a6',
    badgeBg: 'bg-teal-500',
    btnBg: 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600',
    dotActive: 'bg-teal-400',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=90',
    objectPos: 'center 60%',
    badge: 'Summer Exclusive',
    title: 'Shield Your Eyes',
    highlight: 'In Luxury',
    subtitle: 'UV-protected sunglasses that blend superior protection with unmatched style and comfort.',
    overlayFrom: 'from-amber-950/75',
    overlayTo: 'to-orange-900/20',
    accentColor: '#f59e0b',
    badgeBg: 'bg-amber-500',
    btnBg: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
    dotActive: 'bg-amber-400',
  },
  {
    id: 4,
    image: '/images/banner4.png',
    badge: 'Boutique Edition',
    title: 'Elegance Meets',
    highlight: 'Vision',
    subtitle: 'Gold-rimmed classics and bold contemporary frames — find the perfect expression of you.',
    overlayFrom: 'from-violet-950/75',
    overlayTo: 'to-purple-900/20',
    accentColor: '#a855f7',
    badgeBg: 'bg-violet-500',
    btnBg: 'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600',
    dotActive: 'bg-violet-400',
  },
  {
    id: 5,
    image: '/images/banner5.png',
    badge: 'Titanium Series',
    title: 'Minimal Design,',
    highlight: 'Maximum Impact',
    subtitle: 'Feather-light titanium frames engineered for comfort — from morning to midnight.',
    overlayFrom: 'from-slate-950/80',
    overlayTo: 'to-blue-950/30',
    accentColor: '#3b82f6',
    badgeBg: 'bg-blue-500',
    btnBg: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600',
    dotActive: 'bg-blue-400',
  },
];

const AUTOPLAY_INTERVAL = 1500; // 1.5 seconds

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  }),
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.77, 0, 0.175, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.55, ease: [0.77, 0, 0.175, 1] },
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide Track ── */}
      <div className="relative w-full" style={{ height: 'clamp(380px, 52vw, 600px)' }}>
        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Full-bleed background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: slide.objectPos || 'center center' }}
              draggable={false}
            />

            {/* Gradient overlay — left-heavy so text stays readable */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlayFrom} via-black/40 ${slide.overlayTo}`}
            />

            {/* Text content — sits on top of the full-bleed image */}
            <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-8 md:px-16">
              <div className="max-w-xl">
                {/* Badge */}
                <motion.span
                  key={`badge-${current}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.05}
                  className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-5 ${slide.badgeBg}`}
                >
                  {slide.badge}
                </motion.span>

                {/* Headline */}
                <motion.h1
                  key={`h1-${current}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.12}
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-white mb-4 drop-shadow-lg"
                >
                  {slide.title}{' '}
                  <span style={{ color: slide.accentColor }}>{slide.highlight}</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  key={`sub-${current}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-sm md:text-base text-white/80 mb-8 leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  key={`cta-${current}`}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0.28}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={`flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer ${slide.btnBg}`}
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </Link>
                  <Link
                    to="showcase"
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/25 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Arrow Buttons ── */}
        <button
          onClick={() => { prev(); setPaused(true); setTimeout(() => setPaused(false), 3000); }}
          aria-label="Previous slide"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full p-2.5 text-white shadow-lg transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => { next(); setPaused(true); setTimeout(() => setPaused(false), 3000); }}
          aria-label="Next slide"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 rounded-full p-2.5 text-white shadow-lg transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* ── Progress bar ── */}
        {!paused && (
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-20">
            <motion.div
              key={`progress-${current}`}
              className="h-full"
              style={{ backgroundColor: slide.accentColor }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>
        )}
      </div>

      {/* ── Dot Indicators ── */}
      <div className="flex justify-center items-center gap-2 py-3 bg-white">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? `w-7 h-2.5 ${slide.dotActive}`
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
