import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DarkModeProvider } from '@/components/DarkModeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Resource Hub',
  description: 'Comprehensive technology information and resources',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <DarkModeProvider>
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 scroll-smooth">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  )
}