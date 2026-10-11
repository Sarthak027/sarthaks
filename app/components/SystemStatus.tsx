'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { currentWork } from '../data/content'

export default function SystemStatus() {
  const [commandTyped, setCommandTyped] = useState('')
  const [showItems, setShowItems] = useState(false)
  const [visibleItems, setVisibleItems] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const fullCommand = currentWork.command

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      // Show everything immediately
      setCommandTyped(fullCommand)
      setShowItems(true)
      setVisibleItems(currentWork.items.length)
      setShowCursor(false)
      return
    }

    // Type command
    let currentIndex = 0
    const commandInterval = setInterval(() => {
      if (currentIndex < fullCommand.length) {
        setCommandTyped(fullCommand.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(commandInterval)
        setTimeout(() => {
          setShowItems(true)
        }, 300)
      }
    }, 50)

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(commandInterval)
      clearInterval(cursorInterval)
    }
  }, [fullCommand, prefersReducedMotion])

  useEffect(() => {
    if (!showItems || prefersReducedMotion) return

    let currentItem = 0
    const itemInterval = setInterval(() => {
      if (currentItem < currentWork.items.length) {
        setVisibleItems(currentItem + 1)
        currentItem++
      } else {
        clearInterval(itemInterval)
        setShowCursor(false)
      }
    }, 400)

    return () => clearInterval(itemInterval)
  }, [showItems, prefersReducedMotion])

  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-900">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono ml-2">{currentWork.title}</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm min-h-[300px]">
            {/* Command line */}
            <div className="mb-4 text-gray-300">
              <span className="text-green-400">→</span> {commandTyped}
              <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${showCursor && commandTyped.length < fullCommand.length ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>

            {/* Output */}
            {showItems && (
              <div className="space-y-3 text-gray-300">
                {currentWork.items.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={prefersReducedMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    {item.completed ? (
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Check size={16} className="text-green-400" />
                        <span className="text-green-400">[DONE]</span>
                      </div>
                    ) : (
                      <span className="text-gray-500 flex-shrink-0">→</span>
                    )}
                    <span className={item.completed ? 'text-gray-400' : ''}>{item.text}</span>
                  </motion.div>
                ))}
                <div className={`inline-block w-2 h-4 bg-green-400 ${showCursor && visibleItems === currentWork.items.length ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
