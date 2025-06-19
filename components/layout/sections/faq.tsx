import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What web development services do you offer?",
    answer: "I specialize in creating modern websites, landing pages, e-commerce stores, and web applications. I work with technologies like React, Next.js, Node.js, and various CMS platforms to deliver high-quality, responsive websites.",
    value: "item-1",
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline depends on the project complexity. A simple landing page takes 3-5 days, a business website takes 1-2 weeks, and complex web applications can take 4-8 weeks. I'll provide a detailed timeline after understanding your requirements.",
    value: "item-2",
  },
  {
    question: "Do you provide website design along with development?",
    answer: "Yes! I offer complete web design and development services. This includes UI/UX design, responsive layouts, modern aesthetics, and conversion-focused landing pages that look great and perform well.",
    value: "item-3",
  },
  {
    question: "What's included in your website development package?",
    answer: "My packages include responsive design, mobile optimization, SEO basics, contact forms, social media integration, fast loading speeds, and 30 days of free support after launch. Custom features can be added based on your needs.",
    value: "item-4",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Absolutely! I provide website maintenance services including updates, security monitoring, performance optimization, content updates, and technical support. I offer both one-time fixes and monthly maintenance plans.",
    value: "item-5",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Yes, I implement SEO best practices during development including proper meta tags, structured data, page speed optimization, and mobile-friendly design. I can also help with basic digital marketing strategies for better online visibility.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};