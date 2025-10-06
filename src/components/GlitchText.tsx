'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  children: string
  className?: string
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span
      className={`inline-block ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      data-text={children}
    >
      {children}
    </span>
  )
}
