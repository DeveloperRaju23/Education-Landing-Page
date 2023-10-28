import React from 'react'
import aboutImg from "../../public/about1.png"
import image1 from "../../public/icon1.png"
import image2 from "../../public/icon2.png"
import image3 from "../../public/icon3.png"
import Reuse from './Reuse'
const About = () => {
  return (
    <div className='container pt-[50px] pb-[50px]'>
        <div className='flex flex-col md:flex-row justify-between items-center lg:gap-[200px] gap-5'>
            <div>
                <img src={aboutImg} alt="" />
            </div>
            <div>
                <Reuse heading1="Benefit from our online Learning Expert"/>
                <div className='md:w-2/4 w-full flex gap-4 mt-4'>
                    <img className='lg:w-16 w-12  h-12 lg:h-16' src={image1} alt="" />
                   <div>
                   <p className='text-[#0C0531] text-[20px] lg:text-[25px] font-bold tracking-wide'>Online Degree</p>
                    <p className='text-[#827A7A] text-[19px] tracking-wide'>Contrary to popular belief, Lorem  popular belief, Lorem Ipsum  is  </p>
                   </div>
                </div>
                <div className='md:w-2/4 w-full flex gap-4 mt-4'>
                    <img className='lg:w-16 w-12  h-12 lg:h-16' src={image2} alt="" />
                   <div>
                   <p className='text-[#0C0531] text-[20px] lg:text-[25px] font-bold tracking-wide'>Short course</p>
                    <p className='text-[#827A7A] text-[19px] tracking-wide'>Contrary to popular belief, Lorem  popular belief, Lorem Ipsum  is  </p>
                   </div>
                </div>
                <div className='md:w-2/4 w-full flex gap-4 mt-4'>
                    <img className='lg:w-16 w-12  h-12 lg:h-16' src={image3} alt="" />
                   <div>
                   <p className='text-[#0C0531] text-[20px] lg:text-[25px] font-bold tracking-wide'>Learn with expert</p>
                    <p className='text-[#827A7A] text-[19px] tracking-wide'>Contrary to popular belief, Lorem  popular belief, Lorem Ipsum  is  </p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About