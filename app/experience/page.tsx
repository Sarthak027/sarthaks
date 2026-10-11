'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Code2, GitBranch, FileText, ArrowLeft } from 'lucide-react'
import { experiences } from '@/app/data/experienceData'

const companyIcons = {
  accenture: Building2,
  hacktoberfest: GitBranch,
  girlscript: Code2,
  geeksforgeeks: FileText,
}

const themeColors = {
  accenture: 'border-purple-200 hover:border-purple-400 bg-gradient-to-br from-purple-50/30',
  hacktoberfest: 'border-green-200 hover:border-green-400 bg-gradient-to-br from-green-50/30',
  girlscript: 'border-pink-200 hover:border-pink-400 bg-gradient-to-br from-pink-50/30',
  geeksforgeeks: 'border-emerald-200 hover:border-emerald-400 bg-gradient-to-br from-emerald-50/30',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="section-container py-20">
        <Link href="/#experience" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            My journey through cloud engineering, DevOps automation, open-source contributions, and technical education.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {experiences.map((exp, index) => {
              const Icon = companyIcons[exp.theme]
              const colorClasses = themeColors[exp.theme]

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative mb-12 pl-20 md:pl-28"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-10 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background-light"></div>

                  <Link href={`/experience/${exp.id}`}>
                    <div className={`border rounded-2xl p-6 md:p-8 transition-all duration-300 ${colorClasses} to-transparent cursor-pointer`}>
                      <div className="flex items-start gap-4 mb-4">
                        <Icon size={32} className="flex-shrink-0 text-primary" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-2xl font-bold">{exp.company}</h3>
                            {exp.endDate === 'Present' && (
                              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xl text-gray-700 mb-2">{exp.role}</p>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
                            <span>{exp.type}</span>
                            <span>·</span>
                            <span>{exp.startDate} – {exp.endDate}</span>
                            <span>·</span>
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{exp.description}</p>

                          {exp.badges && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm"
                                >
                                  🏆 {badge}
                                </span>
                              ))}
                            </div>
                          )}

                          {exp.technologies && (
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.slice(0, 6).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-white/80 border border-gray-200 rounded-md text-sm font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                              {exp.technologies.length > 6 && (
                                <span className="px-3 py-1 text-sm text-gray-500">
                                  +{exp.technologies.length - 6} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-primary font-medium">
                        View details
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
