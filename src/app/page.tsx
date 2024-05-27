import Link from "next/link";
import Image from "next/image";
import { MdLanguage } from "react-icons/md";
import Services from "@/components/home/services";
import CompanyGoal from "@/components/home/company-goal";
import Suggestion from "@/components/home/suggestion";
import Opportunities from "@/components/home/opportunities";
import RealLifeRevenue from "@/components/home/real-life-revenue";
import Transporting from "@/components/home/transporting/indx";
import FrequentlyQuestions from "@/components/home/frequently-questions";
import Contact from "@/components/contact";
import FooterForm from "@/components/home/footer/footer-form";
import Commentary from "@/components/home/commentary";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div>
      {/* header section */}
      <Header />

      {/* banner section */}
      <HeroSection/>
      {/* services section */}
      <Services />

      {/* company goal section */}
      <CompanyGoal />

      {/* suggestions section */}
      <Suggestion />

      {/* opportunities section */}
      <Opportunities />

      {/* real life results section */}
      <RealLifeRevenue />

      {/* transporting section */}
      <Transporting />

      {/* commentary */}
      <Commentary />

      {/* frequently asked questions section */}
      <FrequentlyQuestions />

      {/* contact */}
      <Contact />

      {/* footer */}
      <Footer />
    </div>
  );
}
