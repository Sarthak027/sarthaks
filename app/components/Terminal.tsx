'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, Minimize2 } from 'lucide-react'
import { terminalCommands } from '../data/content'

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<{ command: string; output: string }[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    
    if (command === 'clear') {
      setHistory([])
      return
    }

    let output = ''
    
    if (command === '') {
      return
    } else if (command in terminalCommands) {
      output = terminalCommands[command as keyof typeof terminalCommands]
    } else if (command === 'github') {
      window.open('https://github.com/Sarthak027', '_blank')
      output = 'Opening GitHub profile...'
    } else if (command === 'resume') {
      output = 'Resume download feature coming soon!'
    } else {
      output = `Command not found: ${command}\nType 'help' for available commands.`
    }

    setHistory([...history, { command: cmd, output }])
    setInput('')
  }

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-gray-900 text-white rounded-full shadow-lg hover:scale-110 transition-transform z-40 ${
          isOpen ? 'hidden' : ''
        }`}
        aria-label="Open terminal"
      >
        <TerminalIcon size={24} />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[90vw] md:w-[600px] h-[500px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <TerminalIcon size={16} className="text-green-400" />
                <span className="text-sm font-mono text-gray-300">sarthak@portfolio:~$</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-700 rounded"
                  aria-label="Minimize"
                >
                  <Minimize2 size={16} className="text-gray-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-700 rounded"
                  aria-label="Close"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Terminal Output */}
            <div
              ref={outputRef}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm text-green-400"
            >
              <div className="mb-4">
                <p>Welcome to Sarthak&apos;s Portfolio Terminal</p>
                <p className="text-gray-500">Type &apos;help&apos; for available commands</p>
              </div>

              {history.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex gap-2">
                    <span className="text-blue-400">$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  <pre className="mt-2 text-gray-300 whitespace-pre-wrap">{item.output}</pre>
                </div>
              ))}

              {/* Input Line */}
              <div className="flex gap-2">
                <span className="text-blue-400">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommand(input)
                    }
                  }}
                  className="flex-1 bg-transparent outline-none text-white"
                  spellCheck={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
