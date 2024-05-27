import Container from "@/components/layout/page-layout";
import Image from "next/image";

const HoW_WE_WORKS_ITEMS = [
  {
    src: "/about/svg/warehousing-services.svg",
    title: "Warehousing Services",
    description:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking",
  },
  {
    src: "/about/svg/safety-quality.svg",
    title: "Safety & Quality",
    description:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking",
  },
  {
    src: "/about/svg/environment.svg",
    title: "Care for Environment",
    description:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking",
  },
];

const HowWeWorks = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-20 space-y-20">
        <div className="text-center space-y-5">
          <span className="relative w-fit font-normal text-xl before:border-2 before:absolute before:top-0 before:left-0 before:h-full before:border-dark-blue bg-gray-100 py-1 px-2">
            Our Goodness
          </span>
          <h2 className="font-semibold text-4xl">How We Works</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-24">
          <Image
            src={"/about/png/how-we-works.png"}
            alt="how we work image"
            width={594}
            height={460}
          />

          <ul className="space-y-14">
            {HoW_WE_WORKS_ITEMS?.map(({ description, src, title }, i) => (
              <li key={i} className="flex items-start gap-5">
                <Image
                  src={src}
                  alt={title + " " + "icon"}
                  width={47}
                  height={53}
                />
                <div className="space-y-3">
                  <h3 className="font-medium text-2xl">{title}</h3>
                  <p className="font-medium text-base">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWorks;
