'use client'

import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

// Word-by-word heading reveal — outcrowd.io style
export function AnimatedHeading({ text, className, delay = 0, as: Tag = 'h2' }: Props) {
  const words = text.split(' ')
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: delay + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

// Staggered fade-up for body text / paragraphs
export function AnimatedP({ text, className, delay = 0 }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {text}
    </motion.p>
  )
}

// Section overline pill reveal
export function AnimatedTag({ text, className, delay = 0 }: Props) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={className}
    >
      {text}
    </motion.span>
  )
}
