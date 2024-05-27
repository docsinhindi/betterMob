import React, { ReactNode } from 'react'
interface ContainerProps {
    children: ReactNode;
  }
const Container = ({ children } : ContainerProps) => {
    return <div className='mx-auto max-w-none px-4 sm:px-6 md:px-8 lg:px-2 lg:max-w-[1150px] xl:px-8 xl:max-w-[1200px] '>{children}</div>;
  };
  
  export default Container;