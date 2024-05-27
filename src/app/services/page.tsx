import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Banner from '@/components/services/Banner'
import HaveQuestion from '@/components/services/HaveQuestion'
import HowWeWorks from '@/components/services/HowWeWorks'
import Service from '@/components/services/Service'
import Strategy from '@/components/services/Strategy'
import TogetherWeStrong from '@/components/services/TogetherWeStrong'
import WhatWeDo from '@/components/services/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
      <Banner />
      <WhatWeDo />
      <HowWeWorks />
      <Service />
      <Strategy />
      <TogetherWeStrong />
      <HaveQuestion />
      <Footer/>
    </>
  )
}

export default page
