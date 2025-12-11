"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const images = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    
    return () => clearInterval(interval);
  }, []);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

const isDark = !mounted || theme === 'dark';
  if (!mounted) {
    // Dark theme skeleton while loading
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-16">
            <div className="text-center space-y-8">
              <div className="h-8 w-48 bg-slate-800 rounded-full mx-auto animate-pulse" />
              <div className="h-24 w-full max-w-2xl bg-slate-800 rounded-2xl mx-auto animate-pulse" />
              <div className="h-6 w-96 bg-slate-800 rounded-lg mx-auto animate-pulse" />
              <div className="flex gap-4 justify-center">
                <div className="h-12 w-32 bg-slate-800 rounded-lg animate-pulse" />
                <div className="h-12 w-32 bg-slate-800 rounded-lg animate-pulse" />
              </div>
            </div>
            <div className="w-full max-w-6xl h-96 bg-slate-800 rounded-3xl animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative min-h-screen w-full overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900' 
        : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
    }`}>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${
          isDark ? 'opacity-20' : 'opacity-10'
        }`} style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.15)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.15)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/20' : 'bg-purple-400/30'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/20' : 'bg-pink-400/30'
          }`}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark ? 'bg-blue-600/15' : 'bg-blue-400/25'
          }`}
          animate={{
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Sparkles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              isDark ? 'bg-purple-400/40' : 'bg-purple-600/30'
            } rounded-full`}
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-16">
          
          {/* Content Section */}
          <div className="text-center space-y-8 relative">
            
            {/* Floating Icon Decorations */}
            <motion.div
              className={`absolute -left-20 top-10 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              } opacity-20`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            >
              <Code2 className="w-16 h-16" />
            </motion.div>
            <motion.div
              className={`absolute -right-20 top-32 ${
                isDark ? 'text-pink-400' : 'text-pink-600'
              } opacity-20`}
              animate={{
                y: [0, 20, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            >
              <Zap className="w-20 h-20" />
            </motion.div>

          

            {/* Main Heading with 3D Layers */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
  <span className={`absolute inset-0 blur-2xl ${
    isDark 
      ? 'text-purple-600/50' 
      : 'text-purple-500/30'
  }`}>
    VelTrix Web Solution Development Services
  </span>
  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D247BF] via-purple-500 to-pink-500">
    VelTrix Web Solution
  </span>
  <br />
  <span className={`inline-block mt-4 ${
    isDark ? 'text-white' : 'text-slate-800'
  }`}>
    Development Services
  </span>
</h1>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className={`max-w-screen-sm mx-auto text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
We create stunning websites, e-commerce platforms, and custom web applications. 
              From landing pages to complex systems, we deliver professional solutions tailored to your business needs.            </motion.p>

            {/* CTA Buttons with 3D Effect */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className={`w-full sm:w-auto px-8 py-6 font-bold text-lg group/arrow shadow-2xl ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-2 transition-transform duration-300" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="secondary"
                  className={`w-full sm:w-auto px-8 py-6 font-bold text-lg backdrop-blur-xl border-2 ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border-white/20 text-white'
                      : 'bg-white/60 hover:bg-white/80 border-purple-200 text-purple-700'
                  }`}
                >
                  <Link href="https://github.com/nobruf/veltrix-landing-page.git" target="_blank">
                    Message Now
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Image Showcase with Tilt Effect */}
          <motion.div
            className="relative w-full mt-8 max-w-6xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Intense Glow */}
            <motion.div 
              className={`absolute -inset-8 rounded-3xl blur-3xl ${
                isDark
                  ? 'bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-blue-600/40'
                  : 'bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-blue-400/50'
              }`}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main Container with Perspective */}
            <motion.div
              className="relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass Card Container */}
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border-2 ${
                isDark
                  ? 'bg-slate-900/40 border-purple-500/30'
                  : 'bg-white/40 border-purple-300/50'
              }`}>
                
                {/* Image Slider */}
                       {/* Image Slider */}
                <div className="relative h-64 sm:h-96 md:h-[550px] overflow-hidden">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentImage === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={image}
                        alt={`VelTrix showcase ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 ${
                        isDark
                          ? 'bg-gradient-to-t from-slate-950/90 via-purple-950/20 to-transparent'
                          : 'bg-gradient-to-t from-purple-100/50 via-transparent to-transparent'
                      }`} />
                    </motion.div>
                  ))}
                </div>

                {/* Modern Progress Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`relative h-1.5 rounded-full overflow-hidden ${
                        currentImage === index ? 'w-12' : 'w-8'
                      }`}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`h-full ${
                        isDark ? 'bg-white/20' : 'bg-black/20'
                      }`} />
                      {currentImage === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                          layoutId="activeIndicator"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* 3D Floating Elements */}
              <motion.div
                className={`absolute -top-8 -right-8 w-28 h-28 rounded-3xl ${
                  isDark
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                    : 'bg-gradient-to-br from-purple-400 to-pink-400'
                } shadow-2xl`}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(60px)",
                }}
              />
              
              <motion.div
                className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full ${
                  isDark
                    ? 'bg-gradient-to-br from-pink-600 to-purple-600'
                    : 'bg-gradient-to-br from-pink-400 to-purple-400'
                } shadow-2xl`}
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(60px)",
                }}
              />

              <motion.div
                className={`absolute top-1/2 -right-12 w-20 h-20 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                    : 'bg-gradient-to-br from-blue-400 to-purple-400'
                } shadow-2xl`}
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(40px)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};