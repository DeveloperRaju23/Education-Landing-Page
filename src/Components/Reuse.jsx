import React from 'react'

const Reuse = ({heading1,para1}) => {
  return (
    <>
        <h1 className='text-[24px] md:text-[30px] lg:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[80px] font-bold text-[#0C0531]'>{heading1}</h1>
        <h1 className='text-[18px] md:text-[20px] lg:text-[22px] leading-[20px] md:leading-[20px] lg:leading-[20px] font-bold text-[#827A7A] w-full lg:w-[684px] '>{para1}</h1>
    </>
  )
}

export default Reuse