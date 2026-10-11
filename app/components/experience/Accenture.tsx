'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Building2 } from 'lucide-react'
import { Experience } from '@/app/data/experienceData'

interface Props {
  experience: Experience
}

export default function AccentureExperience({ experience }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-blue-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-colors duration-300 bg-gradient-to-br from-blue-50/30 to-transparent">
      <div
        className="p-6 md:p-8 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={24} className="text-blue-600" />
              <h3 className="text-2xl font-bold">{experience.company}</h3>
            </div>
            <p className="text-xl text-gray-700 mb-2">{experience.role}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
              <span>{experience.type}</span>
              <span>·</span>
              <span>{experience.startDate} – {experience.endDate}</span>
              <span>·</span>
              <span>{experience.location}</span>
            </div>
            <p className="text-gray-600 mb-4">
              Cloud Engineering, DevOps, Infrastructure as Code, CI/CD Migration, and Automation
            </p>
            {experience.technologies && (
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 border border-blue-200 rounded-md text-sm font-mono text-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <motion.button
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 hover:bg-blue-100 rounded-lg flex-shrink-0"
          >
            <ChevronDown size={24} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-blue-200"
          >
            <div className="p-6 md:p-8 bg-blue-50/20">
              <h4 className="font-bold mb-4 text-lg">Key Responsibilities</h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/50 rounded-lg border border-blue-200">
                <h5 className="font-bold mb-3 text-center">Migration Workflow</h5>
                <div className="font-mono text-sm text-gray-700 space-y-2">
                  <div className="text-center">AWS CodeBuild / Terraform</div>
                  <div className="text-center text-blue-600">↓</div>
                  <div className="text-center">Azure DevOps Pipelines</div>
                  <div className="text-center text-blue-600">↓</div>
                  <div className="text-center">Terraform Automation</div>
                  <div className="text-center text-blue-600">↓</div>
                  <div className="text-center">AWS Infrastructure</div>
                  <div className="mt-4 pt-4 border-t border-blue-200 text-center text-xs">
                    IAM · OIDC · S3 State · DynamoDB · Bash · KICS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
