import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
 {
    title: "Basic",
    popular: 0,
    price: 5000,
    description:
      "Get a simple landing page like food delivery, e-commerce, restaurant, café, fast food, or real estate.",
    buttonText: "Start Now",
    benefitList: [
      "Landing page design",
      "Domain and hosting included",
      "Support: 3 months"
    ],
  },
  {
    title: "Standard",
    popular: 1,
    price: 30000,
    description:
      "Complete dynamic website or software tailored for your business needs.",
    buttonText: "Get Started",
    benefitList: [
      "Dynamic website/software",
      "Domain and hosting included",
      "Support: 1 year"
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: 50000,
    description:
      "Custom software, website, or application built exactly as per your requirement.",
    buttonText: "Contact Us",
    benefitList: [
      "Fully customized solution",
      "Domain and hosting included",
      "Support: Lifetime"
    ],
  }
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
       Choose the perfect plan for your business. Whether you need a simple landing page or a complete custom solution, we’ve got you covered.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /-</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
