'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building2, Code2, GitBranch, FileText } from 'lucide-react'
import { experiences } from '@/app/data/experienceData'
import { notFound } from 'next/navigation'

const companyIcons = {
  accenture: Building2,
  hacktoberfest: GitBranch,
  girlscript: Code2,
  geeksforgeeks: FileText,
}

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  const experienceIndex = experiences.findIndex(exp => exp.id === params.id)
  if (experienceIndex === -1) { notFound() }
  const experience = experiences[experienceIndex]
  const previousExp = experienceIndex > 0 ? experiences[experienceIndex - 1] : null
  const nextExp = experienceIndex < experiences.length - 1 ? experiences[experienceIndex + 1] : null
  const Icon = companyIcons[experience.theme]

  return (
    <main className="min-h-screen pt-20">
      <div className="section-container py-12 md:py-20">
        <Link href="/experience" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />Back to timeline
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Icon size={48} className="text-primary" />
              {experience.endDate === 'Present' && (<span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">Current Position</span>)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{experience.company}</h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">{experience.role}</p>
            <div className="flex flex-wrap gap-3 text-lg text-gray-600 mb-6">
              <span>{experience.type}</span><span>·</span><span>{experience.startDate} – {experience.endDate}</span><span>·</span><span>{experience.location}</span>
            </div>
            <p className="text-xl text-gray-600">{experience.description}</p>
          </div>
          {experience.badges && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <div className="flex flex-wrap gap-3">
                {experience.badges.map((badge) => (<div key={badge} className="px-6 py-3 bg-white border-2 border-primary rounded-xl text-lg font-medium">{badge}</div>))}
              </div>
            </div>
          )}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Responsibilities & Contributions</h2>
            <ul className="space-y-4">
              {experience.responsibilities.map((resp, idx) => (
                <motion.li key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex gap-4 text-lg text-gray-700">
                  <span className="text-primary mt-1 flex-shrink-0">▸</span><span>{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          {experience.technologies && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (<span key={tech} className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-mono hover:border-primary transition-colors">{tech}</span>))}
              </div>
            </div>
          )}
          {experience.id === 'accenture' && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Migration Workflow</h2>
              <div className="border-2 border-purple-200 rounded-xl p-8 bg-purple-50/30">
                <div className="font-mono text-center space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-purple-200"><div className="font-bold text-lg mb-2">AWS CodeBuild</div><div className="text-sm text-gray-600">Terraform Workflows</div></div>
                  <div className="text-3xl text-purple-600">↓</div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200"><div className="font-bold text-lg mb-2">Azure DevOps Pipelines</div><div className="text-sm text-gray-600">YAML Templates & Automation</div></div>
                  <div className="text-3xl text-purple-600">↓</div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200"><div className="font-bold text-lg mb-2">Terraform Execution</div><div className="text-sm text-gray-600">Init · Validate · Plan · Apply · Destroy</div></div>
                  <div className="text-3xl text-purple-600">↓</div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200"><div className="font-bold text-lg mb-2">AWS Infrastructure</div><div className="text-sm text-gray-600">IAM · OIDC · S3 State · DynamoDB</div></div>
                  <div className="mt-6 pt-6 border-t border-purple-200"><div className="text-sm text-gray-600">Supporting: Bash Automation · Bitbucket · KICS Security Scanning</div></div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-12 border-t">
            {previousExp ? (<Link href={`/experience/${previousExp.id}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"><ArrowLeft size={20} /><span>Previous: {previousExp.company}</span></Link>) : (<div></div>)}
            {nextExp ? (<Link href={`/experience/${nextExp.id}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"><span>Next: {nextExp.company}</span><ArrowRight size={20} /></Link>) : (<div></div>)}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
