'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, Mail, Twitter, Wallet, Copy, Check, X } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/luxquant',
    color: 'hover:text-gray-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:luxquant@gst.st',
    color: 'hover:text-red-400',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    href: 'https://x.com/LuxQuant',
    color: 'hover:text-sky-400',
  },
]

const donations = [
  {
    name: 'USDT (TRC20)',
    address: 'TP35uSgdxbJeQUmowRdkHozzzhrTzsLqPQ',
    color: 'text-green-400',
  },
  {
    name: 'Ethereum',
    address: '0x7A81E572Ad870b259D4D2e262cA6558e6d17cf6b',
    color: 'text-purple-400',
  },
  {
    name: 'Bitcoin (Taproot)',
    address: 'bc1pj4qeq6zcq5s6s7nsdn5lwyjmzlssjcyh6dvxnfadjsgh30dgzfzsau4ckv',
    color: 'text-orange-400',
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const copyToClipboard = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(address)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

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
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Wallet className="w-6 h-6 text-gradient" />
              <span className="text-gradient">Support me with Crypto</span>
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {donations.map((donation, index) => (
                <motion.div
                  key={donation.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass-effect rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-all group"
                >
                  <div className="flex-1 text-left">
                    <div className={`font-semibold mb-1 ${donation.color}`}>
                      {donation.name}
                    </div>
                    <div className="text-gray-400 text-sm font-mono break-all">
                      {donation.address}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(donation.address)}
                    className="ml-4 p-3 glass-effect rounded-xl hover:bg-white/20 transition-all hover:scale-110 flex-shrink-0"
                    aria-label={`Copy ${donation.name} address`}
                  >
                    {copiedAddress === donation.address ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} LuxQuant. Built with Next.js, TypeScript, and Tailwind CSS.
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
