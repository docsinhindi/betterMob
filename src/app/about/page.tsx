import AboutCompany from "@/components/about";
import Contact from "@/components/about/contact";
import HowWeWorks from "@/components/about/how-we-works";
import OurPower from "@/components/about/our-power";
import AboutServices from "@/components/about/service";
import Statistics from "@/components/about/statistics";
import AboutSuggestion from "@/components/about/suggestion.tsx";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const About = () => {
  return (
    <>
      <Header />
      <AboutCompany />
      <AboutServices />
      <HowWeWorks />
      <AboutSuggestion />
      <OurPower />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
};

export default About;
