import Container from "@/components/layout/page-layout";
import Image from "next/image";

const SUGGESTION_ITEMS = [
  {
    highligh: "Service",
    title: "Support & Expertise",
    description:
      "We provide comprehensive support and expertise, empowering stakeholders to navigate urban transportation challenges confidently. From market insight to capacity building and event planning, our tailored services drive positive change.",
    chances: [
      {
        text: "Market Insight: Provide analysis for strategic planning.",
      },
      {
        text: "Capacity Building: Offer training for MENA transport authorities.",
      },
      {
        text: "Event Planning: Assist in organizing advocacy events for public transport.",
      },
    ],
    src: "/home/png/expertise-bg.png",
  },
  {
    highligh: "Strategy",
    title: "Strategic Partnerships",
    description:
      "At Better Mobility, collaboration is paramount in addressing urban transportation challenges. We connect international companies with MENA.",
    chances: [
      {
        text: "Forge Collaborations: Connect international companies with MENA authorities",
      },
      {
        text: "Enable Knowledge Exchange: Share insights to enrich understanding.",
      },
      {
        text: "Drive Joint Efforts: Catalyze action for effective solutions.",
      },
    ],
    src: "/home/png/partnership-bg.png",
  },
];

const AboutSuggestion = () => {
  return (
    <Container className="py-[70px]">
      <ul className="space-y-20">
        {SUGGESTION_ITEMS?.map(
          ({ chances, description, highligh, src, title }, i) => (
            <li
              key={i}
              className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 even:flex-row-reverse"
            >
              <div className="flex-1 flex flex-col gap-3.5">
                <span className="w-fit rounded-md text-gray-800 uppercase font-semibold text-sm py-2 px-2.5 bg-[#FFE377]">
                  {highligh}
                </span>
                <h2 className="font-semibold text-5xl">{title}</h2>
                <p className="text-lg font-normal">{description}</p>
                <ul className="space-y-4">
                  {chances?.map(({ text }, i) => (
                    <li key={i} className="flex items-start gap-6">
                      <Image
                        src={"/home/svg/check.svg"}
                        alt="check icon"
                        width={24}
                        height={24}
                      />
                      <p className="text-lg font-normal">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative py-12 px-16 bg-[#F4F4F4] rounded-lg shadow-2xl w-fit">
                <Image
                  src={src}
                  alt="unique solution bg img"
                  width={420}
                  height={460}
                />
              </div>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default AboutSuggestion;
