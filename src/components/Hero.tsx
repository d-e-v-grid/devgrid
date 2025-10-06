'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="relative animate-float">
              <div className="w-32 h-32 rounded-full overflow-hidden neon-glow-cyan relative">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 via-transparent to-neon-magenta/20 animate-neon-pulse" />
              </div>
              <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-neon-cyan/50 animate-neon-pulse" />
              <div className="absolute inset-0 w-32 h-32 rounded-full border border-neon-magenta/30 animate-neon-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient-neon font-black tracking-tight">Fullstack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Specializing in <span className="text-neon-cyan font-semibold neon-glow-cyan">TypeScript</span>,{' '}
            <span className="text-neon-magenta font-semibold neon-glow-magenta">Rust</span>,{' '}
            <span className="text-neon-pink font-semibold neon-glow-pink">NestJS</span>,{' '}
            <span className="text-neon-cyan font-semibold neon-glow-cyan">React</span>,{' '}
            <span className="text-neon-purple font-semibold">SolidJS</span>, and{' '}
            <span className="text-neon-magenta font-semibold neon-glow-magenta">AI/ML/LLM</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="relative px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg font-bold text-black transition-all hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 neon-glow-cyan opacity-50" />
            </a>
            <a
              href="#contact"
              className="relative px-8 py-4 cyber-glass rounded-lg font-bold transition-all hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10 text-neon-cyan">Get in Touch</span>
              <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
