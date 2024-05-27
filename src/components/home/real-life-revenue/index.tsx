import Container from "@/components/layout/page-layout";
import Image from "next/image";

const REAL_LIFE_REVENUE_FEEDBACKS = [
  {
    title: "$2.5 M",
    subTitle: "Generate sales",
    description:
      "Using Better Mobility is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    user_logo: "/home/png/user-logo.png",
    name: "Nellie Foster",
    job: "Founder & CEO, Foster Business Strategies",
  },
  {
    title: "45%",
    subTitle: "Grew revenue",
    description:
      "Better Mobility is created for busy people. It’s the kind of process that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    user_logo: "/home/png/user-logo.png",
    name: "Lawrence Gibbs",
    job: "Digital Marketing Director",
  },
];

const RealLifeRevenueFeedbacks = () => {
  return (
    <ul className="divide-y divide-gray-700">
      {REAL_LIFE_REVENUE_FEEDBACKS?.map(
        ({ description, job, name, subTitle, title, user_logo }, i) => (
          <li key={i} className="grid grid-cols-1 md:grid-cols-3 py-10">
            <div className="space-y-6">
              <span className="block font-bold text-7xl">{title}</span>
              <p className="text-xl font-bold">{subTitle}</p>
            </div>
            <div className="space-y-3.5 col-span-2">
              <p className="font-normal text-3xl">{description}</p>
              <div className="flex items-center gap-3">
                <Image src={user_logo} alt="user logo" width={48} height={48} />
                <div>
                  <h4 className="font-bold text-base">{name}</h4>
                  <p className="font-normal text-base">{job}</p>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

const RealLifeRevenue = () => {
  return (
    <Container className="py-24 space-y-16 divide-y divide-gray-700">
      <div className="space-y-3">
        <h2 className="font-bold text-5xl">Real-life results and revenue</h2>
        <p className="text-lg font-normal">
          See how companies like yours have smashed their sales success goals
        </p>
      </div>
      <RealLifeRevenueFeedbacks />
    </Container>
  );
};

export default RealLifeRevenue;
