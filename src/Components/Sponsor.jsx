import React from 'react'
import image1 from "../../public/Vector (1).png"
import image2 from "../../public/Vector.png"
import image3 from "../../public/Vector (5).png"
import image4 from "../../public/Vector (0).png"
import image5 from "../../public/Vector (8).png"
import image6 from "../../public/Vector (3).png"

const Sponsor = () => {
  return (
    <div className='container mb-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b-2 gap-[20px] items-center py-[36px]'>
                <img  src={image1} alt="" />
                <img  src={image2} alt="" />
                <img  src={image3} alt="" />
                <img  src={image4} alt="" />
                <img  src={image5} alt="" />
                <img  src={image6} alt="" />
            </div>
    </div>
  )
}

export default Sponsor