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
import { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Contact Us
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Amazing Together
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Ready to transform your ideas into stunning digital experiences? Get in touch 
          with us today and let's discuss your website development, landing page, or design project.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="text-center p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-muted-foreground mb-2">Ready to discuss your project?</p>
          <a href="tel:+918696548657" className="text-primary font-medium hover:underline">
            +91 8696548657
          </a>
        </Card>

        <Card className="text-center p-6 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Email Us</h3>
          <p className="text-muted-foreground mb-2">Send us your requirements</p>
          <a href="mailto:hello@yourdigitalservices.com" className="text-primary font-medium hover:underline">
            hello@yourdigitalservices.com
          </a>
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
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </CardHeader>
          <CardContent>
            <div onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="website-development">Website Development</option>
                  <option value="landing-page">Landing Page Design</option>
                  <option value="website-design">Website Design</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white resize-none"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                ></textarea>
              </div>

              <Button onClick={handleSubmit} size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
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
          <Card className="p-6 hover:shadow-lg transition-shadow text-center">
            <Globe className="w-8 h-8 text-primary mb-4 mx-auto" />
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

          <Card className="p-6 hover:shadow-lg transition-shadow text-center">
            <MessageSquare className="w-8 h-8 text-primary mb-4 mx-auto" />
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

          <Card className="p-6 hover:shadow-lg transition-shadow text-center">
            <Users className="w-8 h-8 text-primary mb-4 mx-auto" />
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
          Don't wait! Contact us today for a free consultation and let's discuss 
          how we can help bring your digital vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Phone className="w-4 h-4 mr-2" />
            Call Now: +91 8696548657
          </Button>
          <Button variant="outline" size="lg">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};