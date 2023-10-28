import React from 'react'

const Reuse = ({heading1,heading2,para1}) => {
  return (
    <>
        <h1 className='text-[24px] md:text-[30px] lg:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[80px] font-bold text-[#0C0531] md:text-left text-center'>{heading1}</h1>
        <h2 className='text-[24px] md:text-[30px]  lg:text-[60px] leading-[30px] md:leading-[40px] lg:leading-[80px] font-bold text-[#0C0531]  text-center mb-3'>{heading2}</h2>

        <p className='text-[18px] md:text-[20px] lg:text-[22px] leading-[20px] md:leading-[20px] lg:leading-[20px]  text-[#827A7A] w-full lg:w-[684px] mx-auto text-center '>{para1}</p>
    </>
  )
}

export default Reuse