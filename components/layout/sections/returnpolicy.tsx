import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ReturnPolicy = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Return Policy</h1>
          <p className="text-xl text-muted-foreground">
            Our commitment to customer satisfaction
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔄</span>
                Return Window
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You have <strong>30 days</strong> from the date of purchase to return any item. 
                All returns must be initiated within this timeframe to be eligible for a full refund.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Items must be in original condition and packaging</li>
                <li>• Products should be unused and undamaged</li>
                <li>• Original receipt or proof of purchase required</li>
                <li>• Digital products are non-refundable unless defective</li>
                <li>• Custom or personalized items cannot be returned</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Full Refund:</strong> Items returned within 14 days in perfect condition
                </p>
                <p>
                  <strong>Partial Refund:</strong> Items returned between 15-30 days may be subject to a 15% restocking fee
                </p>
                <p>
                  <strong>Processing Time:</strong> Refunds are processed within 5-7 business days after we receive your return
                </p>
                <p>
                  <strong>Payment Method:</strong> Refunds will be issued to the original payment method
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                How to Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold mb-2">Step 1: Contact Us</h4>
                  <p>Email us at returns@veltrix.com with your order number and reason for return</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 2: Get Authorization</h4>
                  <p>Well provide you with a Return Authorization Number (RAN) and shipping instructions</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 3: Ship Items</h4>
                  <p>Package items securely and include the RAN in your return package</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Step 4: Get Refund</h4>
                  <p>Once we receive and inspect your return, well process your refund</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p>• Customer is responsible for return shipping costs</p>
                <p>• We recommend using trackable shipping methods</p>
                <p>• Veltrix is not responsible for lost return packages</p>
                <p>• Damaged items during return shipping may not be eligible for full refund</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">❌</span>
                Non-Returnable Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Gift cards and promotional items</li>
                <li>• Downloaded software or digital content</li>
                <li>• Perishable goods</li>
                <li>• Items damaged by misuse or normal wear</li>
                <li>• Products without original packaging or tags</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> returns@veltrix.com</p>
                <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM IST</p>
                <p className="mt-4 text-sm">
                  This return policy was last updated on June 19, 2025. We reserve the right to 
                  modify this policy at any time with prior notice.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};