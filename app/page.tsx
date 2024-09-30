import React from 'react'
import profile from '../img.jpeg'
import Image from "next/image";

const page = () => {
  return (
    <div>
    <section className=" min-height[100vh] py-1.5 pr-[12%] flex items-center justify-center" >
    <div className="flex flex-col mt-40 ">
        <h1 className='text-5xl text-black'>Hi, Its me <span className='text-aqua text-5xl '> <strong>Muhammad Sameer</strong></span></h1>
        <p className='max-w-screen-lg  text-3xl px-2.5 py-2.5 mt-20 text-black'>
        I m a frontend developer, passionate about technology and creating innovative solutions.<br/> I have a strong foundation in programming languages such as Html,Css,and JavaScript,<br/> I m currently working on Nextjs projects, and I m always eager to learn and grow.
        </p>
      
    </div>
    <div className=''>
<Image className ="relative top-12 w-[32vw] rounded-full h-[32vw] object-cover mt-44 left-56 cursor-pointer ease-in-out[0.4s]]"src={profile} alt='profile' />
</div>
    </section>
    </div>

  )
}

export default page