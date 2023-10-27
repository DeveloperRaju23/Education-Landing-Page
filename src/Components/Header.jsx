import React from 'react'
import logo from "../../public/logo.png"
const navLinks = [
      {
         name:"Home" ,
         path:"/"
      },
      {
        name:"Course " ,
        path:"/"
     },
     {
        name:"Monitors" ,
        path:"/"
     },
     {
        name:"Testimonials" ,
        path:"/"
     },
     {
        name:"Blog" ,
        path:"/"
     },
]

const Header = () => {
  return (
    <div>
        <div className='container py-[20px] px-[10px] md:px-[5px] lg:px-[0px]'>
            <div className='flex justify-between items-center '>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className='hidden md:flex justify-center items-center md:space-x-[20px] lg:space-x-[30px] list-none '>
                    {
                        navLinks.map((item,index) =>(
                        <li key={index}>
                            <a className='text-[18px] tracking-wide text-[#1B2336] font-semibold' href="">{item.name}</a>
                        </li>
                        ))
                    }
                </div>
                <div className=' flex justify-center space-x-5'>
                    <button className='border-[1px] border-[#61bd81] rounded-lg w-full py-[12px] md:px-7 px-4 md:text-[20px] text-[16px] font-bold text-[#827A7A]'>Log in</button>
                    <button className='border-[1px] w-full py-[12px] md:px-9 px-4 bg-[#61bd81] rounded-lg md:text-[20px] text-[16px] font-bold text-white' >SignUp</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Header