"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/veltrix.png",
    name: "Aarav Mehta",
    userName: "Owner, QuickBite Corner",
    comment:
      "The fast food ordering app they built for us is intuitive and fast. Customers love the smooth experience and real-time order tracking!",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Pooja Sharma",
    userName: "Founder, FashionKart",
    comment:
      "They delivered our eCommerce app on time with all key features like payment integration, order management, and a clean UI. Great job!",
    rating: 4.9,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Rohit Kapoor",
    userName: "Director, Elite Realty",
    comment:
      "Our real estate platform now looks professional and functions perfectly. Users can easily browse properties and book appointments.",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Simran Kaur",
    userName: "Manager, TableTreats Restaurant",
    comment:
      "From table reservations to online menus, they built us a restaurant app that covers everything. The support has been excellent too!",
    rating: 4.8,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Aditya Singh",
    userName: "Co-founder, Urban Essentials",
    comment:
      "We needed a multipurpose delivery app for groceries and household items. They delivered a full-stack solution with admin control!",
    rating: 5.0,
  },
  {
    image: "https://github.com/veltrix.png",
    name: "Neha Verma",
    userName: "Owner, Café Bliss",
    comment:
      "Our café app has improved our customer loyalty and ease of ordering. Their UI design and backend support are top-notch!",
    rating: 4.9,
  },
];


export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 100+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
