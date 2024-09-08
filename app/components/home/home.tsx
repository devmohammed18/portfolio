'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import {motion} from 'framer-motion';
import styles from './home.module.css'
import image_profil from '../../../public/images/imageprofil.jpg'
import ParticlesBackground from '../particlesbackground/particlesBackground'

function Home() {
  return (


  <motion.div
  
  initial={{y:"-1%"}}
  animate={{y:0}}
  transition={{duration:0.1}}
className={styles.banner}>
  
         
        {/* <ParticlesBackground  /> */}
        <div className={`${styles.imformation_image_profil}   font-mono ease-in-out duration-500 dark:ease-in-out dark:duration-500 dark:bg-bg_dark` }>
           <div className='sm:flex-col  sm:w-full sm:gap-10 md:gap-10 w-4/5 md:flex-col md:w-full flex  flex-row-reverse justify-between items-center border-0 border-solid border-red-600'>
                
                <div className='sm:w-full md:w-full w-2/5 flex justify-center items-center border-0 border-solid border-red-600' >
                    
                    <Image className='rounded-full z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96' src={image_profil} alt='imageprofil'   />
                </div>

                <div className='sm:w-full md:w-full w-3/5 border-0 border-red-400  border-solid text-nowrap text-white flex flex-row-reverse  justify-center  items-center md:flex-col sm:flex-col sm:ml-0 md:ml-0 sm:gap-6 '>
                        <div className={styles.information}>
                            <span className=' text-xl  text-red-400 capitalize md:text-3xl sm:text-lg  '>hello, my name is</span>
                            <h1 className=' text-4xl  font-bold capitalize  md:text-6xl sm:text-2xl ' > mohammmed </h1>
                            <h1 className=' text-xl px-0  capitalize md:text-3xl sm:text-lg '> i'm a <span className='text-red-600 text-2xl'>Frante web</span> devloper</h1>
                        
                            <button className='w-2/5 sm:w-1/2 md:w-1/5 text-lg capitalize border-2 border-red-600 bg-red-700 border-solid rounded-3xl p-1 hover:bg-transparent'> contact me</button>

                        </div> 

                        <ul>
                            <li className='sm:flex-row md:flex-row text-bg_light dark:text-bg_dark  flex flex-col justify-between items-center gap-5  '>
                                
                                <Link href='#' className={styles.social}>< FaLinkedinIn  className='text-lg sm:text-2xl md:text-4xl ' /></Link>
                                {/* <Link href='#' className={styles.social}><FaSquareInstagram className='text-lg sm:text-lg md:text-4xl' /></Link>
                                <Link href='#' className={styles.social}><FaTwitterSquare className='text-lg sm:text-lg md:text-4xl'  /></Link> */}
                                <Link href='#' className={styles.social}><FaGithub className='text-lg sm:text-2xl md:text-4xl '  /></Link>
                                
                            </li>
                        </ul>
                </div>


         </div>

        </div>

  </motion.div> 
  )
}

export default Home
