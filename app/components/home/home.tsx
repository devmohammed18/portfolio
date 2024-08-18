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

function Home() {
  return (
    <div className={styles.imformation_image_profil}>
        
        <div className={styles.imageprofil}>
            <Image className='rounded-full' src={image_profil} alt='imageprofil'   />
        </div>

        <div className={styles.information}>
            <span className='text-5xl text-blue-400 sm:text-3xl sm:text-red-400 '>Hi there, I'm</span>
            <h1 className=' text-6xl  font-bold text-white sm:text-4xl' > Mohammmed</h1>
            <span className='text-4xl text-blue-300 sm:text-3xl '> Frante web devloper</span>
            <ul>
                <li className={styles.btn_resume}> Resume</li>
                <li className={styles.social_links}>
                    
                    <Link href='#' className={styles.social}>< FaFacebook style={{fontSize:30}}/></Link>
                    <Link href='#' className={styles.social}><FaSquareInstagram style={{fontSize:30}}/></Link>
                    <Link href='#' className={styles.social}><FaTwitterSquare style={{fontSize:30}} /></Link>
                    <Link href='#' className={styles.social}><FaGithub style={{fontSize:30}} /></Link>
                    
                </li>
            </ul>
        </div>

            

        
            
      


    </div>
  )
}

export default Home
