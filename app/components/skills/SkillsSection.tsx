'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { skillsData, featuredSkills } from '@/app/data/skillsData'

export default function SkillsSection() {
  const displayedSkills = skillsData.filter(skill => featuredSkills.includes(skill.id))

  return (
    <section id="skills" className="section-container py-20">
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
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto"
        >
          A collection of tools I use to convince servers, pipelines, and YAML files to cooperate. Results may vary. 😌
        </motion.p>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/skills" className="btn-primary inline-flex items-center gap-2">
            Explore All Skills
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
