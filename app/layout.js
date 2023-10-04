import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Let\'s kode...',
  description: 'The portfolio of a dope-ass dev.',
}

// export const revalidate = 3600 // revalidate at most every hour

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
