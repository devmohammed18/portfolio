'use client'

import React, {useState } from 'react'
//import Loading from './loading'
import { IoCodeSlash } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { FaLaptopCode } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';
import DetailsDevloper from '../components/details_services/detailsDevloper';
import DetailsDesigne from '../components/details_services/detailsDesigne';



 function Service() {

const [close,setClose]=useState<boolean>(false)
const [showDetails, setShowDetails]=useState<number>(0)//1==>show detailsDevloper ou 2===>show detailsDesigne

/*************************** Variants Motion ******************************** */
const variatsFrame:any={

  hidden:{y:"-1%"},
  visible:{y:0,transition:{staggerChildren:1 }}

}

const variatsTitle:any={

  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:1,duration:1}}

}

const variantsFrontend:any={

  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:2,duration:1}},
  

}
const variantsDesiner:any={

  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:3,duration:1}}

}
/****************************************************************** */


  return (
    <motion.div 
     initial='hidden'
     animate='visible' 
     
    
    className='min-h-full  flex flex-col justify-center items-center bg-bg_light dark:bg-bg_dark ease-in-out duration-200 text-white  '>
      
       <motion.div 
         variants={variatsTitle}
        className='flex flex-col justify-center items-center   '>
            <h1 className='text-4xl font-dold'>Services</h1>
            <span className='text-sm'>what i offer</span>
       </motion.div>

       <div className='flex w-4/5 h-4/5  justify-center flex-wrap gap-14 items-center border-0  border-red-600 border-solid py-20 ' >
         
          <motion.div 
            variants={variantsFrontend}
            whileHover={{scale:1.1}}
            drag='x'
            dragConstraints={{left:-220,right:0}}
           
            className=' flex flex-col  items-start pt-24 pb-7 pr-14 pl-6 gap-4 border-2 border-white border-solid rounded-md cursor-pointer'>

             <span className='text-xl' ><FaLaptopCode /></span>
             <div className='flex flex-col  '>
               <h1 className='text-3xl '>Frontend </h1>
               <h1 className='text-3xl '>Devloper</h1>
             </div>
             <button  className='flex items-center justify-center mt-4 gap-1 text-red-600 cursor-pointer px-2  rounded-2xl 
             '  onClick={()=>{setClose(true);setShowDetails(1)}} >
                <h1 className='text-sm font-bold '> View More</h1>
                <h1 className='text-xl font-bold mt-2hover:translate-x-2 '> <IoIosArrowRoundForward /> </h1>
             </button>
             
          </motion.div>
        
          <motion.div 
            variants={variantsDesiner}
            whileHover={{scale:1.1,transition:{type:'spring',duration:1}}}
            drag='x'
            dragConstraints={{left:0,right:220}}
            className='flex flex-col  items-start pt-24 pb-7 pr-14 pl-6 gap-4 border-2 border-white border-solid rounded-md cursor-pointer '>

              <span className='text-xl'><FaPaintBrush /></span>
              <div className='flex flex-col  '>
                <h1 className='text-3xl '>UI/UX </h1>
                <h1 className='text-3xl '>Designer</h1>
              </div>
              <button  className='flex items-center justify-center mt-4 gap-1 text-red-600 cursor-pointer px-2  rounded-2xl 
             '  onClick={()=>{setClose(true);setShowDetails(2) }} >
                <h1 className='text-sm font-bold '> View More</h1>
                <h1 className='text-xl font-bold mt-1 hover:translate-x-2 '> <IoIosArrowRoundForward /> </h1>
             </button>

          </motion.div>
          
         
       
          
        </div>
        {showDetails===2 && <DetailsDesigne  setShowDetails={setShowDetails} close={close} setClose={setClose}  />}
        {showDetails===1 && <DetailsDevloper setShowDetails={setShowDetails} close={close} setClose={setClose}  />}
    </motion.div>
  )
}

export default Service;
