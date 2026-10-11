'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Code2, GitBranch, FileText } from 'lucide-react'
import { experiences } from '@/app/data/experienceData'

const companyIcons = {
  accenture: Building2,
  hacktoberfest: GitBranch,
  girlscript: Code2,
  geeksforgeeks: FileText,
}

export default function ExperiencePreview() {
  return (
    <section id="experience" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          My Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          Currently building cloud infrastructure and CI/CD automation at Accenture, with contributions to open-source projects and technical education.
        </motion.p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
          {experiences.map((exp, index) => {
            const Icon = companyIcons[exp.theme]
            const isCurrent = exp.endDate === 'Present'

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/experience/${exp.id}`}>
                  <div className="border border-gray-300 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          {isCurrent && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 font-medium mb-1">{exp.role}</p>
                        <p className="text-sm text-gray-500 mb-3">
                          {exp.startDate} – {exp.endDate}
                        </p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/experience" className="btn-primary inline-flex items-center gap-2">
            Explore Experience
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
