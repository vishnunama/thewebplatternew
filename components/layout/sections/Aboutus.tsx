import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { 
    Users, 
    Target, 
    Award, 
    Coffee,
    Code,
    Lightbulb,
    Heart,
    Zap
  } from "lucide-react";
  
  export const Aboutus= () => {
    return (
      <section id="about" className="container py-24 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            About Us
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            We Build Digital Experiences That Matter
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Were a passionate team of developers and designers dedicated to creating 
            innovative solutions that transform ideas into powerful digital experiences.
          </p>
        </div>
  
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, we started as a small team with a big vision: to bridge 
                the gap between complex technology and user-friendly solutions. What began 
                as a passion project has evolved into a full-service digital agency.
              </p>
              <p>
                Today, we work with startups, established businesses, and everything in between, 
                helping them navigate the digital landscape with confidence and creativity.
              </p>
              <p>
                Our approach combines cutting-edge technology with thoughtful design, 
                ensuring every project we deliver not only meets technical requirements 
                but also delights users and drives business results.
              </p>
            </div>
          </div>
          
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                To empower businesses through innovative technology solutions that 
                enhance user experiences and drive sustainable growth.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm">User-Centric</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm">Innovation</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm">Quality</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                We embrace new technologies and creative solutions to solve complex problems.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Collaboration</h4>
              <p className="text-sm text-muted-foreground">
                We believe in the power of teamwork and transparent communication.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">
                We strive for perfection in every line of code and every design detail.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Passion</h4>
              <p className="text-sm text-muted-foreground">
                We love what we do, and it shows in the quality of our work.
              </p>
            </Card>
          </div>
        </div>
  
        {/* Stats Section */}
        <div className="bg-muted/30 rounded-lg p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Cups of Coffee</div>
            </div>
          </div>
        </div>
  
        {/* Services Preview */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Code className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-sm text-muted-foreground">
                Custom websites and web applications built with modern technologies.
              </p>
            </Card>
  
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Coffee className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Mobile Development</h4>
              <p className="text-sm text-muted-foreground">
                Native and cross-platform mobile apps for iOS and Android.
              </p>
            </Card>
  
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Lightbulb className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">UI/UX Design</h4>
              <p className="text-sm text-muted-foreground">
                Beautiful, intuitive designs that enhance user experience.
              </p>
            </Card>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Lets discuss how we can help bring your ideas to life. 
            Were always excited to take on new challenges and create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    );
  };