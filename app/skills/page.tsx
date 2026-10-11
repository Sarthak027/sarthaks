'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, X } from 'lucide-react'
import Image from 'next/image'
import { skillsData } from '@/app/data/skillsData'
import { experiences } from '@/app/data/experienceData'
import { projects } from '@/app/data/projectsData'

export default function SkillsPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const selectedSkillData = selectedSkill ? skillsData.find(s => s.id === selectedSkill) : null

  // Cloud platforms with their services
  const awsServices = skillsData.filter(s => s.parentPlatform === 'aws')
  const azureServices = skillsData.filter(s => s.parentPlatform === 'azure')

  // Other categorized skills
  const iacSkills = skillsData.filter(s => s.category === 'Infrastructure as Code')
  const devopsSkills = skillsData.filter(s => s.category === 'DevOps & CI/CD')
  const containerSkills = skillsData.filter(s => s.category === 'Containers & Orchestration')
  const linuxSkills = skillsData.filter(s => s.category === 'Linux & Infrastructure')
  const programmingSkills = skillsData.filter(s => s.category === 'Programming Languages')
  const frontendSkills = skillsData.filter(s => s.category === 'Frontend Development')
  const backendSkills = skillsData.filter(s => s.category === 'Backend & Databases')

  // Professional vs Project vs Knowledge
  const projectSkills = skillsData.filter(s => s.experienceLevel === 'project')
  const knowledgeSkills = skillsData.filter(s => s.experienceLevel === 'knowledge')

  const getExperienceLabel = (level?: string) => {
    switch (level) {
      case 'professional':
        return { text: 'Professional Experience', color: 'text-green-700 bg-green-100' }
      case 'project':
        return { text: 'Project Experience', color: 'text-blue-700 bg-blue-100' }
      case 'knowledge':
        return { text: 'Knowledge', color: 'text-gray-700 bg-gray-100' }
      default:
        return { text: '', color: '' }
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="section-container py-12 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">My Technical Toolkit</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Tools for making things automatic, fixing what automation broke, and pretending it was all part of the plan.
          </p>

          {/* Professional Experience Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-3">Professional Experience</h2>
            <p className="text-gray-600 mb-6">Technologies I use in production environments and professional work.</p>
            
            {/* AWS Services */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">AWS Services I Know & Have Experience With</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {awsServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedSkill(service.id)}
                    className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                  >
                    <Image src={service.logo} alt={service.name} width={48} height={48} className="object-contain" />
                    <span className="text-sm font-medium text-center">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Azure Services */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Azure Services I Know & Have Experience With</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {azureServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedSkill(service.id)}
                    className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all"
                  >
                    <Image src={service.logo} alt={service.name} width={48} height={48} className="object-contain" />
                    <span className="text-sm font-medium text-center">{service.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Other Professional Skills */}
            <div className="space-y-8">
              {iacSkills.filter(s => s.experienceLevel === 'professional').length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Infrastructure as Code (IaC)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {iacSkills.filter(s => s.experienceLevel === 'professional').map(skill => (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill.id)}
                        className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                      >
                        <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {devopsSkills.filter(s => s.experienceLevel === 'professional').length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">DevOps, CI/CD & Automation</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {devopsSkills.filter(s => s.experienceLevel === 'professional').map(skill => (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill.id)}
                        className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                      >
                        <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {containerSkills.filter(s => s.experienceLevel === 'professional').length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Containers & Cloud-Native</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {containerSkills.filter(s => s.experienceLevel === 'professional').map(skill => (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill.id)}
                        className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                      >
                        <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {linuxSkills.filter(s => s.experienceLevel === 'professional').length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Linux, Systems & Networking</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {linuxSkills.filter(s => s.experienceLevel === 'professional').map(skill => (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill.id)}
                        className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                      >
                        <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Experience Skills */}
          {projectSkills.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-3">Project Experience</h2>
              <p className="text-gray-600 mb-6">Technologies used in personal projects and open-source contributions.</p>
              
              <div className="space-y-8">
                {programmingSkills.filter(s => s.experienceLevel === 'project').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {programmingSkills.filter(s => s.experienceLevel === 'project').map(skill => (
                        <button
                          key={skill.id}
                          onClick={() => setSelectedSkill(skill.id)}
                          className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                        >
                          <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {frontendSkills.filter(s => s.experienceLevel === 'project').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {frontendSkills.filter(s => s.experienceLevel === 'project').map(skill => (
                        <button
                          key={skill.id}
                          onClick={() => setSelectedSkill(skill.id)}
                          className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                        >
                          <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {backendSkills.filter(s => s.experienceLevel === 'project').length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Backend Development & Databases</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {backendSkills.filter(s => s.experienceLevel === 'project').map(skill => (
                        <button
                          key={skill.id}
                          onClick={() => setSelectedSkill(skill.id)}
                          className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                        >
                          <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Knowledge Skills */}
          {knowledgeSkills.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-3">Additional Technologies</h2>
              <p className="text-gray-600 mb-6">Familiar with these technologies through study and exploration.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {knowledgeSkills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill.id)}
                    className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all"
                  >
                    <Image src={skill.logo} alt={skill.name} width={48} height={48} className="object-contain" />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkillData && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedSkillData.logo}
                  alt={selectedSkillData.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-3xl font-bold">{selectedSkillData.name}</h2>
                  <p className="text-gray-500">{selectedSkillData.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {selectedSkillData.experienceLevel && (
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getExperienceLabel(selectedSkillData.experienceLevel).color}`}>
                    {getExperienceLabel(selectedSkillData.experienceLevel).text}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold mb-2">Overview</h3>
                <p className="text-gray-700">{selectedSkillData.description}</p>
              </div>

              {selectedSkillData.parentPlatform && (
                <div>
                  <h3 className="text-lg font-bold mb-2">Part of</h3>
                  <p className="text-gray-700">
                    {skillsData.find(s => s.id === selectedSkillData.parentPlatform)?.name}
                  </p>
                </div>
              )}

              {selectedSkillData.relatedExperiences && selectedSkillData.relatedExperiences.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-3">Related Experience</h3>
                  <div className="space-y-2">
                    {selectedSkillData.relatedExperiences.map(expId => {
                      const exp = experiences.find(e => e.id === expId)
                      return exp ? (
                        <div
                          key={expId}
                          className="p-3 border border-gray-200 rounded-lg"
                        >
                          <p className="font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-600">{exp.role}</p>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              )}

              {selectedSkillData.relatedProjects && selectedSkillData.relatedProjects.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-3">Related Projects</h3>
                  <div className="space-y-2">
                    {selectedSkillData.relatedProjects.map(projectId => {
                      const project = projects.find(p => p.id === projectId)
                      return project ? (
                        <div
                          key={projectId}
                          className="p-3 border border-gray-200 rounded-lg"
                        >
                          <p className="font-medium">{project.title}</p>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              )}

              {selectedSkillData.relatedSkills && selectedSkillData.relatedSkills.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-3">Related Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkillData.relatedSkills.map(relatedId => {
                      const related = skillsData.find(s => s.id === relatedId)
                      return related ? (
                        <button
                          key={relatedId}
                          onClick={() => setSelectedSkill(relatedId)}
                          className="px-3 py-1 border border-gray-300 rounded-lg hover:border-primary transition-colors text-sm"
                        >
                          {related.name}
                        </button>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}
