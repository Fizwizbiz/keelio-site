'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

export function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-answer-${index}`}
        id={`accordion-question-${index}`}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-body text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2"
      >
        <span className="text-[1rem] font-medium leading-snug pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-5 h-5 relative"
          aria-hidden="true"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </span>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-answer-${index}`}
            role="region"
            aria-labelledby={`accordion-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-[var(--color-text-muted)] font-body text-[0.9375rem] leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: { question: string; answer: string }[]
  openIndex: number | null
  onToggle: (index: number) => void
}

export default function Accordion({ items, openIndex, onToggle }: AccordionProps) {
  return (
    <div className="border-t border-[var(--color-border)]">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => onToggle(i)}
        />
      ))}
    </div>
  )
}
