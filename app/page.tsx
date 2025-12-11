import { Aboutus } from "@/components/layout/sections/Aboutus";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veltrix - Professional Web Development Services | E-commerce & Custom Websites",
  description: "Professional web development services including e-commerce websites, custom web applications, restaurant websites, and enterprise solutions. Get your dream website built with modern technology.",
  keywords: [
    "web development",
    "e-commerce website",
    "custom website",
    "restaurant website",
    "web application",
    "Next.js development",
    "React development",
    "professional website design"
  ],
  alternates: {
    canonical: 'https://thewebplatternew-pncb.vercel.app',
  },
  openGraph: {
    type: "website",
    url: "https://thewebplatternew-pncb.vercel.app",
    title: "Veltrix - Professional Web Development Services",
    description: "Building amazing digital experiences with modern technology. E-commerce, custom websites, and enterprise solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Veltrix - Web Development Services",
      },
    ],
    siteName: "Veltrix",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@veltrix",
    creator: "@veltrix",
    title: "Veltrix - Professional Web Development Services",
    description: "Building amazing digital experiences with modern technology",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}