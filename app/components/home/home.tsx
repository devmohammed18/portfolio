'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from './home.module.css'
import image_profil from '../../../public/images/imageprofil.jpg'
import ParticlesBackground from '../particlesbackground/particlesBackground'
function Home() {
  return (


  <div className={styles.banner}>  
        {/* <ParticlesBackground  /> */}
        <div className={`${styles.imformation_image_profil} ease-in-out duration-700 dark:ease-in-out dark:duration-700 dark:bg-bg_dark` }>
           
             <div className={styles.imageprofil} >
                
                <Image className='rounded-full z-10 w-72 h-72 sm:w-60 sm:h-60 md:w-80 md:h-80' src={image_profil} alt='imageprofil'   />
            </div>

            <div className='flex flex-row-reverse ml-24 justify-center  items-center md:flex-col sm:flex-col sm:ml-0 md:ml-0 sm:gap-6 '>
                    <div className={styles.information}>
                        <span className=' text-xl text-blue-400  text-red-400 md:text-3xl sm:text-lg  '>Hello, my name is</span>
                        <h1 className=' text-4xl  font-bold text-white md:text-6xl sm:text-2xl font-Anton_init ' > Mohammmed </h1>
                        <span className='text-xl text-white md:text-3xl sm:text-lg font-Anton_init  '> I'm a <span className='text-red-600 text-2xl'>Frante web</span> devloper</span>
                    
                        <button className={`${styles.btn_resume} hover: bg-bg_dark`}> Download CV</button>

                    </div> 

                    <ul>
                        <li className={styles.social_links}>
                            
                            <Link href='#' className={styles.social}>< FaFacebook className='text-lg sm:text-lg md:text-4xl' /></Link>
                            <Link href='#' className={styles.social}><FaSquareInstagram className='text-lg sm:text-lg md:text-4xl' /></Link>
                            <Link href='#' className={styles.social}><FaTwitterSquare className='text-lg sm:text-lg md:text-4xl'  /></Link>
                            <Link href='#' className={styles.social}><FaGithub className='text-lg sm:text-lg md:text-4xl'  /></Link>
                            
                        </li>
                    </ul>
            </div>


          

        </div>

  </div> 
  )
}

export default Home
