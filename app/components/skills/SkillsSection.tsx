'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '@/app/data/skillsData'

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([skillsData[0]?.category, skillsData[1]?.category])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

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
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {skillsData.map((category, index) => {
            const isExpanded = expandedCategories.includes(category.category)
            const displayedSkills = isExpanded ? category.skills : category.skills.slice(0, 6)

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-300 rounded-xl p-6 hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {displayedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-code border border-gray-200 rounded-lg text-sm hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {category.skills.length > 6 && (
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="text-sm text-primary hover:underline"
                  >
                    {isExpanded ? 'Show less' : `Show ${category.skills.length - 6} more`}
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
