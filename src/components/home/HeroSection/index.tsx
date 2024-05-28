import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative py-32 text-white bg-dark-blue overflow-hidden">

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/banner_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 z-10"></div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 py-16 lg:py-24">
        
        <div className="flex-[6] flex justify-center">
          {/* Add any image if needed */}
          {/* <Image src={"/services/howWeWorks.jpg"} alt="hero image" width={400} height={400} className="self-center" /> */}
        </div>
        
        <div className="flex-[4] text-center lg:text-left px-3 md:px-0">
          <h1 className="text-4xl font-semibold md:text-[55px] md:leading-[65px] stroke-black stroke-2">
            Bringing companies and customers together, anywhere
          </h1>
          <p className="mt-4 text-md md:text-lg text-slate-200">
            Upgrade your city&apos;s mobility experience with Better Mobility&apos;s innovative solutions. Embrace the future of transportation today. Empowering Cities, Transforming Journeys
          </p>
          <Link href="/contactUs" className="mt-8 inline-block px-9 py-[14px] text-sm bg-white text-[#3c4c84] font-semibold rounded hover:bg-gray-200">
            Contact us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
