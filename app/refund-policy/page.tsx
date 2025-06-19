import { RefundPolicy } from "@/components/layout/sections/RefundPolicy";

export const metadata = {
  title: "Refund Policy - veltrix",
  description: "Our refund policy for digital services including website development, landing page design, and website design services",
  openGraph: {
    title: "Refund Policy - veltrix",
    description: "Our refund policy for digital services including website development, landing page design, and website design services",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <RefundPolicy />
    </div>
  );
}