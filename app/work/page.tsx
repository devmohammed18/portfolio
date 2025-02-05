
'use client';
import { useState } from "react";

import SliderWork from './_component/slidework/sliderWork'
import {motion} from 'framer-motion'
const Work = () => {
/*********************** Variants for Animation******************** */

const variantsFrame={
  hidden:{y:'-2%'},
  visible:{y:0,transition:{duration:1}}
}
const variantsTitle={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{delay:1}}
}
const variantsSlide={
  hidden: {opacity:0},
  visible:{opacity:1,transition:{delay:2,duration:2}}
}

/********************************************************** */

  const [showDesc,setShowDesc]=useState<any>(0);
  const [toggle,setToggle] =useState<boolean>(false)

  return (
    <motion.div

      variants={variantsFrame}
      initial='hidden'
      animate='visible'
      className='min-h-svh pb-20  w-full flex justify-start  border-0 border-solid border-red-900 items-center flex-col bg-bg_light dark:bg-bgclear   text-white dark:bg-bg_dark ease-in-out duration-200  ' >

        <motion.div 
          
          variants={variantsTitle}
          className='flex flex-col justify-center  pt-12 pb-14 items-center capitalize' > 
          <h1 className='text-4xl font-mono' >work </h1>
          <span className='text-sm '>mast recent work</span>
        </motion.div>
    
        <motion.div 
           variants={variantsSlide}
           className='md:w-4/5 sm:w-full container w-1/2 h-80 flex flex-col justify-center rounded-md border-0 border-solid border-red-700 mx-auto'
           style={{opacity:'5%'}}>
           
           <SliderWork showDesc={showDesc} setShowDesc={setShowDesc} toggle={toggle} setToggle={setToggle} />  
        </motion.div>
        

 </motion.div>
  );
};

export default Work;