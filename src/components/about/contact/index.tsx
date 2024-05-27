import Container from "@/components/layout/page-layout";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative bg-dark-blue py-32">
      <Container className="flex flex-col md:flex-row items-center gap-40">
        <div className="flex flex-col gap-10">
          <div className="space-y-8">
            <h2 className="text-6xl font-normal text-white">
              Have a question? Our team is happy to assist you
            </h2>
            <p className="text-lg text-white">
              Ask about Better Mobility system, pricing, implementation, or
              anything else. Our highly trained reps are standing by, ready to
              help.
            </p>
          </div>
          <div className="border border-gray-600"></div>
          <div className="flex flex-col sm:flex-row items-center gap-12">
            <Link
              className="px-8 py-5 bg-white rounded-md flex items-center gap-7 font-bold"
              href={"/"}
            >
              Contact Us <IoIosArrowForward />
            </Link>
            <Link
              className="text-white font-bold text-lg"
              href={"tel:+1234567890"}
            >
              Or call <span className="underline">+12 3456 7890</span>
            </Link>
          </div>
        </div>
        <Image
          src={"/about/png/owner-img.png"}
          alt="owner img"
          width={458}
          height={555}
        />
      </Container>
    </div>
  );
};

export default Contact;
