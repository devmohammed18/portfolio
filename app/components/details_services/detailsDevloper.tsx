'use client'
import React, { useState } from 'react'
import { FcOk } from "react-icons/fc";
import { HiXCircle } from "react-icons/hi";

function DetailsDevloper({close,setClose}) {
    
  return (
<>
    {close &&(
    <div className='z-30  fixed top-0 bottom-0 right-0 left-0  flex flex-col justify-center gap-4 items-center border-2 border-red-900 border-solid bg-transparent drop-shadow-xl rounded-md' >
      <div className='sm:text-sm sm:w-4/5  sm:h-1/5 sm:rounded-xl sm:py-32 md:w-3/5 md:h-1/5 md:translate-y-10 flex absolute w-1/3 h-1/3 flex-col justify-center items-start gap-4 bg-white text-bg_light dark:text-bg_dark border-2  border-white drop-shadow-2xl rounded-md px-6 py-28  translate-y-14 ease-in-out duration-500 dark:ease-in-out dark:duration-500 '>
                <div className='flex flex-col gap-0'>
                    <h1>UI/UX</h1>
                    <h1>Designer</h1>
                </div>
                <div className='flex flex-col justify-center items-start gap-1 '>
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
                    
                <span className='absolute top-2 right-2' onClick={()=>setClose(false)}><HiXCircle /></span>
                    
                
                </div>
      </div>
    </div>)}
</>
)
}

export default DetailsDevloper
