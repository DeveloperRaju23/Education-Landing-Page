import React, { useEffect, useState } from 'react'
import Reuse from './Reuse'
import CourseCard from './CourseCard'

const OurCourse = () => {
    const [course,setCourse] =useState([])

    useEffect(() =>{
        fetch('allCourseData.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
  return (
    <div className='container '>
        <div>
            <Reuse heading2="Our Explore Course"/>
            <Reuse para1="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical  "/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[40px]'>
            {
                course.map((item) =>(
                   <CourseCard 
                   key={item.id}
                   item={item}
                   >

                   </CourseCard> 
                ))
            }
        </div>
    </div>
  )
}

export default OurCourse