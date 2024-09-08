import React from 'react'
import Image from 'next/image'
import { LuDownload } from "react-icons/lu";
import image_about from '../../public/images/imageAbout.jpg'
function About() {
  return (
    <div className='min-h-full  flex flex-col justify-start  items-center bg-bg_light dark:bg-bg_dark text-white'>
      
       <div className='flex flex-col justify-center items-center pt-10 pb-14'> 

              <h1 className='text-3xl font-semibold '>About me</h1>
              
              <span className='text-sm font-semibold'>My Introduction</span>
        </div>
     
      <div className='md:flex-col sm:flex-col sm:gap-4 md:gap-4 w-4/5 h-4/5 flex justify-between items-center  border border-red-950 border-solid py-10' >
          
          <div className='w-1/3 sm:w-4/5 md:w-4/5'>
            <Image className='object-contain rounded-lg ' src={image_about} alt='image_about'  />
          </div >

          <div  className='sm:w-4/5 sm:text-lg sm:px-0 md:text-xl md:px-0 md:w-4/5 flex flex-col  leading-relaxed gap-4 items-start w-2/5 h-full text-xl text-justify pt-5 pl-4 pr-8 border-0 border-solid border-red-700'>
              <p>Frontend devloper with experience building website.  I specialize in ReactJS. Tailwind Css and Htmel. 
                My role is write and style the front-end componenet and deliver quqlity work.
              </p>

              <button className='sm:w-1/2 md:w-1/2 sm:text-sm md:text-sm sm:px-0 sm:justify-around w-1/2 flex justify-between items-center text-lg  border-2 py-2 bg-red-600 px-3 border-solid rounded-3xl border-red-600 hover:bg-transparent  '> Download CV <span><LuDownload /></span></button>

          </div>
     
      </div>

    </div>
  )
}

export default About
