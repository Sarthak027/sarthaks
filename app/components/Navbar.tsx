'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../data/content'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Experience', anchor: 'experience', isRoute: false },
    { href: '/skills', label: 'Skills', isRoute: true },
    { href: '/', label: 'Certifications', anchor: 'certifications', isRoute: false },
    { href: '/', label: 'Education', anchor: 'education', isRoute: false },
    { href: '/about', label: 'About', isRoute: true },
  ]

  const isActive = (link: { href: string; isRoute: boolean; anchor?: string }) => {
    if (link.isRoute) {
      return pathname === link.href
    }
    return false
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (!link.isRoute && link.anchor) {
      if (pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(link.anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-light/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold font-mono hover:opacity-80 transition-opacity">
            {siteConfig.name}
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const href = link.isRoute ? link.href : `/${link.anchor ? '#' + link.anchor : ''}`
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link)
                      ? 'text-primary font-semibold'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex items-center gap-2 text-sm ml-4 pl-4 border-l border-gray-300">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600">{siteConfig.availability}</span>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background-light border-t"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const href = link.isRoute ? link.href : `/${link.anchor ? '#' + link.anchor : ''}`
              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(e) => {
                    handleLinkClick(e, link)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`text-lg font-medium transition-colors ${
                    isActive(link)
                      ? 'text-primary font-semibold'
                      : 'text-gray-900 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex items-center gap-2 text-sm pt-4 border-t">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-600">{siteConfig.availability}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
