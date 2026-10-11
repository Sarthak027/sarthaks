'use client'

import { FileText } from 'lucide-react'
import { Experience } from '@/app/data/experienceData'

interface Props {
  experience: Experience
}

export default function GeeksforGeeksExperience({ experience }: Props) {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 md:p-8 hover:border-gray-400 transition-colors duration-300 bg-gradient-to-br from-gray-50/30 to-transparent">
      <div className="flex items-center gap-3 mb-2">
        <FileText size={24} className="text-gray-700" />
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
      <p className="text-gray-600 mb-4">Technical content writing for developer education and knowledge sharing</p>
      {experience.technologies && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-md text-sm font-mono text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
