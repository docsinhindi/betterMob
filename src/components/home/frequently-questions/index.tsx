import Container from "@/components/layout/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTION_ITEMS = [
  {
    value: "item-1",
    title: "How Does Better Mobility To The Competition?",
    content:
      "Better Mobility stands out for its holistic approach, combining technology, sustainability, and collaboration to drive impactful change in urban transportation.",
  },
  {
    value: "item-2",
    title: "How does Better Mobility support international companies in MENA?",
    content:
      "Better Mobility stands out for its holistic approach, combining technology, sustainability, and collaboration to drive impactful change in urban transportation.",
  },
  {
    value: "item-3",
    title: "How does Better Mobility support international companies in MENA?",
    content:
      "Better Mobility stands out for its holistic approach, combining technology, sustainability, and collaboration to drive impactful change in urban transportation.",
  },
];

const FrequentlyQuestions = () => {
  return (
    <div className="bg-gradient-to-r from-dark-blue via-[#384572] to-dark-blue">
      <Container className="py-[90px] space-y-[72px]">
        <h2 className="text-white text-3xl md:text-6xl font-bold">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {QUESTION_ITEMS?.map(({ content, title, value }, i) => (
            <AccordionItem key={i} value={value}>
              <AccordionTrigger className="text-xl md:text-3xl text-white">
                {title}
              </AccordionTrigger>
              <AccordionContent className="text-white text-md md:text-lg">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FrequentlyQuestions;
