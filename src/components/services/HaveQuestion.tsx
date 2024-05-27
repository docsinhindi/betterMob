import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

export default function HaveQuestion() {
  return (
    <div className='relative w-full bg-[#292C3F] py-16'>
      <div className='absolute flex items-end right-0 bottom-0  md:w-[130px] md:h-[34.8%] lg:w-[200px] lg:h-[67.2%] xl:w-[300px] xl:h-[95.8%] 2xl:h-[95.5%] 2xl:w-[400px] bg-white'>
        <div className='relative w-full md:h-[100px] xl:h-[364px] lg:h-[300px] max-md:h-[250px]'>
          <Image
            src={'/services/shape.jpg'}
            alt='shape'
            layout='fill'
            objectFit='cover'
            quality={100}
            priority
          />
        </div>
      </div>
      <Container>
        <div className='flex justify-between flex-wrap items-end gap-7'>
          <div>
            <p className='max-w-[627px] font-amiko text-[64px] max-md:text-[44px] leading-[74px] max-md:leading-[60px] tracking-[-0.89px] text-white'>
              Have a question? Our team is happy to assist you
            </p>

            <p className='max-w-[555px] font-amiko text-lg leading-7 mt-8 text-white'>
              Ask about Better Mobility system, pricing, implementation, or anything else. Our highly trained reps are
              standing by, ready to help.
            </p>

            <div className='w-full max-w-[555px] h-[1px] bg-white/25 mt-12 mb-8' />

            <div className='flex items-center max-md:justify-center flex-wrap max-md:gap-5'>
              <button className='flex items-center justify-center w-[198px] h-[64px] bg-white rounded-md font-bold text-lg leading-6 tracking-[-0.25px] text-black hover:opacity-80'>
                Contact Us
                <Image
                  src='/services/arrowRight.png'
                  alt='arrowRight'
                  width={24}
                  height={24}
                  className='ml-5'
                />
              </button>

              <p className='md:ml-20 font-bold text-lg leading-6 tracking-[-0.25px] text-white'>
                Or call <span className='underline'>+12 3456 7890</span>
              </p>
            </div>
          </div>

          <div className='absolute max-sm:relative max-sm:flex max-sm:justify-center max-sm:w-full md:right-[0.5%] md:bottom-[2%] lg:right-[5%] lg:bottom-[10%] xl:right-[8%] xl:bottom-[5%] 2xl:right-[5%] 2xl:bottom-[5%]'>
            <div className='relative h-[300px] w-[300px] md:h-[200px] md:w-[200px] lg:h-[350px] lg:w-[350px] xl:h-[555px] xl:w-[458px] z-30'>
              <Image
                src='/services/avatar2.svg'
                alt='avatar1'
                layout='fill'
                objectFit='contain'
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
