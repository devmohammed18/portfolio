


import Navbar from './components/navbar/navbar'
import {Anton,Bungee} from 'next/font/google'

import './globals.css'

const bungee_init=Bungee({
weight:['400'],
subsets:['latin'],
variable:'--bungeeinit'
})
const Anton_init=Anton({
  weight: ['400'],
  subsets: ['latin'],
  
  variable:'--anton_init'
})

export default function RootLayout({

    children,
    
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

        <body className= {`${Anton_init.variable} ${bungee_init.variable} ` }>
          <Navbar />
          {children}
         
        </body>

      </html>
    )
  }