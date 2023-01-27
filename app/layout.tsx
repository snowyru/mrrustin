'use client'
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
            <h3 className='text-3xl font-bold underline'>Footer</h3>
          </footer>
        </main>
      </body>
    </html>
  )
}
