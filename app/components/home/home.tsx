'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import { FaLinkedinIn } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";

import {motion, Variants} from 'framer-motion';

import styles from './home.module.css'
import image_profil from '../../../public/images/imageprofil.jpg'
import { useRouter } from 'next/navigation';




function Home() {

/***************** Vaiants Motion********************** */
    const variantsFrame:any={

        hidden:{y:"-1%"},
        visible:{y:0, 
                transition:{staggerChildren:1 },

        },
       
        // when:'beforChildren',
        // staggerChildren:1 
    }
    
    const variantsProfil:any= {
        hidden:{opacity:0},
        visible:{opacity:1,   
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["10%", "10%", "50%", "50%", "20%"],
            transition:{ type:'tween',duration:2}
          },
        
     
    
    }
    
    const variantsTextProfil:any={
          hidden: {opacity:0},
          visible:{opacity:1}, 
          //trasition:{type:'spring',duration:4} ,
          
    
    }

    const variantsChar:any={
        hidden:{opacity:0},
        visible:{opacity:1}
    }
/************************************************************** */

    const text_1:string[]=["hello, my name is"]
    const router=useRouter();
   

  

  return (


  <motion.div
     variants={variantsFrame}
     initial='hidden'
     animate='visible'
  
>
  
         
        
        <div className={`${styles.imformation_image_profil}   font-mono ease-in-out duration-200  dark:bg-bg_dark ` }>
           <div className='sm:flex-col  sm:w-full sm:gap-10 md:w-full md:gap-10 h-full w-4/5 md:flex-col  flex  flex-row-reverse justify-between items-center border-0 border-solid border-red-600'>
                
                <motion.div 

                variants={variantsProfil}
                
               
                
                
                className='sm:w-4/5 md:w-4/5  w-2/6 flex justify-center items-center border-0 border-solid border-red-600' >
                    
                    {/* <Image className='rounded-full z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96' src={image_profil} alt='imageprofil'   /> */}
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 247">
                        <defs>
                            <style>
                            {`.cls-1{fill:#FFFFFF;}.cls-2{fill:#FFFFFF;}.cls-3{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;stroke-width:4px;}`}
                            </style>
                        </defs>
                        <path className="cls-1" d="M206.4,193.32v12.25a116.63,116.63,0,0,1-164.06,1.72l0-14s-2.56-17.75,17.6-23,40.49-13.12,40.49-13.12l.63-25.12h47.38l-1.12,25.28s40.81,13,49.44,16S206.4,193.32,206.4,193.32Z"/>
                        <path className="cls-2" d="M87.49,89.14s-5.92,1.76-1.76,16.49,9.13,13.76,9.13,13.76,6.24,27.36,20.32,38.73c0,0,11,5.12,19.68-.8s16.33-29.45,19-37.61c0,0,11.84-6.76,8.72-27.7l-4.4-30.87-61.45-1.6-11.53,17Z"/>
                        <path className="cls-1" d="M157.85,101.09V75.94a1.59,1.59,0,0,0-2.76-1.08l-2.76,3a2.22,2.22,0,0,1-3.77-.87l-2-6.64a3.68,3.68,0,0,0-5-2.3L111.06,81.73a9,9,0,0,1-9.94-1.7L96,75.11a1.88,1.88,0,0,0-3.17,1.36V101a.38.38,0,0,1-.69.24A50,50,0,0,1,82.47,68.5s-.24-18,27.13-31c0,0,28.8-14.88,51.37,14.65,0,0,15.09,16-2.64,49A.26.26,0,0,1,157.85,101.09Z"/>
                        <path className="cls-3" d="M240.16,123.49A116.66,116.66,0,1,1,123.51,6.84,116.17,116.17,0,0,1,240.16,123.49Z"/>
                    </svg>
                
                
                </motion.div>

                <div className='sm:w-full md:w-full w-3/5 border-0 border-red-400  border-solid text-nowrap text-white flex flex-row-reverse  justify-center  items-center md:flex-col sm:flex-col sm:ml-0 md:ml-0 sm:gap-6 '>
                        <motion.div 
                         
                        className={styles.information}>

                        {  text_1.map((item,index)=>( 

                            <motion.span 
                              variants={variantsChar}
                              key={index}
                              className=' text-xl  text-red-400 capitalize md:text-3xl sm:text-lg  '>{item}
                           </motion.span>))   }

                            <motion.h1 
                            variants={variantsTextProfil}
                          
                            className=' text-4xl  font-bold capitalize  md:text-6xl sm:text-2xl ' > mohammmed 
                            </motion.h1>

                            <motion.h1 
                            variants={variantsTextProfil}
                         
                            className=' text-xl px-0  capitalize md:text-3xl sm:text-lg '> i'm a <span className='text-red-600 text-2xl'>Frante web</span> devloper
                            
                            </motion.h1>
                        
                            <motion.button 
                                    variants={variantsTextProfil}
                                    whileHover={{scale:1.1}}
                                  onClick={()=>router.push('/contact')} className='w-2/5 sm:w-1/2 md:w-1/5 text-lg capitalize border-2 border-red-600 bg-red-700 border-solid rounded-3xl p-1 hover:bg-transparent'> contact me
                                  
                            </motion.button>

                        </motion.div> 

                        <ul>
                            <motion.li 
                                

                                className='sm:flex-row md:flex-row text-bg_light dark:text-bg_dark  flex flex-col justify-between items-center gap-5  '>
                                <motion.div variants={variantsTextProfil} whileHover={{scale:1.2}} transition={{duration:0.2}}>
                                   <Link href='#' className={styles.social}>< FaLinkedinIn  className='text-lg sm:text-2xl md:text-4xl ' /></Link>
                                </motion.div>
                                
                                <motion.div variants={variantsTextProfil}  whileHover={{scale:1.2}} transition={{duration:0.2}}>
                                      <Link href='#' className={styles.social}><FaGithub className='text-lg sm:text-2xl md:text-4xl '  /></Link>
                                </motion.div>
                            </motion.li>
                        </ul>
                </div>


         </div>

        </div>

  </motion.div> 
  )
}

export default Home
