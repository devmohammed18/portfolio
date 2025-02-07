'use client'

import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import { PiBracketsCurly } from "react-icons/pi";
import { LuPalette } from "react-icons/lu";
import { FaPuzzlePiece } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
function Skills() {
    
/*********************** Variante Motion ********************* */
const variantsFrame={
    hidden:{y:'-2%'},
    visible:{y:0,transition:{duration:1}}
}
const variantsTitle={
    hidden:{opacity:0},
    visible:{opacity:1,transition:{delay:1}}
}
const variantsFrontend={
    hidden: {opacity:0},
    visible:{opacity:1,transition:{delay:2,duration:2}}
}
const variantsFramwork={
    hidden: {opacity:0},
    visible:{opacity:1,transition:{delay:3,duration:2}}
}

/********************************************************* */

 const [toggle,setToggle]=useState(false)
 const [toggle1,setToggle1]=useState(false)


  return (
    <motion.div 
       variants={variantsFrame}
       initial='hidden'
       animate='visible'

       className=' sm:flex  sm:items-centre min-h-lvh border-0  flex justify-center  items-start border-red-900 border-solid bg-bg_light dark:bg-bg_dark ease-in-out duration-200  text-white'>
    
        <div className='md:w-full sm:w-full box-border w-4/5 h-full flex flex-col   border-0  border-solid border-yellow-600 px-0 '>
        
            <motion.div 
                variants={variantsTitle}
                className=' flex justify-center flex-col items-center pt-12'>
                    <h1 className='text-4xl font-bold'> Skills</h1>
                    <span className='text-sm'> My Technicol Level</span>
            </motion.div>
            
            <div className='sm:flex-col sm:items-center overflow-x-auto sm:justify-center  flex justify-between items-start w-full py-10 border-0 border-solid border-red-950  '>

                <motion.ul
                   variants={variantsFrontend}
                   className='sm:w-80  sm:h-full md:items-center flex flex-col  items-start border-0 border-solid border-red-800  w-96 '>
                
                    <li className=' relative flex justify-between my-4 py-2 items-center  font-normal  border-2 border-solid  border-white w-80 '> 
                       <div className="flex justify-start items-center">
                            <span className='text-xl px-2'><PiBracketsCurly /></span>
                            <h1 className=' sm:text-xl text-3xl capitalize  '>frentend devloper</h1>
                        </div>
                        {toggle?<span className="absolute bottom-0 right-0 font-bold" onClick={()=>setToggle(false)} > <IoIosArrowUp /> </span>
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
                        <li  className='  ml-7 h-1 w-72 bg-red-700' ></li>
                        <li className='uppercase ml-7 py-2 '> css</li>
                        <li  className='s ml-7 h-1 w-72 bg-red-700' ></li>
                        <li className='uppercase ml-7 py-2 '> javascript</li>
                        <li  className=' ml-7 h-1 w-72 bg-red-700' ></li>
                        <li className='uppercase ml-7 py-2 '> typescript</li>
                        <li  className=' ml-7 h-1 w-72 bg-red-700' ></li>
                        <li className=' uppercase ml-7 py-2 '> react js</li>
                        <li  className=' ml-7 h-1 w-72 bg-red-700' ></li>
                    </motion.ul>
                    }
                </motion.ul>

                <motion.ul 
                  
                     variants={variantsFramwork}  
                    className='sm:w-80 sm:h-full sm:items-start md:items-center flex flex-col   items-end  border-0 border-solid border-red-900 w-96 '>

                    <li className='relative  sm:mt-14  flex justify-between my-4 py-2 items-center  font-normal  border-2 border-solid  border-white w-80 '>  
                            <div className="flex justify-start items-center "> 
                                <span className='text-xl px-2'><FaPuzzlePiece /></span>
                                <h1 className=' sm:text-xl text-3xl  ml-2 capitalize '>frameworks </h1>
                            </div>  
                            {/* <h1 className=' sm:text-xl sm:mr-36 text-3xl mr-20 ml-2'>frameworks qweuio</h1> */}
                    
                            {toggle1?<span className="absolute bottom-0 right-0 font-bold" onClick={()=>setToggle1(false)} > <IoIosArrowUp /> </span>
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
                        className="uppercaze"
                    >
                        <li className='uppercase ml-8  py-2 '>next js</li>
                        <li  className=' ml-8 h-1 w-72 bg-red-700' ></li>
                        <li className='uppercase ml-8 py-2 '>tailwind</li>
                        <li  className='ml-8 h-1 w-72 bg-red-700' ></li>
                    </motion.ul> }
                </motion.ul>
            
            
             </div> 
            

        </div>
    </motion.div>
  )
}

export default Skills
