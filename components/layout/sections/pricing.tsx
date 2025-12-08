"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, Send, ShoppingCart, Sparkles, Globe, Crown } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

enum PackageType {
  BASIC = "basic",
  STANDARD = "standard",
  PREMIUM = "premium",
}

interface PackageProps {
  type: PackageType;
  title: string;
  price: number;
  description: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
  image: string;
}

interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  packages: PackageProps[];
}

const projects: ProjectProps[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Website Development",
    subtitle: "Complete online store solution with admin panel & payment integration",
    icon: ShoppingCart,
    packages: [
      {
        type: PackageType.BASIC,
        title: "Frontend Only",
        price: 5000,
        description: "Single page e-commerce landing page with modern UI design",
        features: [
          "1 Page Landing Design",
          "Responsive Layout",
          "Product Showcase Section",
          "Contact Form Integration",
          "Basic SEO Setup"
        ],
        deliveryTime: "3 Days",
        revisions: "2 Revisions",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      },
      {
        type: PackageType.STANDARD,
        title: "Full E-Commerce",
        price: 40000,
        description: "Complete dynamic e-commerce website with admin panel",
        features: [
          "Multi-page E-Commerce Site",
          "Admin Panel Dashboard",
          "Dynamic Product Management",
          "Payment Gateway Integration",
          "Order Management System",
          "User Authentication",
          "REST API Integration",
          "Email Notifications"
        ],
        deliveryTime: "15 Days",
        revisions: "5 Revisions",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      },
      {
        type: PackageType.PREMIUM,
        title: "Custom Solution",
        price: 150000,
        description: "Fully customized e-commerce platform built to your exact specifications",
        features: [
          "Complete Custom Design",
          "Advanced Admin Panel",
          "Multi-vendor Support",
          "Custom Features & Modules",
          "Advanced Analytics Dashboard",
          "Mobile App Integration",
          "Full Source Code",
          "Lifetime Support",
          "Unlimited Revisions",
          "White Label Solution"
        ],
        deliveryTime: "30 Days",
        revisions: "Unlimited",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      },
    ],
  },
  {
    id: "custom-websites",
    title: "Custom Website Development",
    subtitle: "Professional websites for restaurants, real estate, food delivery & more",
    icon: Globe,
    packages: [
      {
        type: PackageType.BASIC,
        title: "Landing Page",
        price: 5000,
        description: "Single page website for restaurants, cafes, or small businesses",
        features: [
          "1 Page Responsive Design",
          "Menu/Product Display",
          "Contact Information",
          "Google Maps Integration",
          "Social Media Links"
        ],
        deliveryTime: "3 Days",
        revisions: "2 Revisions",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      },
      {
        type: PackageType.STANDARD,
        title: "Multi-Page Website",
        price: 40000,
        description: "Complete dynamic website with CMS and booking system",
        features: [
          "5-7 Page Website",
          "Content Management System",
          "Booking/Reservation System",
          "Gallery & Portfolio",
          "Blog Section",
          "Contact Forms",
          "SEO Optimized",
          "Mobile Responsive"
        ],
        deliveryTime: "15 Days",
        revisions: "5 Revisions",
        image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80",
      },
      {
        type: PackageType.PREMIUM,
        title: "Enterprise Solution",
        price: 150000,
        description: "Advanced platform with custom features & integrations",
        features: [
          "Unlimited Pages",
          "Custom Feature Development",
          "Advanced Admin Dashboard",
          "Real-time Notifications",
          "Multi-location Support",
          "Payment Integration",
          "Analytics & Reporting",
          "API Development",
          "Full Source Code",
          "Lifetime Support"
        ],
        deliveryTime: "30 Days",
        revisions: "Unlimited",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      },
    ],
  },
];

