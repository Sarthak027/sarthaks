'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/app/data/educationData'

export default function EducationSection() {
  return (
    <section id="education" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-300 rounded-xl p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <GraduationCap size={32} className="text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-xl text-gray-700 mb-2">{edu.degree}</p>
                  <p className="text-gray-600 mb-3">Field of Study: {edu.field}</p>
                  <p className="text-gray-500">{edu.startDate} – {edu.endDate}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
