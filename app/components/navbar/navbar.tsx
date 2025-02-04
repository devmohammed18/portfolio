"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import TogggleTheme from '../toggle_Theme/toggleTheme'
import { usePathname } from 'next/navigation';  



function Navbar() {
    const [toggle,setToggle]=useState(false);

    const pathname=usePathname();
    const isActive = (path) => pathname === path;
    
   
  return (
    <div>
            
           
            <nav className={`${styles.navbar} font-mono ease-in-out duration-500 dark:ease-in-out dark:duration-200 dark:bg-bg_dark`}>
                <div className={styles.menu_logo }>
                    <div className={styles.menu}>{ !toggle?<AiOutlineMenu onClick={()=>setToggle(per=>!per)} />:<LiaTimesSolid onClick={()=>setToggle(per=>!per)} />} </div>
                    <div className={`${styles.logo}  `}><Link className={` flex  relative `} href='/'><h1>Mohammed</h1><span className='text-4xl block w-2 h-2 bg-red-600 rounded-full absolute top-1 right-0 translate-x-2 '   > </span></Link></div>
                </div>
                 <div className='flex justify-str= bg-bg_light dark:bg-bg_dark ease-in-out duration-500 dark:ease-in-out dark:duration-500 items-center sm:z-10 '>

                            <div className={styles.navLinksWrapper} 
                                style={{
                                clipPath: toggle ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : ''
                                }}
                            >
                                <div className={`${styles.navlinks} capitalize `}>
                                  
                                    <Link className={`${styles.link} ${isActive('/')?'sm:text-white sm:text-2xl  sm:text-start sm:py-2 sm:pl-10 md:text-white md:text-start md:py-2 md:pl-10  text-red-600 border-b-2  border-solid border-red-600  font-semibold text-xl' : 'sm:py-2 sm:pl-10 sm:text-2xl sm:text-start md:text-start md:py-2 md:pl-10   pb-1    font-semibold text-xl text-white'}` } href='/' onClick={()=>{setToggle(false)}}>home</Link>
                                    <Link className={`${styles.link} ${isActive('/service')?'sm:text-white sm:text-2xl sm:text-start sm:py-2 sm:pl-10 sm:border-b-0 md:text-white md:text-start md:py-2 md:pl-10  text-red-600 border-b-2  border-solid border-red-600 font-semibold text-xl' : 'sm:py-2 sm:pl-10 pb-1 sm:text-2xl  sm:text-start  md:text-start md:py-2 md:pl-10  border-transparent font-semibold text-xl text-white'}` } href='/service' onClick={()=>{setToggle(false)}}>services</Link>
                                    <Link className={`${styles.link} ${isActive('/about')?'sm:text-white sm:text-2xl sm:text-start sm:py-2 sm:pl-10 md:text-white md:text-start md:py-2 md:pl-10   text-red-600 border-b-2  border-solid border-red-600 font-semibold text-xl' : ' sm:py-2 sm:pl-10 border-b-2 pb-1 sm:text-2xl sm:text-start md:text-start md:py-2 md:pl-10   border-transparent font-semibold text-xl text-white'}`} href='/about' onClick={()=>setToggle(false)}>about</Link>
                                    <Link className={`${styles.link} ${isActive('/skills')?'sm:text-white sm:text-2xl sm:text-start sm:py-2 sm:pl-10 md:text-white md:text-start md:py-2 md:pl-10   text-red-600 border-b-2  border-solid border-red-600 font-semibold text-xl' : 'sm:py-2 sm:pl-10 border-b-2 pb-1 sm:text-2xl sm:text-start md:text-start md:py-2 md:pl-10  border-transparent font-semibold text-xl text-white'}`} href='/skills' onClick={()=>setToggle(false)}>skills</Link>
                                    <Link className={`${styles.link} ${isActive('/work')?'sm:text-white sm:text-2xl sm:text-start sm:py-2 sm:pl-10 md:text-white md:text-start md:py-2 md:pl-10  text-red-600 border-b-2  border-solid border-red-600 font-semibold text-xl' : ' sm:py-2 sm:pl-10 border-b-2 pb-1 sm:text-2xl sm:text-start md:text-start md:py-2 md:pl-10  border-transparent font-semibold text-xl text-white'}`} href='/work' onClick={()=>setToggle(false)}>work</Link>
                                    <Link className={`${styles.link} ${isActive('/contact')?'sm:text-white sm:text-2xl  sm:text-start sm:py-2 sm:pl-10  md:text-white md:text-start md:py-2 md:pl-10  text-red-600 border-b-2  border-solid border-red-600  font-semibold text-xl' : ' sm:py-2 sm:pl-10 border-b-2 pb-1 sm:text-2xl sm:text-start md:text-start md:py-2 md:pl-10   border-transparent font-semibold text-xl text-white'}`} href='/contact' onClick={()=>setToggle(false)}>contact</Link>
                                </div>
                            </div>

                            
                                <TogggleTheme />
                            
                    

                  </div>

                
            </nav>

            
            
    </div>        
  )
}

export default Navbar
