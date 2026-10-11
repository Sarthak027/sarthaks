'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Briefcase, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react'
import { siteConfig } from '../data/content'

// Animated background particles representing cloud infrastructure and financial markets
function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion()
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; type: 'cloud' | 'chart' | 'node' }>>([])

  useEffect(() => {
    if (prefersReducedMotion) return

    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      type: i % 3 === 0 ? 'cloud' : i % 3 === 1 ? 'chart' : 'node' as 'cloud' | 'chart' | 'node'
    }))
    setParticles(particleArray)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Infrastructure nodes */}
      {particles.filter(p => p.type === 'node').map(particle => (
        <motion.div
          key={`node-${particle.id}`}
          className="absolute bg-gray-400 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + particle.id,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Chart line paths */}
      {particles.filter(p => p.type === 'chart').map(particle => (
        <motion.div
          key={`chart-${particle.id}`}
          className="absolute h-px bg-gray-300"
          style={{
            width: '100px',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transformOrigin: 'left center',
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6 + particle.id * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Cloud elements */}
      {particles.filter(p => p.type === 'cloud').map(particle => (
        <motion.div
          key={`cloud-${particle.id}`}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15 + particle.id,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width={particle.size * 8} height={particle.size * 5} viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="1" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default function AboutPage() {

    const interests = [
    {
      title: 'Cloud & Infrastructure',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'DevOps & Platform Engineering',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Finance & Stock Markets',
      image: 'https://cdn-icons-png.flaticon.com/512/2721/2721284.png',
      gradient: 'from-amber-500 to-red-500'
    },
    {
      title: 'Forex',
      image: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
      gradient: 'from-violet-500 to-pink-500'
    },
    {
      title: 'AI/ML, MLOps & AIOps',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Open Source',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Writing & Sharing',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg',
      gradient: 'from-rose-500 to-pink-500'
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="section-container py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-mono"
            >
              A HUMAN, NOT JUST A COMMIT MESSAGE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Hey, I&apos;m Sarthak Prasad Parida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Software engineer who enjoys building cloud infrastructure, watching market charts move, and debugging deployment pipelines at 2 AM.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center items-center text-gray-700"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <Briefcase size={18} />
                <span className="font-medium">Accenture</span>
              </div>
              <span className="text-gray-400">·</span>
              <span>Bhubaneswar, Odisha</span>
              <span className="text-gray-400">·</span>
              <span>Hybrid Setup</span>
              <span className="text-gray-400">·</span>
              <span>From Cuttack</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Journey So Far</h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              I&apos;m from Odisha, India—currently working at{' '}
              <a href="/experience/accenture" className="text-gray-900 font-medium hover:underline">
                Accenture
              </a>{' '}
              in Bhubaneswar in a hybrid setup, with Cuttack as my hometown.
            </p>

            <p>
              My work involves building and automating cloud infrastructure, migrating CI/CD pipelines from AWS to Azure DevOps, writing Terraform modules, and making deployment workflows more reliable. I spend most of my time figuring out how to make infrastructure deployment less manual and more repeatable.
            </p>

            <p>
              Before joining Accenture full-time, I contributed to open-source during{' '}
              <a href="/experience/hacktoberfest" className="text-gray-900 font-medium hover:underline">
                Hacktoberfest
              </a>
              , worked with the{' '}
              <a href="/experience/girlscript" className="text-gray-900 font-medium hover:underline">
                GirlScript Summer of Code
              </a>{' '}
              community, and wrote technical content at{' '}
              <a href="/experience/geeksforgeeks" className="text-gray-900 font-medium hover:underline">
                GeeksforGeeks
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>

      {/* B.Tech Section */}
      <section className="section-container py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The B.Tech Chapter</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I did my B.Tech in Computer Science and Engineering. It taught me data structures, algorithms, operating systems, and a lot about how computers actually work under the hood.
            </p>

            <p>
              Most importantly, it taught me how to debug things that make no sense at 3 AM, read documentation nobody wants to read, and turn caffeine into working code.
            </p>

            <p className="text-gray-600 italic">
              (Also learned that &quot;it compiles&quot; and &quot;it works&quot; are two very different things.)
            </p>
          </div>
        </motion.div>
      </section>

      {/* Interests Section */}
      <section className="section-container py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What I&apos;m Into</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`} 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>
                  
                  {/* Animated icon */}
                  <div className="w-16 h-16 mb-6 relative flex items-center justify-center">
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Title with gradient on hover */}
                  <h3 className={`text-xl font-bold mb-2 transition-all duration-300 bg-gradient-to-r ${interest.gradient} bg-clip-text group-hover:text-transparent`}>
                    {interest.title}
                  </h3>
                  
                  {/* Animated background effect */}
                  <motion.div
                    className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${interest.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Profiles Section */}
      <section className="section-container py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Find Me Around the Internet</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: 'X (Twitter)',
                handle: '@Sarthaks_twt',
                url: siteConfig.twitter,
                icon: Twitter,
                description: 'Thoughts on tech, cloud, and occasional market commentary.'
              },
              {
                name: 'Medium',
                handle: '@sarthakparida147',
                url: siteConfig.medium,
                icon: ExternalLink,
                description: 'Technical articles and what I\'m learning.'
              },
              {
                name: 'LinkedIn',
                handle: 'sarthak-prasad-parida',
                url: siteConfig.linkedin,
                icon: Linkedin,
                description: 'Professional updates and connections.'
              },
              {
                name: 'GitHub',
                handle: '@Sarthak027',
                url: siteConfig.github,
                icon: Github,
                description: 'Code, projects, and open-source contributions.'
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-900 transition-colors group"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-900 transition-colors">
                  <social.icon size={24} className="text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">{social.name}</h3>
                    <ExternalLink size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2 font-mono">{social.handle}</p>
                  <p className="text-gray-600">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Closing Section */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Anyway, that&apos;s the human behind the infrastructure.
          </p>
          <div className="mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-lg text-gray-900 font-medium hover:underline"
            >
              ← Back to homepage
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}




