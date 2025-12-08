import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { 
    Shield, 
    Lock, 
    Eye, 
    Mail,
    Server,
    Cookie,
    UserCheck,
    AlertTriangle,
    Calendar
  } from "lucide-react";
  
  export const PrivacyPolicy = () => {
    return (
      <section id="privacy" className="container py-24 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Privacy Policy
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Your Privacy Is Our Priority
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are committed to protecting your personal information and being transparent 
            about how we collect, use, and safeguard your data in our digital services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: June 19, 2025</span>
          </div>
        </div>
  
        {/* Quick Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">Privacy at a Glance</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a digital services provider specializing in website development, landing pages, 
                and website design, we understand the importance of your privacy and data security.
              </p>
              <p>
                This policy explains what information we collect, how we use it, and your rights 
                regarding your personal data when you use our services or visit our website.
              </p>
              <p>
                We are committed to transparency and will never sell your personal information 
                to third parties for marketing purposes.
              </p>
            </div>
          </div>
          
          <Card className="bg-muted/60 dark:bg-card">
            <CardHeader>
              <h3 className="text-xl font-semibold text-primary">Our Commitment</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We process your data lawfully, fairly, and transparently, collecting only 
                what we need to provide excellent digital services.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm">Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Protected</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                  <Eye className="w-4 h-4 text-primary" />
                  <span className="text-sm">Transparent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Information We Collect */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Information We Collect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <p className="text-sm text-muted-foreground">
                Name, email, phone number when you contact us for services.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Technical Data</h4>
              <p className="text-sm text-muted-foreground">
                IP address, browser type, device information for website optimization.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Usage Data</h4>
              <p className="text-sm text-muted-foreground">
                How you interact with our website and services for improvement.
              </p>
            </Card>
  
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cookies</h4>
              <p className="text-sm text-muted-foreground">
                Essential cookies for website functionality and analytics.
              </p>
            </Card>
          </div>
        </div>
  
        {/* How We Use Information */}
        <div className="mb-20">
          <Card className="p-8">
            <CardHeader className="pb-6">
              <h3 className="text-2xl font-bold text-center">How We Use Your Information</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Service Delivery
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Provide website development services</li>
                    <li>• Create custom landing pages</li>
                    <li>• Deliver website design solutions</li>
                    <li>• Communicate project updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Business Operations
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Process payments and invoicing</li>
                    <li>• Provide customer support</li>
                    <li>• Improve our services</li>
                    <li>• Send important notifications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Your Rights */}
        <div className="bg-muted/30 rounded-lg p-8 mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Your Privacy Rights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Access & Review</h4>
              <p className="text-sm text-muted-foreground">
                Request access to your personal data we hold
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Update & Correct</h4>
              <p className="text-sm text-muted-foreground">
                Modify or update your personal information
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Delete & Withdraw</h4>
              <p className="text-sm text-muted-foreground">
                Request deletion or withdraw consent
              </p>
            </div>
          </div>
        </div>
  
        {/* Data Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="p-6">
            <CardHeader>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Data Security
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• SSL encryption for all data transmission</p>
                <p>• Secure servers with regular security updates</p>
                <p>• Limited access to authorized personnel only</p>
                <p>• Regular security audits and monitoring</p>
                <p>• Secure backup and recovery procedures</p>
              </div>
            </CardContent>
          </Card>
  
          <Card className="p-6">
            <CardHeader>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-primary" />
                Data Retention
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Project data: Retained for project duration + 1 year</p>
                <p>• Contact information: Until you request deletion</p>
                <p>• Website analytics: Anonymized after 26 months</p>
                <p>• Legal requirements: As mandated by law</p>
                <p>• Backup data: Automatically purged regularly</p>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Contact Section */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have any questions about this privacy policy or how we handle your data, 
            please dont hesitate to contact us. Were here to help and ensure your privacy is protected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              Data Request Form
            </Button>
          </div>
        </div>
      </section>
    );
  };