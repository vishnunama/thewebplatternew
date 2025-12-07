"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, LineChart, Wallet, Sparkle } from "lucide-react";
import { useTheme } from "next-themes";

interface BenefitsProps {
  icon: any;
  title: string;
  description: string;
  image: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: Blocks,
    title: "Build Brand Trust",
    description:
      "Establish credibility with professionally designed websites and applications that reflect your business values. Our solutions create lasting impressions and foster customer confidence through modern design principles.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    icon: LineChart,
    title: "More Leads",
    description:
      "Convert visitors into customers with optimized landing pages and conversion-focused designs. Our strategic approach to user experience ensures maximum lead generation and business growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Wallet,
    title: "Higher Conversions",
    description:
      "Boost your sales with data-driven design and seamless user journeys. We implement proven conversion strategies that turn traffic into revenue, maximizing your return on investment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Sparkle,
    title: "Test Marketing Ideas",
    description:
      "Launch campaigns faster with flexible, scalable solutions. Our agile development approach allows you to experiment with different marketing strategies and optimize for best results.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
];

export const BenefitsSection = () => {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-10, 10], [5, -5]);
  const rotateY = useTransform(mouseX, [-10, 10], [-5, 5]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % benefitList.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isDark = theme === 'dark';

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/20'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.h2 
            className="text-lg text-primary mb-2 tracking-wider font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Benefits
          </motion.h2>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your Shortcut to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Success
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your digital presence with our full-stack development services. 
            From concept to deployment, we deliver solutions that drive real business 
            results and help you stay ahead of the competition.
          </motion.p>

          {/* 3D Carousel Image Display */}
          <motion.div
            className="relative w-full h-64 md:h-80 rounded-2xl mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow Effect */}
            <motion.div 
              className={`absolute -inset-4 rounded-3xl blur-2xl ${
                isDark
                  ? 'bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30'
                  : 'bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40'
              }`}
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Image Container with 3D Transform */}
            <motion.div
              className="relative w-full h-full"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 ${
                isDark ? 'border-purple-500/30 bg-slate-900/50' : 'border-purple-300/50 bg-white/50'
              } backdrop-blur-xl`}>
                {benefitList.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0,
                      scale: activeCard === index ? 1 : 1.1,
                      filter: activeCard === index ? 'blur(0px)' : 'blur(10px)',
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 ${
                      isDark
                        ? 'bg-gradient-to-t from-slate-950/80 via-transparent to-transparent'
                        : 'bg-gradient-to-t from-white/60 via-transparent to-transparent'
                    }`} />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.h3 
                        className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={activeCard === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {benefit.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 3D Floating Icon */}
              <motion.div
                className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                } shadow-2xl flex items-center justify-center`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                {(() => {
                  const IconComponent = benefitList[activeCard].icon;
                  return <IconComponent size={28} color="white" />;
                })()}
              </motion.div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {benefitList.map((_, index) => (
                <motion.button
                  key={index}
                  className={`relative h-1.5 rounded-full overflow-hidden ${
                    activeCard === index ? 'w-10' : 'w-6'
                  }`}
                  onClick={() => setActiveCard(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-full ${
                    isDark ? 'bg-white/20' : 'bg-black/20'
                  }`} />
                  {activeCard === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                      layoutId="activeCarouselIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Cards Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-4 w-full mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {benefitList.map(({ icon: IconComponent, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setActiveCard(index)}
            >
              <Card
                className={`group relative overflow-hidden transition-all duration-300 h-full ${
                  activeCard === index
                    ? isDark
                      ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50'
                      : 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-purple-300/50'
                    : isDark
                    ? 'bg-card hover:bg-slate-800/50 border-border'
                    : 'bg-card hover:bg-white/80 border-border'
                } backdrop-blur-sm`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? 'bg-gradient-to-br from-purple-600/10 to-pink-600/10'
                      : 'bg-gradient-to-br from-purple-200/30 to-pink-200/30'
                  }`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />

                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent
                        size={32}
                        className="mb-6 text-primary"
                      />
                    </motion.div>
                    <motion.span 
                      className={`text-5xl font-medium transition-all duration-300 ${
                        activeCard === index
                          ? 'text-primary/30'
                          : 'text-muted-foreground/15 group-hover:text-muted-foreground/30'
                      }`}
                      animate={activeCard === index ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      0{index + 1}
                    </motion.span>
                  </div>

                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground relative z-10">
                  {description}
                </CardContent>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, ${
                      isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'
                    } 50%, transparent 60%)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};