import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
      <div className=" relative py-20 text-white">

         <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-8 "
      >
        <source src="/banner_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="relative z-10 max-w-[1500px] mx-auto px-2 flex flex-[10] flex-col items-center lg:flex-row gap-0 md:gap-10">
            <div className="flex justify-center flex-[6] bg-gradient-to-r ">
            
        {/* <Image src={"/services/howWeWorks.jpg"} alt="hero image" width={400} height={400} className="self-center" /> */}
        </div>
        <div className="max-w-4xl flex-[4] py-16 px-3 md:px-0 ">
        <h1 className="text-4xl font-semibold md:text-[55px] md:leading-[65px]">
          Bringing companies and customers together, anywhere
        </h1>
        <p className="mt-4 text-md md:text-lg text-slate-200">
            Upgrade your city&apos;s mobility experience with Better Mobility&apos;s innovative solutions. Embrace the future of transportation today.
            Empowering Cities, Transforming Journeys
          </p>
          <Link href={"/contactUs"} className="mt-8 inline-block px-9 py-[14px] text-sm bg-white text-[#3c4c84] font-semibold rounded hover:bg-gray-200">
            Contact us
          </Link>
        </div></div>
      </div>
    );
  };
  
  export default HeroSection;
  