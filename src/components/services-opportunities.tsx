import Image from "next/image";

const ServicesOpportunities = ({
  description,
  src,
  title,
}: {
  description: string;
  src: string;
  title: string;
}) => {
  return (
    <li className="flex place-items-start gap-6">
      <Image
        src={src}
        alt={title + "icon"}
        width={50}
        height={53}
        className="place-items-start"
      />
      <span className="border h-full"></span>
      <div className="flex flex-col gap-2">
        <h3 className="font-normal text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ServicesOpportunities;
