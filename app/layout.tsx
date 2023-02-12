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

  return (
    <html>
      <body>
        <ThemeProvider attribute='class'>
            <main>
              <nav>
                <Navbar/>
              </nav>
              {children}
              <footer>
                <h3 className=''>~end~</h3>
              </footer>
            </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
