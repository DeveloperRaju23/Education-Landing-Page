import React from 'react'
import backgroundImage from "../../public/back3.png"
import image from "../../public/image1.png"
import sideImage from "../../public/herosideimg.png"
const Hero = () => {
  return (
    
    <div className=''>
 <div className="bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='container'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full lg:w-3/5	pt-[40px] lg:pt-[0px]'>
            <h2 className='text-[30px] md:text-[45px] lg:text-[90px] font-bold text-[#0C0531] lg:leading-[90px] md:leading-[50px]'>Start <span className='text-[#61bd81]'>learning</span> skill From your favorite mentor</h2>
        <p className='text-[#827A7A] text-[22px] lg:w-4/6 w-full mt-4'>Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical literature from 45 BC,</p>
        <button className='border-[1px] mt-4 py-[12px] md:px-9 px-4 bg-[#61bd81] rounded-lg md:text-[20px] text-[16px] font-bold text-white' >Explore Course</button>
            </div>
            <div className='w-full lg:w-2/5 ' style={{ backgroundImage: `url(${sideImage})` }}>
                    <img className='w-full h-auto mt-[40px] md:mt-[100px] lg:mt-[132px] ' src={image} alt="" />
            </div>
            </div>
        </div>
      
        </div>
    </div>
   
  )
}

export default Hero