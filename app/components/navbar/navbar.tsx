"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import styles from './navbar.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import TogggleTheme from '../toggle_Theme/toggleTheme'
import classnames from 'classnames'
import ParticlesBackground from '../particlesbackground/particlesBackground';
function Navbar() {
    const [toggle,setToggle]=useState(false);
    // const [selectLink,setSelectLink]=useState(false)
   
    
   
  return (
    <div>
            
           
            <nav className={`${styles.navbar} ease-in-out duration-700 dark:ease-in-out dark:duration-700 dark:bg-bg_dark`}>
                <div className={styles.menu_logo }>
                    <div className={styles.menu}>{ !toggle?<AiOutlineMenu onClick={()=>setToggle(per=>!per)} />:<LiaTimesSolid onClick={()=>setToggle(per=>!per)} />} </div>
                    <div className={`${styles.logo} font-bungee`}><Link className={`${styles.link_logo} font-bungee`} href='/'>Mohammed<span className='text-4xl text-red-600' > .</span></Link></div>
                </div>
                 <div className='flex justify-between bg-bg_light dark:bg-bg_dark items-center sm:z-10 '>

                            <div className={styles.navLinksWrapper} 
                                style={{
                                clipPath: toggle ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : ''
                                }}
                            >
                                <div className={styles.navlinks}>
                                    {/* <Link   href='/' className={classnames(styles.link,pathname==='/'? styles.border_bottom_link:'')} onClick={()=>{setToggle(false)}}>Home</Link> */}
                                    <Link className={styles.link} href='/service' onClick={()=>{setToggle(false)}}>Services</Link>
                                    <Link className={styles.link} href='/about' onClick={()=>setToggle(false)}>About</Link>
                                    <Link className={styles.link}  href='/work' onClick={()=>setToggle(false)}>Work</Link>
                                    <Link className={styles.link} href='/contact' onClick={()=>setToggle(false)}>Contact</Link>
                                </div>
                            </div>

                            
                                <TogggleTheme />
                            
                    

                  </div>

                
            </nav>

            
            
    </div>        
  )
}

export default Navbar
