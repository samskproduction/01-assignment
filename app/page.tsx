import React from 'react'
import img from '../img.jpeg'
import Image from "next/image";

const page = () => {
  return (
    <div>
    <section className=" min-height[100vh] py-1.5 pr-[12%] flex items-center justify-center" >
    <div className="flex flex-col mt-40 ">
        <h1 className='text-5xl text-black text-bold'>Hi, Its me <span className='text-[#569DAA] text-6xl text-extrabold '> <strong>Muhammad Sameer</strong></span></h1>
        <p className='max-w-screen-lg  text-4xl px-2.5 py-2.5 mt-20 text-black'>
        I m a frontend developer, passionate about technology and creating innovative solutions.
        </p>
    </div>
    <div className=''>
<Image className ="relative top-12 w-[32vw] rounded-full h-[32vw] object-cover mt-44 left-56 cursor-pointer ease-in-out[0.4s]]"
src={img} 
alt='profile' />
</div>
    </section>
    </div>

  )
}

export default page
