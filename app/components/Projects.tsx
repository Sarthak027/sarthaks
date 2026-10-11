'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import { projects } from '../data/projectsData'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="work" className="section-container py-20">
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
          Projects
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-300 rounded-2xl overflow-hidden hover:border-primary transition-colors duration-300"
            >
              <div
                className="p-6 md:p-8 cursor-pointer"
                onClick={() =>
                  setExpandedProject(expandedProject === project.id ? null : project.id)
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.dates}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-code border border-gray-200 rounded-md text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronDown size={24} />
                  </motion.button>
                </div>
              </div>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 md:p-8 bg-code/30 space-y-4">
                      {project.features && (
                        <div>
                          <h4 className="font-bold mb-2">Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex gap-2 text-gray-700">
                                <span className="text-primary">▸</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                          >
                            <Github size={18} />
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
