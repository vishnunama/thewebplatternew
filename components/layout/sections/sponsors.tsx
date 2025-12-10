"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Vegan, Ghost, Puzzle, Squirrel, Cookie, Drama, Sparkles, Star } from "lucide-react";
import { useTheme } from "next-themes";

interface SponsorProps {
  icon: any;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: Crown,
    name: "Acmebrand",
  },
  {
    icon: Vegan,
    name: "Acmelogo",
  },
  {
    icon: Ghost,
    name: "Acmesponsor",
  },
  {
    icon: Puzzle,
    name: "Acmeipsum",
  },
  {
    icon: Squirrel,
    name: "Acme",
  },
  {
    icon: Cookie,
    name: "Accmee",
  },
  {
    icon: Drama,
    name: "Acmetech",
  },
];

export const SponsorsSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === 'dark';

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section 
      ref={sectionRef}
      id="sponsors" 
      className="w-full py-24 sm:py-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-pink-400/15'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border-2 mb-6"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))' 
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
              borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Trusted By Industry Leaders</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
              Platinum Sponsors
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partnering with world-class brands to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Marquee Container with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays for fade effect */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
            isDark
              ? 'bg-gradient-to-r from-slate-950 to-transparent'
              : 'bg-gradient-to-r from-white to-transparent'
          }`} />
          <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
            isDark
              ? 'bg-gradient-to-l from-slate-950 to-transparent'
              : 'bg-gradient-to-l from-white to-transparent'
          }`} />

          {/* Main Marquee Container */}
          <div className="relative rounded-2xl overflow-hidden py-8">
            
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 opacity-20"
              
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Marquee Animation */}
            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-16 pr-16"
                animate={{
                  x: [0, -1000],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedSponsors.map((sponsor, index) => {
                  const IconComponent = sponsor.icon;
                  return (
                    <motion.div
                      key={`${sponsor.name}-${index}`}
                      className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'hover:bg-slate-800/50'
                          : 'hover:bg-white/80'
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Icon with 3D effect */}
                      <motion.div
                        className={`relative p-3 rounded-xl ${
                          isDark
                            ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                            : 'bg-gradient-to-br from-purple-500 to-pink-500'
                        } shadow-lg`}
                        animate={hoveredIndex === index ? {
                          rotate: [0, -10, 10, -10, 0],
                        } : {}}
                        transition={{ duration: 0.5 }}
                        style={{
                          transform: hoveredIndex === index ? "translateZ(20px)" : "translateZ(0px)",
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                        
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl blur-lg ${
                            isDark
                              ? 'bg-gradient-to-br from-purple-600/50 to-pink-600/50'
                              : 'bg-gradient-to-br from-purple-500/40 to-pink-500/40'
                          }`}
                          animate={hoveredIndex === index ? {
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>

                      {/* Brand Name */}
                      <motion.span 
                        className={`text-xl md:text-2xl font-bold whitespace-nowrap ${
                          hoveredIndex === index
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                            : isDark
                            ? 'text-white'
                            : 'text-slate-900'
                        }`}
                        animate={hoveredIndex === index ? {
                          scale: 1.05,
                        } : {}}
                      >
                        {sponsor.name}
                      </motion.span>

                      {/* Sparkle effect on hover */}
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute -top-2 -right-2"
                        >
                          <Sparkles className="w-5 h-5 text-primary" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Bottom glow effect */}
          <motion.div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 blur-2xl rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30'
                : 'bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20'
            }`}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>

       
      
      </div>
    </section>
  );
};