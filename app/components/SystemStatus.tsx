'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { currentWork } from '../data/content'

export default function SystemStatus() {
  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="border border-gray-300 rounded-2xl p-8 md:p-12 bg-white">
          <div className="flex items-center gap-3 mb-8">
            <Activity size={24} className="text-primary" />
            <h2 className="text-2xl font-bold font-mono">{currentWork.title}</h2>
          </div>

          <ul className="space-y-3">
            {currentWork.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 py-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
