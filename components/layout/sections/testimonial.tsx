"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/veltrix.png",
    name: "Aarav Mehta",
    userName: "Owner, QuickBite Corner",
    comment:
      "The fast food ordering app they built for us is intuitive and fast. Customers love the smooth experience and real-time order tracking!",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Pooja Sharma",
    userName: "Founder, FashionKart",
    comment:
      "They delivered our eCommerce app on time with all key features like payment integration, order management, and a clean UI. Great job!",
    rating: 4.9,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Rohit Kapoor",
    userName: "Director, Elite Realty",
    comment:
      "Our real estate platform now looks professional and functions perfectly. Users can easily browse properties and book appointments.",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Simran Kaur",
    userName: "Manager, TableTreats Restaurant",
    comment:
      "From table reservations to online menus, they built us a restaurant app that covers everything. The support has been excellent too!",
    rating: 4.8,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Aditya Singh",
    userName: "Co-founder, Urban Essentials",
    comment:
      "We needed a multipurpose delivery app for groceries and household items. They delivered a full-stack solution with admin control!",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Neha Verma",
    userName: "Owner, Café Bliss",
    comment:
      "Our café app has improved our customer loyalty and ease of ordering. Their UI design and backend support are top-notch!",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === 'dark';

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="container py-24 sm:py-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-pink-400/15'
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

        {/* Floating sparkles */}
        {[...Array(10)].map((_, i) => (
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
              y: [0, -20, 0],
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

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Testimonials</span>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hear What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            100+ Clients
          </span>{" "}
          Say
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real stories from real clients who transformed their business with our solutions
        </motion.p>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {reviewList.map((review, index) => (
              <CarouselItem
                key={review.name}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="h-full"
                >
                  <Card 
                    className={`h-full relative overflow-hidden transition-all duration-500 ${
                      hoveredIndex === index
                        ? isDark
                          ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 shadow-2xl'
                          : 'bg-gradient-to-br from-purple-100/80 to-pink-100/80 border-purple-300/50 shadow-xl'
                        : isDark
                        ? 'bg-slate-900/50 border-slate-700/50'
                        : 'bg-white/80 border-gray-200/50'
                    } backdrop-blur-sm`}
                  >
                    {/* Quote Icon Background */}
                    <motion.div
                      className={`absolute -top-4 -right-4 opacity-10 ${
                        isDark ? 'text-purple-400' : 'text-purple-600'
                      }`}
                      animate={hoveredIndex === index ? {
                        rotate: [0, 10, 0],
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Quote className="w-32 h-32" />
                    </motion.div>

                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: isDark
                          ? 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1), transparent 70%)'
                          : 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)',
                      }}
                      animate={hoveredIndex === index ? {
                        scale: [1, 1.5, 1],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />

                    <CardContent className="pt-6 pb-4 relative z-10">
                      {/* Stars */}
                      <motion.div 
                        className="flex gap-1 pb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 180,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Star 
                              className={`size-4 ${
                                i < Math.floor(review.rating)
                                  ? 'fill-primary text-primary'
                                  : 'text-gray-300'
                              }`}
                            />
                          </motion.div>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-primary">
                          {review.rating}
                        </span>
                      </motion.div>

                      {/* Comment */}
                      <motion.p
                        className="text-base leading-relaxed"
                        animate={hoveredIndex === index ? {
                          x: [0, 2, 0],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        &ldquo;{review.comment}&rdquo;
                      </motion.p>
                    </CardContent>

                    <CardHeader className="relative z-10">
                      <div className="flex flex-row items-center gap-4">
                        {/* Avatar with animation */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Avatar className="border-2 border-primary/20">
                            <AvatarImage
                              src="https://avatars.githubusercontent.com/u/75042455?v=4"
                              alt={review.name}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                              {review.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>

                        <div className="flex flex-col">
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          <CardDescription className="text-sm">
                            {review.userName}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, transparent 40%, ${
                          isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)'
                        } 50%, transparent 60%)`,
                        backgroundSize: '200% 200%',
                      }}
                      animate={hoveredIndex === index ? {
                        backgroundPosition: ['200% 200%', '-200% -200%'],
                        opacity: [0, 1, 0],
                      } : {}}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />

                    {/* Border Glow */}
                    {hoveredIndex === index && (
                      <motion.div
                        className={`absolute inset-0 rounded-lg ${
                          isDark
                            ? 'shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                            : 'shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                        }`}
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Styled Navigation Buttons */}
          <CarouselPrevious 
            className={`${
              isDark
                ? 'bg-slate-900/80 border-purple-500/50 hover:bg-slate-800'
                : 'bg-white/80 border-purple-300/50 hover:bg-white'
            } backdrop-blur-xl shadow-lg`}
          />
          
          <CarouselNext 
            className={`${
              isDark
                ? 'bg-slate-900/80 border-purple-500/50 hover:bg-slate-800'
                : 'bg-white/80 border-purple-300/50 hover:bg-white'
            } backdrop-blur-xl shadow-lg`}
          />
        </Carousel>
      </motion.div>

    
    </section>
  );
};