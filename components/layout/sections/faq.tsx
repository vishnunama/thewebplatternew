"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, HelpCircle } from "lucide-react";
import { useTheme } from "next-themes";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What web development services do you offer?",
    answer: "I specialize in creating modern websites, landing pages, e-commerce stores, and web applications. I work with technologies like React, Next.js, Node.js, and various CMS platforms to deliver high-quality, responsive websites.",
    value: "item-1",
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the project complexity. A simple landing page takes 3-5 days, a business website takes 1-2 weeks, and complex web applications can take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements.",
    value: "item-2",
  },
  {
    question: "Do you provide website design along with development?",
    answer: "Yes! I offer complete web design and development services. This includes UI/UX design, responsive layouts, modern aesthetics, and conversion-focused landing pages that look great and perform well.",
    value: "item-3",
  },
  {
    question: "What's included in your website development package?",
    answer: "My packages include responsive design, mobile optimization, SEO basics, contact forms, social media integration, fast loading speeds, and 30 days of free support after launch. Custom features can be added based on your needs.",
    value: "item-4",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Absolutely! I provide website maintenance services including updates, security monitoring, performance optimization, content updates, and technical support. I offer both one-time fixes and monthly maintenance plans.",
    value: "item-5",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes, I implement SEO best practices during development including proper meta tags, structured data, page speed optimization, and mobile-friendly design. I can also help with basic digital marketing strategies for better online visibility.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === 'dark';

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="container py-24 sm:py-16 md:w-[700px] relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
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
      <div className="text-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">FAQs</span>
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Common
          </span>{" "}
          Questions
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to frequently asked questions about our services
        </motion.p>
      </div>

      {/* FAQ Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <Accordion 
          type="single" 
          collapsible 
          className="w-full"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {FAQList.map(({ question, answer, value }, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <AccordionItem 
                value={value}
                className={`border rounded-xl mb-4 overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                  openItem === value
                    ? isDark
                      ? 'bg-slate-900/80 border-purple-500/50 shadow-lg'
                      : 'bg-white/80 border-purple-300/50 shadow-lg'
                    : isDark
                    ? 'bg-slate-900/50 border-slate-700/50 hover:border-purple-500/30'
                    : 'bg-white/50 border-gray-200/50 hover:border-purple-300/40'
                }`}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <motion.div 
                    className="flex items-start gap-3 text-left"
                    animate={openItem === value ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`mt-1 flex-shrink-0 ${
                        openItem === value ? 'text-primary' : 'text-muted-foreground'
                      }`}
                      animate={openItem === value ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <span className={`font-semibold ${
                      openItem === value ? 'text-primary' : ''
                    }`}>
                      {question}
                    </span>
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={openItem === value ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground leading-relaxed pl-8"
                  >
                    {answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`mt-12 text-center p-6 rounded-xl backdrop-blur-xl border ${
          isDark
            ? 'bg-slate-900/50 border-slate-700/50'
            : 'bg-white/50 border-gray-200/50'
        } relative z-10`}
      >
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-4">
          Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to us.
        </p>
        <motion.a
          href="#contact"
          className="text-primary font-semibold hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us →
        </motion.a>
      </motion.div>
    </section>
  );
};