'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by Sarthak Prasad Parida</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>Next.js • TypeScript • Tailwind CSS</span>
          </div>

          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
