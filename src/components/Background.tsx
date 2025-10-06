'use client'

import { useEffect, useRef } from 'react'

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.5 + 0.3

        // Neon colors
        const colors = [
          '0, 255, 255',    // cyan
          '255, 0, 255',    // magenta
          '255, 0, 110',    // pink
          '0, 217, 255',    // blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > (canvas?.width || 0)) this.vx *= -1
        if (this.y < 0 || this.y > (canvas?.height || 0)) this.vy *= -1
      }

      draw() {
        if (!ctx) return

        // Draw glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        )
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`)
        gradient.addColorStop(1, `rgba(${this.color}, 0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw core
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity + 0.3})`
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            const opacity = 0.3 * (1 - distance / 150)

            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            )
            gradient.addColorStop(0, `rgba(${particle.color}, ${opacity})`)
            gradient.addColorStop(1, `rgba(${otherParticle.color}, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at top, #1a0033 0%, #000000 40%, #001a33 70%, #000000 100%)'
      }}
    />
  )
}
