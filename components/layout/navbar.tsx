"use client";
import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import { useTheme } from "next-themes";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/refund-policy",
    label: "Refund Policy",
  },
  {
    href: "/privacypolicy",
    label: "Privacy Policy",
  },
  {
    href: "/termsandconditions",
    label: "Terms & Conditions",
  },
  {
    href: "/contactus",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = currentTheme === 'dark';

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40"
    >
      <motion.div
        animate={{
          boxShadow: scrolled 
            ? isDark 
              ? '0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(236, 72, 153, 0.2)' 
              : '0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(236, 72, 153, 0.15)'
            : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3 }}
        className={`relative flex justify-between items-center p-2 rounded-2xl backdrop-blur-xl transition-all duration-500 ${
          isDark
            ? scrolled
              ? "bg-slate-950/95 border-2 border-purple-500/40"
              : "bg-slate-950/80 border border-slate-700/50 shadow-inner"
            : scrolled
            ? "bg-white/95 border-2 border-purple-300/50"
            : "bg-white/80 border border-gray-200/50 shadow-inner"
        }`}
      >
        {/* Animated Gradient Border Glow on Scroll */}
        {scrolled && (
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${
                isDark ? "rgba(139, 92, 246, 0.6)" : "rgba(139, 92, 246, 0.4)"
              }, transparent)`,
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Logo Section */}
        <Link href="/" className="font-bold text-lg flex items-center relative z-10">
          <motion.img
            whileHover={{ scale: 1.05 }}
            className="w-24 h-auto"
            src={isDark ? "/assets/veltrix-dark.png" : "/assets/veltrix-light.png"}
            alt="Veltrix Logo"
          />
        </Link>

        {/* Mobile Menu Button */}
{/* Mobile Menu Button */}
<div className="flex items-center lg:hidden xl:hidden relative z-10">  
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer p-2"
              >
                <Menu />
              </motion.button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className={`flex flex-col justify-between rounded-tr-2xl rounded-br-2xl backdrop-blur-xl ${
                isDark ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-gray-200"
              }`}
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center">
                      <img
                        className="w-24 h-auto mr-2"
                        src={isDark ? "/assets/veltrix-dark.png" : "/assets/veltrix-light.png"}
                        alt="Veltrix Logo"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <motion.div
                      key={href}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-sm"
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                <Separator className="mb-2" />
                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation - HORIZONTAL LINE */}
        <NavigationMenu className="hidden lg:block mx-auto relative z-10">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center gap-1">
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      className={`text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                        isDark
                          ? "hover:bg-slate-800 hover:text-purple-400"
                          : "hover:bg-gray-100 hover:text-purple-600"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right Side - Theme Toggle */}
        <div className="hidden lg:flex relative z-10">
          <ToggleTheme />
        </div>

        {/* Bottom Glow Effect on Scroll */}
        {scrolled && (
          <motion.div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-8 blur-2xl rounded-full pointer-events-none ${
              isDark
                ? "bg-gradient-to-r from-purple-600/40 via-pink-600/50 to-purple-600/40"
                : "bg-gradient-to-r from-purple-400/30 via-pink-400/40 to-purple-400/30"
            }`}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
    </motion.header>
  );
};