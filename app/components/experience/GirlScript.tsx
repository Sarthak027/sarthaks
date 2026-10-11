'use client'

import { Code2 } from 'lucide-react'
import { Experience } from '@/app/data/experienceData'

interface Props {
  experience: Experience
}

export default function GirlScriptExperience({ experience }: Props) {
  return (
    <div className="border border-green-200 rounded-2xl p-6 md:p-8 hover:border-green-400 transition-colors duration-300 bg-gradient-to-br from-green-50/30 to-transparent">
      <div className="flex items-center gap-3 mb-2">
        <Code2 size={24} className="text-green-600" />
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
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-2 text-green-800">Docker Containerization</h4>
          <ul className="space-y-1 text-gray-700">
            <li className="flex gap-2">
              <span className="text-green-600">▸</span>
              <span>Created separate containers for frontend and backend</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">▸</span>
              <span>Implemented docker-compose.yml for container communication</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-green-800">MongoDB Optimization</h4>
          <ul className="space-y-1 text-gray-700">
            <li className="flex gap-2">
              <span className="text-green-600">▸</span>
              <span>Refactored connection for lazy initialization</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">▸</span>
              <span>Added error handling for connection lifecycle</span>
            </li>
          </ul>
        </div>
      </div>
      {experience.technologies && (
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-green-100 border border-green-200 rounded-md text-sm font-mono text-green-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
