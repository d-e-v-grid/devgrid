'use client'

import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Background } from '@/components/Background'
import { Navigation } from '@/components/Navigation'
import { CursorGlow } from '@/components/CursorGlow'
import { GridPattern } from '@/components/GridPattern'
import { ScrollProgress } from '@/components/ScrollProgress'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <GridPattern />
      <CursorGlow />
      <ScrollProgress />
      <Navigation />

      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
