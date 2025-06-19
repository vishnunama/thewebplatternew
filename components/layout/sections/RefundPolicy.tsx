import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RefundPolicy = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
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
                <span className="text-2xl">⏰</span>
                Refund Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>48-Hour Window:</strong> Full refund available if project is cancelled within 48 hours of initial payment and before work begins.
                </p>
                <p>
                  <strong>After Work Begins:</strong> Refunds are calculated based on work completed and project milestones achieved.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Service-Specific Refund Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">Website Development</h4>
                  <p className="text-muted-foreground text-sm">
                    • Before design approval: 80% refund<br/>
                    • After design approval: 50% refund<br/>
                    • After development starts: 25% refund<br/>
                    • After final delivery: No refund
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">Landing Page Design</h4>
                  <p className="text-muted-foreground text-sm">
                    • Before first draft: 90% refund<br/>
                    • After first revision: 60% refund<br/>
                    • After final approval: No refund
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Website Design</h4>
                  <p className="text-muted-foreground text-sm">
                    • Before mockup delivery: 85% refund<br/>
                    • After design revisions: 40% refund<br/>
                    • After final files delivery: No refund
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                Refund Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Project requirements were not met as per initial agreement</li>
                <li>• Significant delays caused by our team (beyond agreed timeline)</li>
                <li>• Technical issues that cannot be resolved</li>
                <li>• Quality of work doesn't match the promised standards</li>
                <li>• Project cancellation due to our inability to deliver</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">❌</span>
                Non-Refundable Situations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Change in client requirements after project approval</li>
                <li>• Client-caused delays or non-responsiveness</li>
                <li>• Completed work as per agreed specifications</li>
                <li>• Third-party costs (domains, hosting, licenses)</li>
                <li>• Work completed beyond 30 days from delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Request Submission</h4>
                  <p>Email your refund request to refunds@veltrix.com with project details</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 2: Review Process</h4>
                  <p>We'll review your case within 3-5 business days</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 3: Decision & Processing</h4>
                  <p>Approved refunds are processed within 7-10 business days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We strive for 100% client satisfaction. Before requesting a refund, we encourage 
                discussing any concerns with our team. We often can resolve issues through 
                revisions, additional support, or alternative solutions.
              </p>
              <div className="mt-4 p-4 bg-background rounded-lg">
                <p className="text-sm">
                  <strong>Contact Us:</strong> refunds@veltrix.com | +91-XXXX-XXXXXX<br/>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};