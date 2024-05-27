import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

const checklists = [
  'Market Insight: Provide analysis for strategic planning.',
  'Capacity Building: Offer training for MENA transport authorities.',
  'Event Planning: Assist in organizing advocacy events for public transport.',
];

export default function Service() {
  return (
    <div className='py-20 bg-white'>
      <Container>
        <div className='flex flex-wrap gap-7 lg:justify-between w-full'>
          <div className='flex flex-col items-start max-w-[538px] mt-3'>
            <div className='h-8 w-[85px] bg-[#FFE377] uppercase flex items-center justify-center font-bold text-sm leading-[19px] tracking-[1.4px] text-[#404040]'>
              Service
            </div>

            <p className='mt-5 text-[48px] leading-[60px] font-semibold tracking-[-0.67px] text-black font-amiko'>
              Support & Expertise
            </p>

            <p className='mt-5 font-amiko text-lg leading-[28px] tracking-[0.2px] text-black'>
              We provide comprehensive support and expertise, empowering stakeholders to navigate urban transportation
              challenges confidently. From market insight to capacity building and event planning, our tailored services
              drive positive change.
            </p>

            <div className='flex flex-col gap-5 mt-7'>
              {checklists.map((checklist , _) => (
                <div key={_} className='flex items-start gap-6'>
                  <Image
                    src='/services/greenTick.svg'
                    alt='greenTick'
                    width={24}
                    height={24}
                    className='mt-1'
                  />

                  <p className='font-amiko text-black max-w-[439px] text-lg leading-7 tracking-[0.2px]'>{checklist}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative w-full lg:w-[555px] h-[320px] md:h-[555px] lg:h-[555px]'>
            <Image
              src='/services/base.jpg'
              className='rounded-xl'
              alt='Service Base'
              layout='fill'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
