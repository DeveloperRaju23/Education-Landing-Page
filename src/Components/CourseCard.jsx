import React from 'react'
import icon from "../../public/icon4.png"
import star from "../../public/Star 7.png"
import customer from "../../public/customer (1).png"
import customer2 from "../../public/customer (2).png"
const CourseCard = ({item}) => {
    const {image,title,price,discount,rating,student, lesson} =item
  return (
    <div className='mb-[40px]'>
        <div className='bg-[#FFFFFF] rounded-md shadow-md p-4'>
            <img className='w-full object-cover' src={image} alt="" />
            <div className='flex items-center gap-2 py-6'>
                <img className='w-4 h-4' src={icon} alt="" />
                <span className='text-[#827A7A]'>{lesson}</span>
            </div>
            <h4 className='text-[#0C0531] text-[25px] font-bold'>{title}</h4>
            <div className='flex justify-between items-center py-4 border-b-2'>
                <div >
                <span className='text-[#FF6F06] text-[18px] font-bold '>{price}</span>
               <del className='text-[#6A6B6C] text-[18px] font-bold ps-2'> <span>{discount}</span></del>
                </div>
                <div className='flex items-center'>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                </div>
                <span className='text-[#6A6B6C] text-[18px] font-medium'>{rating}</span>
            </div>
            <div className='flex items-center justify-between py-4' >
                <div className='flex'>
                <img src={customer} alt="" />
                <span className='text-[#6A6B6C] text-[18px] font-medium'>{student}</span>
                </div>
                <div>
                <img src={customer2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard