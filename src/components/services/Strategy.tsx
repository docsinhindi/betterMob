import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

const checklists = [
  'Forge Collaborations: Connect international companies with MENA authorities',
  'Enable Knowledge Exchange: Share insights to enrich understanding.',
  'Drive Joint Efforts: Catalyze action for effective solutions.',
];

export default function Strategy() {
  return (
    <div className='pb-20 bg-white'>
      <Container>
        <div className='flex flex-wrap gap-7 lg:justify-between w-full lg:flex-row-reverse'>
          <div className='flex flex-col items-start justify-center max-w-[538px] mt-3'>
            <div className='h-8 w-[112px] bg-[#FFE377] uppercase flex items-center justify-center font-bold text-sm leading-[19px] tracking-[1.4px] text-[#404040]'>
              Strategy
            </div>

            <p className='mt-5 text-[48px] leading-[60px] font-semibold tracking-[-0.67px] text-black font-amiko'>
              Strategic Partnerships
            </p>

            <p className='mt-5 font-amiko text-lg leading-[28px] tracking-[0.2px] text-black'>
              At Better Mobility, collaboration is paramount in addressing urban transportation challenges. We connect
              international companies with MENA .
            </p>

            <div className='flex flex-col gap-5 mt-7'>
              {checklists.map((checklist,_) => (
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
              src='/services/strategy.png'
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
