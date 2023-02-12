'use client'
import '../styles/globals.css';
import Navbar from '../components/navbar';
import { ThemeProvider, useTheme } from 'next-themes';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}, dark: boolean) {

  const { resolvedTheme, setTheme } = useTheme();
  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  const darkTransition = {
    darkMode: {
      scale:1
    },
    lightMode: {
      scale:1
    }
  }

  return (
    <html>
      <body>
        <ThemeProvider attribute='class'>
          <motion.div 
          variants={darkTransition}
          initial={'lightMode'}
          animate={'darkMode'} >
            <main>
              <nav>
                <Navbar/>
              </nav>
              {children}
              <footer>
                <h3 className=''>~end~</h3>
              </footer>
            </main>
          </motion.div>
        </ThemeProvider>
      </body>
    </html>
  )
}
