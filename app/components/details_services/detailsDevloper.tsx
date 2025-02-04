'use client'
import React, { useState } from 'react'
import { FcOk } from "react-icons/fc";
import { HiXCircle } from "react-icons/hi";

function DetailsDevloper({setShowDetails,close,setClose}) {
    
  return (
<>
    {close &&(
    
      // <div className='z-30  fixed top-0 bottom-0 opacity-50 bg-red-950 right-0 left-0  flex flex-col justify-center gap-4 items-center border-2 border-red-900 border-solid bg-transparent drop-shadow-xl rounded-md' >

      // </div>
      <div className=''>
      <div className='fixed inset-0 bg-bg_light dark:bg-bg_dark opacity-55 z-30' ></div>
    
   
      <div className='z-40 sm:text-sm sm:w-4/5  sm:h-1/5 sm:rounded-xl sm:py-32 md:w-3/5 md:h-1/5 md:translate-y-10 
                     flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-2/5 h-2/5 flex-col justify-center items-start gap-4 bg-white
                     text-bg_light dark:text-bg_dark border-2  border-white drop-shadow-2xl rounded-md px-6 py-28   ease-in-out duration-500 dark:ease-in-out dark:duration-500 '>
                <div className='flex flex-col gap-0 capitalize'>
                    <h1 className='text-xl font-bold' >frontend developer</h1>
                    <hr className='my-2 border-t-2 border-bg_light dark:border-bg_dark'/>
                </div>
                <div className='flex flex-col justify-center items-start gap-1 capitalize'>
                <div className='flex justify-center items-center gap-1'><FcOk />
                        <h1>Use React js to devlop UI intrface</h1>
                </div>
                <div className='flex justify-center items-center gap-1'><FcOk />
                        <h1>Use React js to devlop UI intrface</h1>
                </div>
                <div className='flex justify-center items-center gap-1'><FcOk />
                        <h1>Mange the state of the application with redux</h1>
                </div>
                <div className='flex justify-center items-center gap-1'><FcOk />
                    <h1>implement the while app with react hooks</h1>
                </div>
                    
                <div className='flex justify-center items-center gap-1'><FcOk />
                    <h1>Consuming Api s</h1>
                </div>
                    
                <span className='absolute top-2 right-2 text-red-600 text-xl' onClick={()=>{setClose(false);setShowDetails(0)}}><HiXCircle /></span>
                    
                
                </div>
      </div>
      </div>
  )}
  
</>
)
}

export default DetailsDevloper
