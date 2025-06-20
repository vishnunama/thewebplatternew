import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ShippingAndDelivery = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Delivery & Digital Asset Transfer</h1>
          <p className="text-xl text-muted-foreground">
            For Digital Services - Website Development & Design
          </p>
          <Badge variant="outline" className="mt-4">
            Effective from June 19, 2025
          </Badge>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                Digital Delivery Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>100% Digital Delivery:</strong> All our services are delivered digitally - no physical shipping required.
                </p>
                <p>
                  <strong>Instant Access:</strong> Live websites are accessible immediately upon completion and hosting setup.
                </p>
                <p>
                  <strong>File Transfer:</strong> All source files, assets, and documentation delivered via secure digital channels.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                Delivery Timelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Landing Page Design</h4>
                  <p className="text-muted-foreground text-sm">
                    • Initial concept: 2-3 business days<br/>
                    • Final delivery: 5-7 business days<br/>
                    • Revisions: 1-2 days per revision cycle
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Website Design</h4>
                  <p className="text-muted-foreground text-sm">
                    • Wireframes & mockups: 5-7 business days<br/>
                    • Complete design: 10-14 business days<br/>
                    • Final assets: 2-3 days post-approval
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Website Development</h4>
                  <p className="text-muted-foreground text-sm">
                    • Simple websites: 2-3 weeks<br/>
                    • Complex websites: 4-6 weeks<br/>
                    • E-commerce sites: 6-8 weeks<br/>
                    • Custom applications: 8-12 weeks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Delivery Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Live Website:</strong> Deployed on your hosting server with full functionality</li>
                <li>• <strong>Email Transfer:</strong> Source files sent via secure email attachments</li>
                <li>• <strong>Cloud Storage:</strong> Google Drive, Dropbox, or WeTransfer links</li>
                <li>• <strong>GitHub Repository:</strong> Code delivered via private repository access</li>
                <li>• <strong>FTP Transfer:</strong> Direct server upload for immediate deployment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                What You'll Receive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Design Projects</h4>
                  <p className="text-muted-foreground text-sm">
                    • High-resolution design files (PSD/Figma/Sketch)<br/>
                    • Exported assets (PNG, JPG, SVG)<br/>
                    • Color codes and typography specifications<br/>
                    • Style guide and brand guidelines
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Development Projects</h4>
                  <p className="text-muted-foreground text-sm">
                    • Complete source code (HTML, CSS, JS)<br/>
                    • Database files (if applicable)<br/>
                    • Installation and setup instructions<br/>
                    • Admin panel access credentials<br/>
                    • Documentation and user manual
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Additional Assets</h4>
                  <p className="text-muted-foreground text-sm">
                    • Logo files in multiple formats<br/>
                    • Favicon and social media assets<br/>
                    • SEO configuration files<br/>
                    • Analytics and tracking setup
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Delivery Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Project Completion</h4>
                  <p>Final review and quality testing before delivery</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 2: Client Review</h4>
                  <p>48-hour review period for final approval and feedback</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 3: Payment Confirmation</h4>
                  <p>Final payment processing and confirmation</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 4: Asset Transfer</h4>
                  <p>Complete delivery of all files, credentials, and documentation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Rush Delivery Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Express Delivery:</strong> 50% faster delivery at 25% additional cost</li>
                <li>• <strong>24-Hour Rush:</strong> Available for simple projects at 50% additional cost</li>
                <li>• <strong>Weekend Delivery:</strong> Saturday/Sunday delivery at 20% additional cost</li>
                <li>• <strong>Priority Queue:</strong> Jump ahead in project queue for urgent requirements</li>
                <li>• Rush delivery subject to current workload and project complexity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                Delivery Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 99.9% uptime guarantee for hosted websites</li>
                <li>• Secure file transfer with encryption</li>
                <li>• Backup copies maintained for 90 days post-delivery</li>
                <li>• Re-delivery at no cost if files are corrupted</li>
                <li>• 30-day technical support included with every project</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Delivery Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Need help with your delivered project? Our team provides comprehensive support 
                to ensure smooth transition and successful implementation of your digital assets.
              </p>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="text-sm">
                  <strong>Contact Us:</strong> delivery@veltrix.com | +91-XXXX-XXXXXX<br/>
                  <strong>Support Hours:</strong> Mon-Fri, 9:00 AM - 8:00 PM IST<br/>
                  <strong>Emergency Support:</strong> Available for critical issues
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};