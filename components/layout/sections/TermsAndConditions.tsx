import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TermsAndConditions = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
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
                <span className="text-2xl">📋</span>
                Service Agreement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>Acceptance of Terms:</strong> By engaging our services, you agree to these terms and conditions in their entirety.
                </p>
                <p>
                  <strong>Service Scope:</strong> All services will be delivered as per the agreed project scope and specifications outlined in the project proposal.
                </p>
                <p>
                  <strong>Modifications:</strong> Any changes to project scope must be agreed upon in writing and may incur additional charges.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Payment Schedule</h4>
                  <p className="text-muted-foreground text-sm">
                    • 50% advance payment required to start project<br/>
                    • Remaining 50% due upon project completion<br/>
                    • For projects above ₹50,000: Payment in 3 installments
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Payment Methods</h4>
                  <p className="text-muted-foreground text-sm">
                    • Bank transfer (preferred)<br/>
                    • UPI payments<br/>
                    • Online payment gateways<br/>
                    • All payments in INR only
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Late Payment</h4>
                  <p className="text-muted-foreground text-sm">
                    • 2% monthly interest on overdue payments<br/>
                    • Project delivery may be suspended<br/>
                    • Additional recovery charges may apply
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                Project Timeline & Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Project timelines are estimates and may vary based on complexity</li>
                <li>• Client feedback and approvals required within 48 hours</li>
                <li>• Delays caused by client may extend project deadline</li>
                <li>• Final delivery includes all agreed deliverables and documentation</li>
                <li>• Source files provided only after full payment clearance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Intellectual Property & Confidentiality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Ownership Rights</h4>
                  <p>All intellectual property rights transfer to client upon full payment completion</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Portfolio Usage</h4>
                  <p>We reserve the right to showcase completed work in our portfolio and marketing materials</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Confidentiality</h4>
                  <p>All client information and project details will be kept strictly confidential</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Revisions & Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Up to 3 free revisions included in base package</li>
                <li>• Additional revisions charged at ₹500-2000 per revision</li>
                <li>• Major changes considered as new project scope</li>
                <li>• 30 days free technical support post-delivery</li>
                <li>• Extended support available at additional cost</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Limitations & Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Service Limitations</h4>
                  <p>We are not responsible for third-party service issues, hosting problems, or domain-related issues</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Liability Disclaimer</h4>
                  <p>Our maximum liability is limited to the total project value paid by the client</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Force Majeure</h4>
                  <p>We are not liable for delays caused by circumstances beyond our reasonable control</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚫</span>
                Termination & Cancellation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Either party may terminate with 7 days written notice</li>
                <li>• Client pays for all completed work up to termination date</li>
                <li>• Refund policy applies for eligible cancellations</li>
                <li>• All delivered work and materials remain with respective owners</li>
                <li>• Outstanding payments must be cleared within 15 days</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Contact & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For any questions, concerns, or disputes regarding these terms, please contact us immediately. 
                We believe in resolving all issues through open communication and mutual understanding.
              </p>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="text-sm">
                  <strong>Contact Us:</strong> legal@veltrix.com | +91-XXXX-XXXXXX<br/>
                  <strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM IST<br/>
                  <strong>Jurisdiction:</strong> All disputes subject to Jaipur, Rajasthan courts
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};