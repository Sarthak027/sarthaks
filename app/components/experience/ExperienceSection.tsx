'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/app/data/experienceData'
import AccentureExperience from './Accenture'
import BluestockExperience from './Bluestock'
import HacktoberfestExperience from './Hacktoberfest'
import GirlScriptExperience from './GirlScript'
import GeeksforGeeksExperience from './GeeksforGeeks'

export default function ExperienceSection() {
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
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Component = {
              accenture: AccentureExperience,
              bluestock: BluestockExperience,
              hacktoberfest: HacktoberfestExperience,
              girlscript: GirlScriptExperience,
              geeksforgeeks: GeeksforGeeksExperience,
            }[exp.theme]

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Component experience={exp} />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
