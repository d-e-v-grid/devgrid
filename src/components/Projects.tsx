'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'Omnitron',
    description: 'Minimalist TypeScript ecosystem with Titan framework, Netron RPC, and enterprise-grade distributed systems tools',
    tags: ['TypeScript', 'Framework', 'DI', 'Microservices'],
    github: 'https://github.com/omnitron-dev/omni',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Holon',
    description: 'Advanced system for building modular, composable applications with functional programming principles',
    tags: ['TypeScript', 'Functional', 'Modularity', 'Architecture'],
    github: 'https://github.com/holon-sh/holon',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Xec',
    description: 'High-performance execution engine for distributed computing and parallel processing',
    tags: ['Rust', 'Performance', 'Distributed', 'Engine'],
    github: 'https://github.com/xec-sh/xec',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Kysera',
    description: 'Modern authentication and authorization system with advanced security features',
    tags: ['Security', 'Auth', 'TypeScript', 'OAuth'],
    github: 'https://github.com/kysera-dev/kysera',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Vibrancy',
    description: 'Fine-grained reactive system with signals, effects, and advanced state management',
    tags: ['Reactivity', 'Signals', 'TypeScript', 'Performance'],
    github: 'https://github.com/luxquant/vibrancy',
    gradient: 'from-yellow-500 to-amber-500',
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Open source projects and frameworks I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-950/50 border border-primary-800/50 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
