import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { LuShip } from "react-icons/lu";
import { PiPackageLight } from "react-icons/pi";
import TransparentPricingIcon from "/public/home/svg/transparent-pricing-icon.svg";

const OPPORTUNITIES_ITEMS = [
  {
    icon: PiPackageLight,
    text: "Safe Package",
    fill: "#FFD550",
    stroke: "none",
  },
  {
    icon: LuShip,
    text: "Ship Everywhere",
    fill: "none",
    stroke: "#FFD550",
  },
  {
    icon: GrLanguage,
    text: "Global Tracking",
    fill: "none",
    stroke: "#FFD550",
  },
  {
    icon: BiSupport,
    text: "24/7 Support",
    fill: "#FFD550",
    stroke: "none",
  },
  {
    icon: IoTimeOutline,
    text: "In Time Delivery",
    fill: "none",
    stroke: "#FFD550",
  },
  {
    icon: TransparentPricingIcon,
    text: "Transparent Pricing",
    fill: "none",
    stroke: "#FFD550",
  },
];

const OpportunitiesItems = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
      {OPPORTUNITIES_ITEMS?.map(({ text, icon: Icon, fill, stroke }, i) => (
        <li key={i} className="flex items-center gap-5">
          <div className="p-5 bg-dark-blue rounded-full w-fit">
            <Icon
              width={24}
              height={26}
              fill={fill}
              stroke={stroke}
              className="text-2xl"
            />
          </div>
          <p className="font-normal text-dark-blue text-xl">{text}</p>
        </li>
      ))}
    </ul>
  );
};

const Opportunities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-20 py-32 bg-dark-blue">
        <Image
          src={"/home/png/opportunities-bg.png"}
          alt="opportunities section img"
          width={570}
          height={380}
          className="mx-auto"
        />
      </div>

      <div className="bg-zinc-100 py-16 px-14">
        <div className="space-y-3 mb-4">
          <span className="relative w-fit font-normal text-sm text-dark-blue before:border-2 before:absolute before:top-0 before:left-0 before:h-full before:border-dark-blue bg-gray-100 py-1 px-2">
            Why Choose
          </span>
          <h2 className="text-4xl font-semibold text-dark-blue">
            We create opportunity to reach potential
          </h2>
        </div>
        <p className="font-medium text-base text-[#666C89] mb-16">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition.
        </p>

        <OpportunitiesItems />
      </div>
    </div>
  );
};

export default Opportunities;
