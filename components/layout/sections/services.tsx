"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  ShoppingCart, 
  Code2, 
  Rocket, 
  Wallet, 
  Plug, 
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useTheme } from "next-themes";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  icon: any;
}

const serviceList: ServiceProps[] = [
  {
    title: "E-Commerce Development",
    description:
      "Complete online store solutions with payment gateway integration, inventory management, order tracking, and admin dashboards for seamless business operations.",
    pro: 1,
    icon: ShoppingCart,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored full-stack applications built with React, Node.js, and modern frameworks to solve your unique business challenges with scalable architecture.",
    pro: 1,
    icon: Code2,
  },
  {
    title: "Landing Page Design",
    description:
      "High-converting landing pages optimized for lead generation with stunning visuals, clear CTAs, and mobile-responsive layouts that drive results.",
    pro: 0,
    icon: Rocket,
  },
  {
    title: "Real Estate Platforms",
    description:
      "Property listing websites with advanced search, virtual tours, booking systems, and CRM integration for real estate agencies and property developers.",
    pro: 1,
    icon: Wallet,
  },
  {
    title: "API Integration Services",
    description:
      "Seamless integration of third-party APIs including payment gateways, social media, email marketing, SMS services, and custom API development.",
    pro: 0,
    icon: Plug,
  },
  {
    title: "Blog & Content Platforms",
    description:
      "SEO-optimized blogging platforms with Google AdSense integration, multi-author support, content management systems, and analytics dashboards.",
    pro: 0,
    icon: FileText,
  },
];

export const ServicesSection = () => {
  const { theme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const isDark = theme === 'dark';

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
          }`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-pink-400/15'
          }`}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-purple-400/30' : 'bg-purple-600/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border-2 mb-4"
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))' 
                : 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
              borderColor: isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Services</span>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Grow Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
            Business
          </span>
        </motion.h2>

        <motion.h3 
          className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From frontend design to backend architecture, we deliver complete 
          full-stack solutions. Our expertise spans web development, mobile apps, 
          e-commerce platforms, and custom software tailored to your needs.
        </motion.h3>
      </div>

      {/* Services Grid */}
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[95%] mx-auto relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {serviceList.map(({ title, description, pro, icon: IconComponent }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + index * 0.1,
              ease: "easeOut"
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              <Card
                className={`group h-full relative overflow-visible transition-all duration-500 ${
                  hoveredCard === index
                    ? isDark
                      ? 'bg-gradient-to-br from-purple-900/60 via-slate-900/60 to-pink-900/60 border-purple-500/50 shadow-2xl'
                      : 'bg-gradient-to-br from-purple-100 via-white to-pink-100 border-purple-300/50 shadow-xl'
                    : isDark
                    ? 'bg-slate-900/50 hover:bg-slate-800/60 border-slate-700/50'
                    : 'bg-white/60 hover:bg-white/90 border-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: isDark
                      ? 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)'
                      : 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 70%)',
                  }}
                  animate={hoveredCard === index ? {
                    scale: [1, 1.5, 1],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

               

                <CardHeader className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center relative ${
                      isDark
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500'
                    } shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    style={{
                      transform: hoveredCard === index ? "translateZ(20px)" : "translateZ(0px)",
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl blur-xl ${
                        isDark
                          ? 'bg-gradient-to-br from-purple-600/50 to-pink-600/50'
                          : 'bg-gradient-to-br from-purple-500/40 to-pink-500/40'
                      }`}
                      animate={hoveredCard === index ? {
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  {/* Title with Hover Effect */}
                  <motion.div
                    animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardTitle className="text-xl mb-3 flex items-center gap-2">
                      {title}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </CardTitle>
                  </motion.div>

                  <CardDescription className="leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>

                {/* Premium Badge */}
                <Badge
                  data-pro={ProService.YES === pro}
                  variant="secondary"
                  className={`absolute -top-2 -right-3 transition-all duration-300 ${
                    ProService.YES === pro ? 'flex' : 'hidden'
                  } ${
                    hoveredCard === index
                      ? 'scale-110 shadow-lg'
                      : ''
                  } ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0'
                  }`}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  PREMIUM
                </Badge>

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 30%, ${
                      isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)'
                    } 50%, transparent 70%)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 200%', '-200% -200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Border Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark
                      ? 'shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                      : 'shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                  }`}
                  animate={hoveredCard === index ? {
                    scale: [1, 1.02, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};