import Image from "next/image";
import Link from "next/link";
import FooterForm from "../home/footer/footer-form";
import { MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-blue via-[#384572] to-dark-blue">
      <div className="container mx-auto p-10 flex flex-col gap-40 divide-y divide-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
          <div className="space-y-7">
            <Image
              src={"/home/png/logo-removebg-preview.png"}
              alt="footer logo"
              width={263}
              height={57}
            />
            <p className="text-white text-sm">
              Better Mobility connects international companies with MENA
              authorities to address mobility challenges and supports
              organizations in exploring the region, from capacity-building to
              event planning for sustainable public transport solutions.
            </p>
          </div>
          <ul className="space-y-5">
            <li className="font-bold text-white text-base">Company</li>
            <li>
              <Link
                className="text-sm transition-all text-white hover:underline"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all text-white hover:underline"
                href={"/"}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all text-white hover:underline"
                href={"/"}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all text-white hover:underline"
                href={"/"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all text-white hover:underline"
                href={"/"}
              >
                Careers
              </Link>
            </li>
          </ul>

          <FooterForm />
        </div>
        <div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center justify-between py-5">
          <p className="text-white text-sm">© Copyright 2022 Ishfaque, Inc.</p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-12 text-sm text-white">
            <li className="transition-all hover:underline">
              <Link href={""}>Terms of Service</Link>
            </li>
            <li className="transition-all hover:underline">
              <Link href={""}>Privacy Policy</Link>
            </li>
            <li className="transition-all hover:underline">
              <Link href={""}>Cookies</Link>
            </li>
          </ul>
          <p className="flex items-center gap-2 text-white">
            English <MdLanguage />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
