import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taaliman | Fullstack Developer',
  description: 'Fullstack Developer specializing in TypeScript, Rust, NestJS, React, ML/LLM, and AI',
  keywords: ['fullstack', 'typescript', 'rust', 'nestjs', 'react', 'solidjs', 'ml', 'llm', 'ai'],
  authors: [{ name: 'Taaliman' }],
  openGraph: {
    title: 'Taaliman | Fullstack Developer',
    description: 'Fullstack Developer specializing in TypeScript, Rust, NestJS, React, ML/LLM, and AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
