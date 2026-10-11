'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Globe } from 'lucide-react'
import { siteConfig } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12"
        >
          Interested in cloud infrastructure, DevOps, or collaboration opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
            aria-label="GitHub"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href={siteConfig.geeksforgeeks}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
            aria-label="GeeksforGeeks"
          >
            <Globe size={24} />
            <span>GeeksforGeeks</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
