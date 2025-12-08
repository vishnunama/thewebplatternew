import { Aboutus } from "@/components/layout/sections/Aboutus";
import { BenefitsSection } from "@/components/layout/sections/benefits";
// import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "veltrix - Landing template",
  description: "Free veltrix landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/veltrix-landing-page.git",
    title: "veltrix - Landing template",
    description: "Free veltrix landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg",
        width: 1200,
        height: 630,
        alt: "veltrix - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/veltrix-landing-page.git",
    title: "veltrix - Landing template",
    description: "Free veltrix landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/veltrix-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      {/* <FeaturesSection /> */}
      <ServicesSection />
      <TestimonialSection />
      {/* <CommunitySection /> */}
      <PricingSection />
      <ContactSection />
      
      <FAQSection />
      <FooterSection />
    </>
  );
}
