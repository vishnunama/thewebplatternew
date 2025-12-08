"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Globe,
  Calendar,
  CheckCircle,
  Users
} from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! We will get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePhoneCall = () => {
    window.open('tel:+919079028393', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:hello@yourdigitalservices.com', '_self');
  };

  const handleScheduleMeeting = () => {
    // You can integrate with calendar booking services like Calendly
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section id="contact" className="container py-24 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Contact Us
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Something Amazing Together
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Ready to transform your ideas into stunning digital experiences? Get in touch 
          with us today and let&apos;s discuss your website development, landing page, or design project.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePhoneCall}>
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground mb-2">Ready to discuss your project?</p>
          <span className="text-primary font-medium hover:underline">
            +91 9079028393
          </span>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-muted-foreground mb-2">Send us your requirements</p>
          <span className="text-primary font-medium hover:underline">
            hello@yourdigitalservices.com
          </span>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Business Hours</h3>
          <p className="text-muted-foreground mb-2">Mon - Sat</p>
          <p className="text-primary font-medium">9:00 AM - 8:00 PM IST</p>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form */}
        <Card className="p-8">
          <CardHeader className="pb-6">
            <h3 className="text-2xl font-bold mb-2">Get a Free Quote</h3>
            <p className="text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="landing-page">Landing Page Design</option>
                  <option value="website-design">Website Design</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="seo">SEO Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                  minLength={10}
                ></textarea>
                <p className="text-xs text-muted-foreground mt-1">
                  Minimum 10 characters required
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <Card className="p-6">
            <CardHeader>
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Digital Services?</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Expert Development</h4>
                    <p className="text-sm text-muted-foreground">Professional websites built with latest technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Custom Design</h4>
                    <p className="text-sm text-muted-foreground">Unique designs tailored to your brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">Continuous maintenance and updates</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 bg-primary/5">
            <CardHeader>
              <h3 className="text-xl font-semibold mb-4">Our Process</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Consultation</h4>
                    <p className="text-sm text-muted-foreground">We discuss your requirements</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Planning</h4>
                    <p className="text-sm text-muted-foreground">Create detailed project roadmap</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Development</h4>
                    <p className="text-sm text-muted-foreground">Build your digital solution</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Launch</h4>
                    <p className="text-sm text-muted-foreground">Deploy and support your project</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Services Overview */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-12">Our Digital Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow text-center group cursor-pointer">
            <Globe className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2">Website Development</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Custom websites with modern design and functionality
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Responsive Design</li>
              <li>• SEO Optimized</li>
              <li>• Fast Loading</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow text-center group cursor-pointer">
            <MessageSquare className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2">Landing Pages</h4>
            <p className="text-sm text-muted-foreground mb-4">
              High-converting landing pages for your campaigns
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Conversion Focused</li>
              <li>• A/B Test Ready</li>
              <li>• Mobile Optimized</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow text-center group cursor-pointer">
            <Users className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold mb-2">Website Design</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Beautiful, user-friendly designs that engage visitors
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Custom Graphics</li>
              <li>• Brand Consistency</li>
              <li>• User Experience</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don&apos;t wait! Contact us today for a free consultation and let&apos;s discuss 
          how we can help bring your digital vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={handlePhoneCall}>
            <Phone className="w-4 h-4 mr-2" />
            Call Now: +91 9079028393
          </Button>
          <Button variant="outline" size="lg" onClick={handleScheduleMeeting}>
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};