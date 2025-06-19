import { ReturnPolicy } from "@/components/layout/sections/ReturnPolicy";
export const metadata = {
  title: "Return Policy - veltrix",
  description: "Learn about our return policy, refund process, and how to return items purchased from veltrix",
  openGraph: {
    title: "Return Policy - veltrix",
    description: "Learn about our return policy, refund process, and how to return items purchased from veltrix",
  },
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen">
      <ReturnPolicy />
    </div>
  );
}