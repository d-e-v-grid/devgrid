'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:contact@example.com',
    color: 'hover:text-red-400',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'hover:text-sky-400',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Let's build something amazing together
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-8 mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={`p-4 glass-effect rounded-2xl ${link.color} transition-all hover:scale-110 hover:bg-white/10`}
              >
                <link.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-500"
          >
            © 2024 Taaliman. Built with Next.js, TypeScript, and Tailwind CSS.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
