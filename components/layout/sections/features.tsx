// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Icon } from "@/components/ui/icon";
// import { icons } from "lucide-react";

// interface FeaturesProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// const featureList: FeaturesProps[] = [
//   {
//     icon: "TabletSmartphone",
//     title: "Mobile Friendly",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
//   },
//   {
//     icon: "BadgeCheck",
//     title: "Social Proof",
//     description:
//       "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "Goal",
//     title: "Targeted Content",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
//   },
//   {
//     icon: "PictureInPicture",
//     title: "Strong Visuals",
//     description:
//       "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
//   },
//   {
//     icon: "MousePointerClick",
//     title: "Clear CTA",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
//   },
//   {
//     icon: "Newspaper",
//     title: "Clear Headline",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
//   },
// ];

// export const FeaturesSection = () => {
//   return (
//     <section id="features" className="container py-24 sm:py-16">
//       <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
//         Features
//       </h2>

//       <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
//         What Makes Us Different
//       </h2>

//       <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
//         fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
//         facere tenetur.
//       </h3>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {featureList.map(({ icon, title, description }) => (
//           <div key={title}>
//             <Card className="h-full bg-background border-0 shadow-none">
//               <CardHeader className="flex justify-center items-center">
//                 <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
//                   <Icon
//                     name={icon as keyof typeof icons}
//                     size={24}
//                     color="hsl(var(--primary))"
//                     className="text-primary"
//                   />
//                 </div>

//                 <CardTitle>{title}</CardTitle>
//               </CardHeader>

//               <CardContent className="text-muted-foreground text-center">
//                 {description}
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Fully responsive designs that work flawlessly across all devices. Your website looks perfect on smartphones, tablets, and desktops with optimized performance and touch-friendly interfaces.",
  },
  {
    icon: "BadgeCheck",
    title: "Quality Assurance",
    description:
      "Rigorous testing ensures bug-free, reliable applications. We follow industry best practices and deliver production-ready code that meets the highest quality standards.",
  },
  {
    icon: "Goal",
    title: "Targeted Solutions",
    description:
      "Custom-built applications designed specifically for your business goals. We understand your requirements and deliver solutions that align perfectly with your objectives.",
  },
  {
    icon: "PictureInPicture",
    title: "Modern UI/UX",
    description:
      "Stunning visuals combined with intuitive user experiences. Our designs follow the latest trends while ensuring easy navigation and high engagement rates.",
  },
  {
    icon: "MousePointerClick",
    title: "Fast Performance",
    description:
      "Lightning-fast loading times and smooth interactions. We optimize every aspect of your application for maximum speed and efficiency using cutting-edge technologies.",
  },
  {
    icon: "Newspaper",
    title: "SEO Optimized",
    description:
      "Built-in SEO best practices to improve your search rankings. Clean code structure, proper meta tags, and fast loading ensure better visibility on search engines.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-16">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We combine technical expertise with creative innovation to deliver 
        exceptional digital solutions. Our full-stack development approach ensures 
        every project is built to scale, perform, and exceed expectations.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};