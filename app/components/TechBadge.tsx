'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TechBadgeProps {
  name: string
  tooltip: string
}

export default function TechBadge({ name, tooltip }: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 border border-gray-300 rounded-lg font-mono text-sm font-medium cursor-default hover:border-primary transition-colors duration-300"
      >
        {name}
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10"
          >
            {tooltip}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
