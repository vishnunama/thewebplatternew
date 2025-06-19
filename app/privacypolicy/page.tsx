import { PrivacyPolicy } from "@/components/layout/sections/privacypolicy";

export const metadata = {
  title: "Privacy Policy - veltrix",
  description: "Our Privacy Policy for digital services including website development, landing page design, and website design services",
  openGraph: {
    title: "Privacy Policy - veltrix",
    description: "Our Privacy Policy for digital services including website development, landing page design, and website design services",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <PrivacyPolicy />
    </div>
  );
}