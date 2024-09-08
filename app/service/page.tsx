'use client'

import React, {useState } from 'react'
//import Loading from './loading'
import { IoCodeSlash } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'framer-motion';
import DetailsDevloper from '../components/details_services/detailsDevloper';



 function Service() {

const [close,setClose]=useState<boolean>(false)


// async function getService(){

//       try{

//         await new Promise (resolve=>setTimeout(resolve,4000))
//         const users= await fetch('http://localhost:3000/api/testservice',{
//           method:'GET'
//           } )
          
//           if(!users.ok){
          
//             throw new Error('failed to fetch data')

//           }
          

//         return users.json()

// }catch(error){
//   console.log('errrrrror....................!')
// }


// }
//   const Users= await getService()
//   console.log(Users)
  return (
    <motion.div 
    initial={{y:"-1%"}}
    animate={{y:0}}
    transition={{duration:0.1}}
    
    className='min-h-full  flex flex-col justify-center items-center bg-bg_light dark:bg-bg_dark text-white'>
      
       <div className='flex flex-col justify-center items-center   '>
            <h1 className='text-4xl font-dold'>Services</h1>
            <span className='text-sm'>what i offer</span>
       </div>

       <div className='  flex w-4/5 justify-center flex-wrap gap-10 items-center border-0  border-red-600 border-solid py-20 ' >

          <div className='flex flex-col  items-start pt-24 pb-7 pr-14 pl-6 gap-4 border-2 border-white border-solid rounded-md'>

             <span><IoCodeSlash /></span>
             <div className='flex flex-col  '>
               <h1 className='text-3xl '>Frontend </h1>
               <h1 className='text-3xl '>Devloper</h1>
             </div>
             <button  className='flex items-center justify-center  gap-1 text-red-600 cursor-pointer px-2  rounded-2xl 
             '  onClick={()=>setClose(true)} >
                <h1 className='text-sm font-bold '> View More</h1>
                <h1 className='text-xl font-bold mt-1 hover:translate-x-2 '> <IoIosArrowRoundForward /> </h1>
             </button>
             
          </div>

          <div className='flex flex-col  items-start pt-24 pb-7 pr-14 pl-6 gap-4 border-2 border-white border-solid'>

              <span> <FaFigma /></span>
              <div className='flex flex-col  '>
                <h1 className='text-3xl '>UI/UX </h1>
                <h1 className='text-3xl '>Designer</h1>
              </div>
              <button  className='flex items-center justify-center  gap-1 text-red-600 cursor-pointer px-2  rounded-2xl 
             '  onClick={()=>setClose(true)} >
                <h1 className='text-sm font-bold '> View More</h1>
                <h1 className='text-xl font-bold mt-1 hover:translate-x-2 '> <IoIosArrowRoundForward /> </h1>
             </button>

          </div>
 <DetailsDevloper close={close} setClose={setClose} />
          
      </div>

    </motion.div>
  )
}

export default Service;
