import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

const services = [
  {
    name: 'Transport Consultancy',
    description: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: '/services/service1.svg',
  },
  {
    name: 'Vertical & Horizontal Transportation Systems Consultant',
    description: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: '/services/service2.svg',
  },
  {
    name: 'Business opportunities',
    description: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: '/services/service3.svg',
    height: 115,
    width: 65,
  },
  {
    name: 'International and non- profit',
    description: 'Following the quality of our service thus having gained trust of our many clients.',
    icon: '/services/service4.svg',
  },
];

export default function WhatWeDo() {
  return (
    <div className='pt-5 mb-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <div className='flex'>
            <div className='w-1 h-6 bg-[linear-gradient(94.06deg,#FFB629_-1.21%,#FFDA56_58.66%,#FFD7A6_116.84%)]' />

            <div className='py-1 px-2.5 bg-[#E8E8E880] text-[#1C1F35] leading-4 text-sm font-rubik'>What We Do</div>
          </div>

          <p className='mt-5 text-[35px] leading-[42px] font-semibold text-[#1C1F35] font-rubik'>Our Services</p>

          <div className='flex flex-col gap-12 mt-16'>
            {[0, 2].map((i) => (
              <div
                key={i}
                className='flex justify-center gap-10 flex-wrap'
              >
                {services.slice(i, i + 2).map((service) => (
                  <div
                    key={service.name}
                    className='flex items-start '
                  >
                    <div className='w-[75px] flex justify-center'>
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={service.width || 50}
                        height={service.height || 54}
                      />
                    </div>

                    <div className='h-[105px] border-l border-[#D8D8D8] ml-6 mr-6' />

                    <div className='max-w-[270px]'>
                      <p className='font-rubik mb-3 text-2xl text-[#1C1F35] leading-[30px]'>{service.name}</p>
                      <p className='font-krub text-[#666C89] font-medium text-base leading-6'>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className='mt-12 mb-10'>
            <button className='w-[194px] h-[60px] bg-[#091242] text-white rounded-lg font-krub font-semibold text-base leading-5 hover:opacity-80'>
              More Works
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
