export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <nav>
        <h2>Navbar</h2>
      </nav>
      <head />
      <body>{children}</body>
      <footer>
        <h3 className="pt-3">Footer</h3>
      </footer>
    </html>
  )
}
