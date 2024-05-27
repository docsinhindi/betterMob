import Container from "@/components/layout/page-layout";
import Image from "next/image";

const COMPANY_GOAL_ITEMS = [
  {
    src: "/home/svg/solution.svg",
    title: "Smart Transportation Solutions",
    description:
      "Revolutionize your city's mobility with innovative tech and strategic planning. Our solutions optimize efficiency and enhance the commuter experience.",
  },
  {
    src: "/home/svg/initiative.svg",
    title: "Sustainable Mobility Initiatives",
    description:
      "Embrace eco-friendly solutions, from electric vehicles to green infrastructure.",
  },
  {
    src: "/home/svg/service.svg",
    title: "Personalized Mobility Services",
    description:
      "Tailor transportation to your community's needs with customizable routes and user-friendly interfaces.",
  },
];

const CompanyGoalItems = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {COMPANY_GOAL_ITEMS?.map(({ description, src, title }, i) => {
        return (
          <li key={i} className="px-7 py-9 border border-white rounded-lg">
            <div className="w-28 h-28 bg-white rounded-full mx-auto mb-10 flex items-center justify-center">
              <Image
                src={src}
                alt="company goal solution icon"
                width={64}
                height={60}
              />
            </div>
            <hr className="mb-4" />
            <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
            <p className="font-normal text-base text-white">{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

const CompanyGoal = () => {
  return (
    <div className="bg-dark-blue">
      <Container className="py-28 space-y-20">
        <div className="flex items-center justify-between gap-14">
          <h2 className="font-semibold text-xl md:text-[42px] text-white">
            Helping companies transform their business and technology
          </h2>
          <p className="font-normal text-md  md:text-lg text-white">
            Build more meaningful and lasting relationships — better understand
            their needs, identify new opportunities to help, address any
            problems faster.
          </p>
        </div>

        <CompanyGoalItems />
      </Container>
    </div>
  );
};

export default CompanyGoal;
