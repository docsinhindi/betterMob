/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Container from "../layout/page-layout";

const AboutCompany = () => {
  return (
    <Container className="py-20 space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between">
        <h2 className="text-6xl font-semibold">
          We build bridges between{" "}
          <span className="text-gray-400">companies and customers</span>
        </h2>
        <p className="text-lg">
          Upgrade your city's mobility experience with Better Mobility's
          innovative solutions. Embrace the future of transportation
          today.Empowering Cities, Transforming Journeys
        </p>
      </div>
      <Image
        src={"/about/png/about-company-bg.png"}
        alt="about background"
        width={1440}
        height={700}
      />
    </Container>
  );
};

export default AboutCompany;
