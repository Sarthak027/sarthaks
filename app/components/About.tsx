'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-container py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed">
            <p>
              I&apos;m Sarthak, a Software Engineer at Accenture focused on Cloud and DevOps engineering. My work involves AWS-to-Azure DevOps CI/CD migration, Terraform automation, reusable YAML pipelines, cloud infrastructure, and troubleshooting infrastructure deployment workflows.
            </p>

            <p>
              I enjoy building automation that makes infrastructure deployments more consistent and maintainable. My interests include cloud engineering, Infrastructure as Code, CI/CD, DevSecOps, Linux systems, containerization, and open-source software.
            </p>

            <p>
              Outside my professional work, I have contributed to open-source projects and written technical content to help developers learn.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
