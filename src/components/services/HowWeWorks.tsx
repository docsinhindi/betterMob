import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

const workSteps = [
  {
    name: 'Warehousing Services',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ',
    icon: '/services/work1.svg',
  },
  {
    name: 'Safety & Quality',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ',
    icon: '/services/work2.svg',
  },
  {
    name: 'Care for Environment',
    description: 'Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking ',
    icon: '/services/work3.svg',
  },
];

export default function HowWeWorks() {
  return (
    <div className='bg-[#F4F4F4] py-20'>
      <Container>
        <div className='flex flex-col items-center'>
          <div className='flex'>
            <div className='w-1 h-6 bg-[linear-gradient(94.06deg,#1C1F35_-1.21%,#1C1F35_58.66%,#407BFF_116.84%)]' />

            <div className='py-1 px-2.5 bg-[#E8E8E880] text-[#1C1F35] leading-4 text-sm font-rubik'>Our Goodness</div>
          </div>

          <p className='mt-5 text-[35px] leading-[42px] font-semibold text-[#1C1F35] font-rubik'>How We Works</p>

          <div className='flex justify-center gap-16 mt-16 w-full flex-wrap'>
            <div className='relative w-full lg:w-[600px] h-64 md:h-96 lg:h-[460px]'>
              <Image
                src='/services/howWeWorks.jpg'
                alt='How We Works'
                layout='fill'
                objectFit='cover'
                quality={100}
                priority
              />
            </div>

            <div className='flex flex-col gap-14'>
              {workSteps.map((step) => (
                <div
                  key={step.name}
                  className='flex gap-6 items-start'
                >
                  <Image
                    src={step.icon}
                    alt={step.name}
                    width={45}
                    height={50}
                    objectFit='cover'
                  />
                  <div className='max-w-[384px] mt-1.5'>
                    <p className='text-[#1C1F35] font-rubik font-medium text-2xl leading-[30px]'>{step.name}</p>
                    <p className='mt-3 text-[#666C89] font-krub font-medium text-base leading-6'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
