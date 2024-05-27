import Container from "@/components/layout/page-layout";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

const COMMENTARY_ITEMS = [
  {
    description:
      "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
    user_logo: "/home/png/user-logo.png",
    name: "Lola Ross",
    position: "Digital Marketing Director",
  },
];

const CommentaryItems = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {COMMENTARY_ITEMS?.map(
        ({ description, name, position, user_logo }, i) => (
          <li key={i} className="space-y-6">
            <RiDoubleQuotesL className="text-9xl fill-dark-blue m-0 p-0" />
            <div className="border"></div>
            <p className="text-2xl font-medium">{description}</p>
            <div className="flex items-center gap-3">
              <Image src={user_logo} alt="commentator" width={48} height={48} />
              <div>
                <h3 className="font-bold text-base">{name}</h3>
                <p className="font-normal text-base">{position}</p>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

const Commentary = () => {
  return (
    <Container className="py-32 space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
        <h2 className="font-bold text-5xl">
          We love our Customers and They love us too
        </h2>
        <p className="font-medium text-xl flex items-center gap-1 cursor-pointer ml-auto">
          See all
          <IoIosArrowForward />
        </p>
      </div>

      <CommentaryItems />
    </Container>
  );
};

export default Commentary;
