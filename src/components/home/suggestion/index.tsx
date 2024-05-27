import Container from "@/components/layout/page-layout";
import Image from "next/image";
import Link from "next/link";
import { IoMdWallet } from "react-icons/io";

const SUGGESTION_ITEMS = [
  {
    highligh: "Solutions",
    title: "We provide customers with tailored and unique solutions",
    description:
      "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
    chances: [
      {
        text: "Close more deals with single-page contact management",
      },
      {
        text: "Enjoy one-click calling, call scripts and voicemail automation",
      },
      {
        text: "Track stages and milestones of your deals to keep the sales process on track",
      },
    ],
    src: "/home/png/unique-solution-bg.png",
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
];

const Suggestion = () => {
  return (
    <Container className="py-[70px]">
      <ul className="space-y-20">
        {SUGGESTION_ITEMS?.map(
          ({ chances, description, highligh, src, title }, i) => (
            <li
              key={i}
              className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 first:border-t-2 even:flex-row-reverse"
            >
              <div className="flex-1 flex flex-col gap-3.5">
                <span className="w-fit rounded-md text-gray-800 uppercase font-semibold text-sm py-2 px-2.5 bg-[#FFE377]">
                  {highligh}
                </span>
                <h2 className="font-bold text-5xl">{title}</h2>
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
                {i === 0 ? (
                  <div className="bg-white p-8 rounded-2xl space-y-5 absolute right-10 top-20 w-1/2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <span className="block font-semibold text-2xl">
                          3343
                        </span>
                        <p className="font-normal text-sm text-[#787878]">
                          Daily average services
                        </p>
                      </div>
                      <IoMdWallet />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="w-1/2 h-2 rounded-full bg-dark-blue"></div>
                      </div>
                      50%
                    </div>
                  </div>
                ) : i === 1 ? (
                  <div className="p-3 bg-dark-blue flex items-center justify-between gap-10 rounded-lg">
                    <p className="text-white font-semibold text-lg">
                      We make your business grow
                    </p>
                    <Link href={"/"} className="bg-white py-4 px-6 rounded-lg">
                      Start now
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default Suggestion;
