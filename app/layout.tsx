import Navbar from '@/app/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Contact from './components/contact/Contact'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorios Facultad Ingeniería',
  description: 'Hecho en NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = "en">
      <body>
        <Navbar/>
        {children}
        <Contact/>
      </body>
    </html>
  )
}

