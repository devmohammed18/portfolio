
'use client';
import { useState } from "react";

import SliderWork from '../components/sliderwork/sliderWork'
const Work = () => {
  const [showDesc,setShowDesc]=useState<any>(0);
  const [toggle,setToggle] =useState<boolean>(false)

  return (
    <div className='min-h-svh pb-20  w-full flex justify-start  border-4 border-solid border-gray-500 items-center flex-col bg-bg_light dark:bg-bgclear ease-in-out duration-500   text-white dark:bg-bg_dark ' >

        <div className='flex flex-col justify-center  pt-12 pb-14 items-center capitalize' > 
          <h1 className='text-4xl font-mono' >work </h1>
          <span className='text-sm '>mast recent work</span>
        </div>
    
        <div className=' container w-4/5 h-56  flex flex-col justify-center  border border-solid border-gray-950  mx-auto'>
    
      <SliderWork showDesc={showDesc} setShowDesc={setShowDesc} toggle={toggle} setToggle={setToggle} />
    
          
          
      </div>
        

 </div>
  );
};

export default Work;