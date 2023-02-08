'use client'
import '../styles/globals.css';
import Navbar from '../components/navbar';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
