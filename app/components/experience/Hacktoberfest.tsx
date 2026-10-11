'use client'

import { GitBranch } from 'lucide-react'
import { Experience } from '@/app/data/experienceData'

interface Props {
  experience: Experience
}

export default function HacktoberfestExperience({ experience }: Props) {
  return (
    <div className="border border-orange-200 rounded-2xl p-6 md:p-8 hover:border-orange-400 transition-colors duration-300 bg-gradient-to-br from-orange-50/30 to-transparent">
      <div className="flex items-center gap-3 mb-2">
        <GitBranch size={24} className="text-orange-600" />
        <h3 className="text-2xl font-bold">{experience.company}</h3>
      </div>
      <p className="text-xl text-gray-700 mb-2">{experience.role}</p>
      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
        <span>{experience.type}</span>
        <span>·</span>
        <span>{experience.startDate}</span>
        <span>·</span>
        <span>{experience.location}</span>
      </div>
      <ul className="space-y-2 mb-4">
        {experience.responsibilities.map((resp, idx) => (
          <li key={idx} className="flex gap-2 text-gray-700">
            <span className="text-orange-600">▸</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-orange-100 border border-orange-200 rounded-md text-sm font-mono text-orange-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
