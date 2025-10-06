'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 glow-effect animate-float" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">Fullstack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Specializing in <span className="text-primary-400">TypeScript</span>,{' '}
            <span className="text-primary-400">Rust</span>,{' '}
            <span className="text-primary-400">NestJS</span>,{' '}
            <span className="text-primary-400">React</span>,{' '}
            <span className="text-primary-400">SolidJS</span>, and{' '}
            <span className="text-primary-400">AI/ML/LLM</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect rounded-lg font-semibold transition-all hover:scale-105 hover:bg-white/10"
            >
              Get in Touch
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
