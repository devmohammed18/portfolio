


import Navbar from './components/navbar/navbar'
import ParticlesBackground from './components/particlesbackground/particlesBackground'

import './globals.css'

export default function RootLayout({

    children,
    
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

        <body >
          <Navbar />
          {children}
         
        </body>

      </html>
    )
  }