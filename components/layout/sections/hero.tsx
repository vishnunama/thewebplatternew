"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp"
   
  ];

  useEffect(() => {
    // Auto-rotate images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="container w-full px-4 sm:px-6">
      <div className="grid place-items-center lg:max-w-screen-xl gap-6 sm:gap-8 mx-auto py-12 sm:py-20 md:py-32">
        <div className="text-center space-y-6 sm:space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-3xl sm:text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                The Web Platter
              </span>
              Development Company
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
            {`Our software experts provide enterprise software development with our intelligent solutions like Software, ML, blockchain, metaverse and other advanced technologies, creating customized software solutions.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full sm:w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full sm:w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/TheWebPlatter-landing-page.git"
                target="_blank"
              >
                Message Now
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-8 sm:mt-14 w-full">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          
          {/* Image slider */}
          <div className="relative w-full mx-auto overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-48 sm:h-auto"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full flex-shrink-0 flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full sm:max-h-[500px] md:max-h-[600px] rounded-lg border border-t-2 border-secondary border-t-primary/30"
                    src={image}
                    alt={`Web Platter slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            
            {/* Indicator dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 rounded-full transition-colors duration-300 ${
                    currentImage === index ? "bg-primary" : "bg-gray-400/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};