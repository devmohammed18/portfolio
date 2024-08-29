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

    <div className=''>
       
       
        <div className={styles.imformation_image_profil}>
        <ParticlesBackground  />
            <div className={styles.imageprofil}>
                
                <Image className='rounded-full z-10 w-72 h-72 sm:w-40 sm:h-40 md:w-50 md:h-50' src={image_profil} alt='imageprofil'   />
            </div>

            <div className={styles.information}>
                <span className=' text-xl text-blue-400  text-red-400 md:text-xl sm:text-lg lg:text-xl '>Hello, my name is</span>
                <h1 className=' text-4xl  font-bold text-white md:text-4xl sm:text-2xl lg:text-4xl' > Mohammmed </h1>
                <span className='text-xl text-white md:text-xl sm:text-lg lg:text-xl '> L'm a <span className='text-red-600 text-2xl'>Frante web</span> devloper</span>
                <ul>
                    <li className={styles.btn_resume}> Download CV</li>
                    <li className={styles.social_links}>
                        
                        <Link href='#' className={styles.social}>< FaFacebook style={{fontSize:30}}/></Link>
                        <Link href='#' className={styles.social}><FaSquareInstagram style={{fontSize:30}}/></Link>
                        <Link href='#' className={styles.social}><FaTwitterSquare style={{fontSize:30}} /></Link>
                        <Link href='#' className={styles.social}><FaGithub style={{fontSize:30}} /></Link>
                        
                    </li>
                </ul>
            </div>

                

            
                
        


        </div>
    </div>    
  )
}

export default Home
