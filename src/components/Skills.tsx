'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'Rust', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['NestJS', 'Node.js', 'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'SolidJS', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'AI/ML',
    items: ['LLMs', 'Machine Learning', 'Deep Learning', 'AI Systems', 'Neural Networks'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'CI/CD', 'Git', 'Linux', 'Cloud Deployment'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Design Patterns', 'System Design', 'DDD', 'Event-Driven'],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient-neon font-black">Technical Skills</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="cyber-glass rounded-2xl p-8 hover:scale-105 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="relative text-2xl font-bold text-neon-cyan mb-6 neon-glow-cyan">
                {skillGroup.category}
              </h3>
              <div className="relative flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-black/50 border border-neon-magenta/30 rounded-lg text-sm font-medium hover:bg-neon-magenta/10 hover:border-neon-magenta hover:text-neon-magenta transition-all cursor-default hover:scale-110"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
