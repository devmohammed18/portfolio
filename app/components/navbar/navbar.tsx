"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import TogggleTheme from '../toggle_Theme/toggleTheme'
import classnames from 'classnames'
import { usePathname } from 'next/navigation';  
import { useRouter } from 'next/navigation';

import ParticlesBackground from '../particlesbackground/particlesBackground';
function Navbar() {
    const [toggle,setToggle]=useState(false);

    const pathname=usePathname();
    const isActive = (path) => pathname === path;
    
   
  return (
    <div>
            
           
            <nav className={`${styles.navbar} font-mono ease-in-out duration-500 dark:ease-in-out dark:duration-500 dark:bg-bg_dark`}>
                <div className={styles.menu_logo }>
                    <div className={styles.menu}>{ !toggle?<AiOutlineMenu onClick={()=>setToggle(per=>!per)} />:<LiaTimesSolid onClick={()=>setToggle(per=>!per)} />} </div>
                    <div className={`${styles.logo}  `}><Link className={`${styles.link_logo} flex  relative `} href='/'><h1>Mohammed</h1><span className='text-4xl block w-2 h-2 bg-red-600 rounded-full absolute top-1 right-0 translate-x-2 '   > </span></Link></div>
                </div>
                 <div className='flex justify-between bg-bg_light dark:bg-bg_dark ease-in-out duration-500 dark:ease-in-out dark:duration-500 items-center sm:z-10 '>

                            <div className={styles.navLinksWrapper} 
                                style={{
                                clipPath: toggle ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : ''
                                }}
                            >
                                <div className={`${styles.navlinks} capitalize `}>
                                    {/* <Link   href='/' className={classnames(styles.link,pathname==='/'? styles.border_bottom_link:'')} onClick={()=>{setToggle(false)}}>Home</Link> */}
                                    <Link className={`${styles.link} ${isActive('/')?'sm:text-white sm:text-2xl md:text-white md:text-3xl  text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'sm:border-b-2 pb-1 border-transparent font-semibold text-white'}` } href='/' onClick={()=>{setToggle(false)}}>home</Link>
                                    <Link className={`${styles.link} ${isActive('/service')?'sm:text-white sm:text-2xl md:text-white md:text-3xl text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'sm:border-b-2 pb-1 border-transparent font-semibold text-white'}` } href='/service' onClick={()=>{setToggle(false)}}>services</Link>
                                    <Link className={`${styles.link} ${isActive('/about')?'sm:text-white sm:text-2xl md:text-white md:text-3xl  text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'border-b-2 pb-1 border-transparent font-semibold text-white'}`} href='/about' onClick={()=>setToggle(false)}>about</Link>
                                    <Link className={`${styles.link} ${isActive('/skills')?'sm:text-white sm:text-2xl md:text-white md:text-3xl text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'border-b-2 pb-1 border-transparent font-semibold text-white'}`} href='/skills' onClick={()=>setToggle(false)}>skills</Link>
                                    {/* <Link className={`${styles.link} ${isActive('/work')?'sm:text-white sm:text-2xl md:text-white md:text-3xl text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'border-b-2 pb-1 border-transparent font-semibold text-white'}`}  href='/work' onClick={()=>setToggle(false)}>work</Link> */}
                                    <Link className={`${styles.link} ${isActive('/contact')?'sm:text-white sm:text-2xl md:text-white md:text-3xl text-red-600 border-b-2 border-solid border-red-600 pb-1 font-semibold text-lg' : 'border-b-2 pb-1 border-transparent font-semibold text-white'}`} href='/contact' onClick={()=>setToggle(false)}>contact</Link>
                                </div>
                            </div>

                            
                                <TogggleTheme />
                            
                    

                  </div>

                
            </nav>

            
            
    </div>        
  )
}

export default Navbar
