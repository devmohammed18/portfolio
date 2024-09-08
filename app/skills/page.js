'use client'

import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { PiBracketsCurly } from "react-icons/pi";
import { LuPalette } from "react-icons/lu";
import { useState } from "react";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
function Skills() {
    
 const [toggle,setToggle]=useState(false)
 const [toggle1,setToggle1]=useState(false)


  return (
    <div className=' sm:flex  sm:items-centre min-h-lvh border-0  flex flex-wrap justify-center  items-start border-red-900 border-solid bg-bg_light dark:bg-bg_dark   text-white'>
    
    <div className='w-4/5 h-full flex flex-col justify-start items-center  border-0   border-solid border-yellow-600 px-0 '>
      
       <div className=' flex justify-center flex-col items-center pt-12'>
            <h1 className='text-4xl font-bold'> Skills</h1>
            <span className='text-sm'> My Technicol Level</span>
       </div>
       
       

       <div className='sm:flex-col sm:items-center sm:justify-center md:flex-col md:items-center md:justify-center md:mt-24 flex justify-between w-full py-10  '>

            <ul className='flex flex-col  items-start  '>
               
                <li className=' relative flex justify-center my-4 items-center  font-normal  border border-solid  border-yellow-500 '> 
                    <span className='text-lg'><PiBracketsCurly /></span>
                    <h1 className=' sm:text-xl text-3xl mr-20 ml-2'>frentend devloper</h1>
                    
                    {toggle?<span className="absolute top-0 right-0 font-bold" onClick={()=>setToggle(false)} > <IoIosArrowUp /> </span>
                           :<span className="absolute bottom-0 right-0 font-bold" onClick={()=> setToggle(true)}>  <IoIosArrowDown /></span> }
                </li>
                
                {toggle &&       
                 <motion.ul
                    variants={
                        {hidden:{opacity:0},
                        visible:{opacity:1},
                        
                        }}
                    initial="hidden"
                    animate="visible" 
                    transition={{duration:2}}

                 className="  border-0 border-solid border-yellow-300 transition-all duration-1000 ease-in-out }">
                    <li className='uppercase ml-7 py-2 '> htmal</li>
                    <li  className='sm:w-60  ml-7 h-1 w-80 bg-red-700' ></li>
                    <li className='uppercase ml-7 py-2 '> css</li>
                    <li  className='sm:w-60 ml-7 h-1 w-80 bg-red-700' ></li>
                    <li className='uppercase ml-7 py-2 '> javascript</li>
                    <li  className='sm:w-60 ml-7 h-1 w-80 bg-red-700' ></li>
                    <li className=' uppercase ml-7 py-2 '> react js</li>
                    <li  className='sm:w-60 ml-7 h-1 w-80 bg-red-700' ></li>
                </motion.ul>
                }
            </ul>

            <ul className='flex flex-col  items-start '>

                <li className='relative sm:mt-14 md:mt-14 flex justify-center my-4 items-center  font-normal  border border-solid  border-yellow-500 '>  
                        
                        <span className='text-lg'><LuPalette /></span>
                        <h1 className=' sm:text-xl sm:mr-36 text-3xl mr-40 ml-2'>frameworks</h1>
                  
                        {toggle1?<span className="absolute top-0 right-0 font-bold" onClick={()=>setToggle1(false)} > <IoIosArrowUp /> </span>
                           :<span className="absolute bottom-0 right-0 font-bold" onClick={()=> setToggle1(true)}>  <IoIosArrowDown /></span> }
                  
                        
                </li>

                 {toggle1 && <motion.ul

                     variants={
                        {hidden:{opacity:0},
                        visible:{opacity:1},
                        
                        }}
                    initial="hidden"
                    animate="visible" 
                    transition={{duration:2}}

                 >
                    <li className='uppercase ml-7 py-2 '>next js</li>
                    <li  className='sm:w-60 ml-7 h-1 w-80 bg-red-700' ></li>
                    <li className='uppercase ml-7 py-2 '> Tailwind</li>
                    <li  className='sm:w-60 ml-7 h-1 w-80 bg-red-700' ></li>
                 </motion.ul> }
           </ul>
           
        
        </div> 
       

    </div>
    </div>
  )
}

export default Skills
