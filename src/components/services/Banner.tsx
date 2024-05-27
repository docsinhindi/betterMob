import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <div className='py-10'>
        <Container>
          <div className='flex justify-center gap-5 items-end flex-wrap'>
            <div className='font-amiko font-semibold text-6xl max-md:text-4xl  leading-[74px] tracking-[-0.89px] max-w-[652px]'>
              We build bridges between <span className='text-[#787878]'>companies and customers</span>
            </div>

            <div className='font-amikotext-lg leading-7 text-[#292C3F] max-w-[458px]'>
              Upgrade your city&apos;s mobility experience with Better Mobility&apos;s innovative solutions. Embrace the future of
              transportation today.Empowering Cities, Transforming Journeys
            </div>
          </div>
        </Container>
      </div>

      <div className='relative w-full h-64 md:h-96 lg:h-[500px] mb-10'>
        <Image
          alt='Service Banner'
          src='/services/image.svg'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
      </div>
    </>
  );
}
