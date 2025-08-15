import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sarthak Ray - Full Stack Developer',
  description: 'Portfolio of Sarthak Ray - AWS Certified Cloud Practitioner & Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
