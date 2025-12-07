"use client";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
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
    <header className="w-full top-0 mx-auto sticky z-40 px-4 py-3">
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 rounded-xl backdrop-blur-md transition-all duration-300 ${
          isDark
            ? scrolled
              ? "bg-slate-950/95 border-2 border-purple-500/40 shadow-lg shadow-purple-500/20"
              : "bg-slate-950/80 border border-slate-700/50"
            : scrolled
            ? "bg-white/95 border-2 border-purple-300/50 shadow-lg shadow-purple-300/20"
            : "bg-white/80 border border-gray-200/50"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            className="w-20 sm:w-24 h-auto"
            src={isDark ? "/assets/veltrix-dark.png" : "/assets/veltrix-light.png"}
            alt="Veltrix Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4">
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                isDark
                  ? "hover:bg-slate-800 hover:text-purple-400"
                  : "hover:bg-gray-100 hover:text-purple-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop Theme Toggle */}
          <div className="hidden lg:flex">
            <ToggleTheme />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? "hover:bg-slate-800" : "hover:bg-gray-100"
                  }`}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className={`flex flex-col justify-between rounded-tr-2xl rounded-br-2xl backdrop-blur-xl w-[280px] sm:w-[320px] ${
                  isDark ? "bg-slate-950/95 border-slate-800" : "bg-white/95 border-gray-200"
                }`}
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="mb-6">
                    <SheetTitle>
                      <Link href="/" onClick={() => setIsOpen(false)}>
                        <img
                          className="w-24 h-auto"
                          src={isDark ? "/assets/veltrix-dark.png" : "/assets/veltrix-light.png"}
                          alt="Veltrix Logo"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col gap-1">
                      {routeList.map(({ href, label }) => (
                        <Button
                          key={href}
                          onClick={() => setIsOpen(false)}
                          asChild
                          variant="ghost"
                          className="justify-start text-sm w-full"
                        >
                          <Link href={href}>{label}</Link>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <SheetFooter className="flex-col sm:flex-col justify-start items-start mt-4 pt-4">
                    <Separator className="mb-3" />
                    <ToggleTheme />
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};