export const PricingSection = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = !mounted || theme === 'dark';
  const currentProject = projects[selectedProject];

  const getPackageColor = (type: PackageType) => {
    switch (type) {
      case PackageType.BASIC:
        return isDark ? 'from-blue-600 to-cyan-600' : 'from-blue-500 to-cyan-500';
      case PackageType.STANDARD:
        return isDark ? 'from-purple-600 to-pink-600' : 'from-purple-500 to-pink-500';
      case PackageType.PREMIUM:
        return isDark ? 'from-amber-600 to-orange-600' : 'from-amber-500 to-orange-500';
    }
  };

  return (
    <section ref={sectionRef} className="container py-24 sm:py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/20'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600">
            <Sparkles className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Choose Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Perfect Package
          </span>
        </motion.h2>

        <motion.p 
          className="md:w-1/2 mx-auto text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
From simple landing pages to enterprise solutions, we&apos;ve got the perfect package        </motion.p>
      </div>

      {/* Project Selector */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl border-2 ${
                selectedProject === index
                  ? isDark
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-400 text-white shadow-lg'
                  : isDark
                  ? 'bg-slate-900/50 border-slate-700 text-gray-300 hover:border-purple-500/50'
                  : 'bg-white/50 border-gray-300 text-gray-700 hover:border-purple-400/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="w-5 h-5" />
                {project.title}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Project Info */}
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentProject.title}</h3>
        <p className="text-lg text-muted-foreground">{currentProject.subtitle}</p>
      </motion.div>

      {/* Packages Grid */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {currentProject.packages.map((pkg, index) => (
          <motion.div
            key={pkg.type}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            onMouseEnter={() => setHoveredPackage(pkg.type)}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <motion.div
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="h-full"
            >
              <Card
                className={`h-full relative overflow-hidden transition-all duration-500 ${
                  pkg.type === PackageType.STANDARD
                    ? 'lg:scale-105 shadow-2xl'
                    : ''
                } ${
                  hoveredPackage === pkg.type
                    ? isDark
                      ? 'bg-slate-900/80 border-purple-500/50 shadow-2xl'
                      : 'bg-white border-purple-300/50 shadow-xl'
                    : isDark
                    ? 'bg-slate-900/50 border-slate-700/50'
                    : 'bg-white/80 border-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Popular Badge */}
                {pkg.type === PackageType.STANDARD && (
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <Badge className={`px-4 py-1 font-bold bg-gradient-to-r ${getPackageColor(pkg.type)} text-white shadow-lg`}>
                      <Crown className="w-4 h-4 mr-1" />
                      MOST POPULAR
                    </Badge>
                  </motion.div>
                )}

                {/* Package Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-slate-900 via-slate-900/50' : 'from-white via-white/50'
                  } to-transparent`} />
                  
                  {/* Package Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`px-3 py-1 font-bold bg-gradient-to-r ${getPackageColor(pkg.type)} text-white`}>
                      {pkg.title}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-end"
                    >
                      <span className="text-3xl font-bold text-primary">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">One-time</span>
                    </motion.div>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  
                  {/* Delivery Info */}
                  <div className="flex gap-4 mt-4 text-sm">
                    <div className={`px-3 py-1 rounded-full ${
                      isDark ? 'bg-slate-800' : 'bg-gray-100'
                    }`}>
                      ⏱️ {pkg.deliveryTime}
                    </div>
                    <div className={`px-3 py-1 rounded-full ${
                      isDark ? 'bg-slate-800' : 'bg-gray-100'
                    }`}>
                      🔄 {pkg.revisions}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 text-primary`} />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-6">
                  <Button
                    className={`flex-1 font-semibold ${
                      pkg.type === PackageType.STANDARD
                        ? `bg-gradient-to-r ${getPackageColor(pkg.type)} hover:opacity-90`
                        : ''
                    }`}
                    variant={pkg.type === PackageType.STANDARD ? "default" : "secondary"}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    className="flex-1 font-semibold"
                    variant="outline"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                </CardFooter>

                {/* Hover Glow */}
                <motion.div
                  className={`absolute inset-0 opacity-0 pointer-events-none rounded-lg transition-opacity duration-500 ${
                    hoveredPackage === pkg.type ? 'opacity-100' : ''
                  }`}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${
                      isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'
                    }, transparent 70%)`,
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