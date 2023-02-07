'use client'
import '../styles/globals.css';
import Navbar from '../components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <body>
        <main>
          <nav>
            <Navbar/>
          </nav>
          {children}
          <footer>
            <h3 className=''>~end~</h3>
          </footer>
        </main>
      </body>
    </html>
  )
}
