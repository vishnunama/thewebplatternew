"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, Mail, Phone, Sparkles, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Website Development",
      message: "",
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === 'dark';

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:hello@yourdigitalservices.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call us",
      value: "+91 9079028393",
      link: "tel:+919079028393",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Mail Us",
      value: "hello@yourdigitalservices.com",
      link: "mailto:hello@yourdigitalservices.com",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Saturday",
      value2: "9:00 AM - 8:00 PM IST",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="container py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-purple-600/10' : 'bg-purple-400/15'
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
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-pink-600/10' : 'bg-pink-400/15'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
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

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-lg text-primary mb-2 tracking-wider">
                Contact
              </h2>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Connect With Us
            </motion.h2>
          </div>

          <motion.p 
            className="mb-8 text-muted-foreground lg:w-5/6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your ideas into stunning digital experiences? Let&apos;s discuss 
            your website development, landing page, or design project and bring your vision to life.
          </motion.p>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <div className="transition-all duration-300">
                    <div className="flex gap-2 mb-1">
                      <motion.div
                        animate={hoveredContact === index ? {
                          scale: [1, 1.2, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className={`transition-colors ${
                          hoveredContact === index ? 'text-primary' : ''
                        }`} />
                      </motion.div>
                      <div className="font-bold">{contact.title}</div>
                    </div>

                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="hover:text-primary transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <div>
                        <div>{contact.value}</div>
                        {contact.value2 && <div>{contact.value2}</div>}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader className="text-primary text-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Get a Free Quote
              </motion.div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full gap-4"
                >
                  <div className="flex flex-col md:!flex-row gap-8">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Website Development">
                                Website Development
                              </SelectItem>
                              <SelectItem value="Landing Page Design">
                                Landing Page Design
                              </SelectItem>
                              <SelectItem value="Website Design">
                                Website Design
                              </SelectItem>
                              <SelectItem value="E-commerce Website">
                                E-commerce Website
                              </SelectItem>
                              <SelectItem value="Website Redesign">
                                Website Redesign
                              </SelectItem>
                              <SelectItem value="Other">
                                Other
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell us about your project requirements, timeline, and budget..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="mt-4 w-full">Send Message</Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>

            <CardFooter></CardFooter>
          </Card>
        </motion.div>
      </section>
    </section>
  );
};