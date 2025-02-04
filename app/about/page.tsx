'use client'
import Image from 'next/image'
import { LuDownload } from "react-icons/lu";
import image_about from '../../public/images/imageAbout.jpg'
import { motion } from 'framer-motion';
function About() {

  /******************************Variants Motion ****************************** */

  const variantsFrame:any={
    
    hidden:{y:"-2%"},
    visible:{y:0,transition:{duration:1}}
  }

 
  const variantsTitle:any={
     
    hidden:{opacity:0},
    visible:{opacity:1,transition:{delay:1,duration:1}}

  }

  const variantsImage:any={
    hidden:{opacity:0},
    visible:{opacity:1,transition:{delay:2,duration:1}}

  }

  const variantsParghraphe:any={
    hidden:{opacity:0 },
    visible:{opacity:1,transition:{delay:3,duration:1,straggerChildren:1}}

  }
  const variantsButton:any={
   hidden:{opacity:0},
   visible:{opacity:1,transition:{delay:4,duration:1}}

  }

/************************************************************** */

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdfs/CV_Boureghida_Mohammed.pdf'; // Path to your file
    link.download = 'CV_Boureghida_Mohammed.pdf';   // File name for download

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  



  return (
    <motion.div 
        variants={variantsFrame}
        initial='hidden'
        animate='visible'
        className='min-h-full  flex flex-col justify-start  items-center bg-bg_light dark:bg-bg_dark text-white'>
        
        <motion.div
            variants={variantsTitle} 
            className='flex flex-col justify-center items-center pt-10 pb-14'> 

                <h1 className='text-3xl font-semibold '>About me</h1>
                
                <span className='text-sm font-semibold'>My Introduction</span>
        </motion.div>
      
        <div className='md:flex-col sm:flex-col sm:gap-4 md:gap-4 w-4/5 h-4/5 flex justify-between items-center  border border-red-950 border-solid py-10' >
            
            <motion.div 
               variants={variantsImage}
               className='w-1/3 sm:w-4/5 md:w-4/5'>
              <Image className='object-contain rounded-lg ' src={image_about} alt='image_about'  />
            </motion.div >

            <motion.div  
                variants={variantsParghraphe}
                className='sm:w-4/5 sm:text-lg sm:px-0 md:text-xl md:px-0 md:w-4/5 flex flex-col  leading-relaxed gap-4 items-start w-2/5 h-full text-xl text-justify pt-5 pl-4 pr-8 border-0 border-solid border-red-700'>
                <p>Frontend devloper with experience building website.  I specialize in ReactJS. Tailwind Css and Htmel. 
                  My role is write and style the front-end componenet and deliver quqlity work.
                </p>

                <motion.button 
                   variants={variantsButton}
                   onClick={handleDownload}  className='sm:w-1/2 md:w-1/2 sm:text-sm md:text-sm sm:px-0 sm:justify-around w-1/2 flex justify-between items-center text-lg  border-2 py-2 bg-red-600 px-3 border-solid rounded-3xl border-red-600 hover:bg-transparent  '> Download CV <span><LuDownload /></span></motion.button>

            </motion.div>
      
        </div>

    </motion.div>
  )
}

export default About
