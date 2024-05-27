import React from 'react';
import Container from '../ui/container';
import Image from 'next/image';

const counts = [
  {
    title: 'Team member vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    count: 290,
  },
  {
    title: 'Team member vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    count: 290,
  },
  {
    title: 'Team member vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    count: 290,
  },
];

export default function TogetherWeStrong() {
  return (
    <Container>
      <div className='w-full bg-[#787878] h-[1px] mb-8' />

      <div className='flex justify-between items-start flex-wrap'>
        <div className='max-w-[458px] font-amiko font-bold text-[64px] max-md:text-[44px] leading-[74px] max-md:leading-[60px] tracking-[-0.89px] text-black'>
          Together we are strong
        </div>

        <div className='max-w-[556px] font-medium text-2xl leading-[34px] text-black'>
          <p>
            Our crew is always getting bigger, but we all work toward one goal: to make sales success not only possible
            but inevitable for teams everywhere.
          </p>

          <p className='mt-7 font-amiko text-lg leading-7 text-black'>
            In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>

      <div className='flex justify-between items-start flex-wrap mt-14 gap-10'>
        <div className='flex gap-4'>
          <Image
            src='/services/userAvatar.png'
            alt='userAvatar'
            width={48}
            height={48}
            className='rounded-full'
          />

          <div>
            <p className='font-amiko text-base leading-5 text-black mb-1'>Muhammed Usman</p>
            <p className='text-sm leading-[19px] text-black'>Founder & CEO</p>
          </div>
        </div>

        <div className='font-amiko text-[48px] max-md:text-[32px] leading-[58px] max-md:leading-[44px] text-black max-w-[556px]'>
          “Our goal is to build software that gives customer-facing teams at SMBs the ability to create fruitful and
          enduring relationships with customers.”
        </div>
      </div>

      <div className='w-full bg-[#787878] h-[1px] mt-16 mb-8' />

      <div className='flex flex-wrap justify-between items-start gap-12 pb-20'>
        {counts.map((count, index) => (
          <div
            key={index}
            className='flex flex-col items-start max-w-[292px]'
          >
            <p className='text-lg leading-7 font-medium text-[#1B2730]'>{count.title}</p>
            <p className='mt-3 font-rubik text-[96px] font-semibold leading-[129.6px] tracking-[-1.33px] text-black'>
              {count.count}+
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
