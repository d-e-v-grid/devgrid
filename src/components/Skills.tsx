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
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">
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
              className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-primary-950/50 border border-primary-800/50 rounded-lg text-sm font-medium hover:bg-primary-900/50 hover:border-primary-700/50 transition-all cursor-default"
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
