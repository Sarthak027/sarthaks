'use client'

import { Briefcase } from 'lucide-react'
import { Experience } from '@/app/data/experienceData'

interface Props {
  experience: Experience
}

export default function BluestockExperience({ experience }: Props) {
  return (
    <div className="border border-purple-200 rounded-2xl p-6 md:p-8 hover:border-purple-400 transition-colors duration-300 bg-gradient-to-br from-purple-50/30 to-transparent">
      <div className="flex items-center gap-3 mb-2">
        <Briefcase size={24} className="text-purple-600" />
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
      <p className="text-gray-600">Software engineering internship focused on fintech development</p>
    </div>
  )
}
