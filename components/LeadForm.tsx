'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FieldDef {
  key: string
  label: string
  placeholder: string
  inputType?: string
  required: boolean
}

interface StepDef {
  id: string
  question: string
  subtext?: string
  type: 'fields' | 'select' | 'multiselect'
  options?: string[]
  fields?: FieldDef[]
}

const STEPS: StepDef[] = [
  {
    id: 'name',
    question: 'First, who are we talking to?',
    type: 'fields',
    fields: [
      { key: 'name', label: 'Your full name', placeholder: 'Jane Smith', required: true },
    ],
  },
  {
    id: 'company',
    question: "What's your company?",
    type: 'fields',
    fields: [
      { key: 'company', label: 'Company name', placeholder: 'Acme Co.', required: true },
      { key: 'website', label: 'Website', placeholder: 'https://yoursite.com', required: false },
    ],
  },
  {
    id: 'challenge',
    question: "What's your biggest growth challenge?",
    subtext: 'Check all that apply — we prioritise based on your answers.',
    type: 'multiselect',
    options: [
      "We're not getting enough traffic",
      "Traffic comes but doesn't convert",
      "Customers buy once and disappear",
      "Our pricing feels like a ceiling",
      "We have no clear marketing strategy",
    ],
  },
  {
    id: 'budget',
    question: 'What is your monthly marketing budget?',
    subtext: 'Helps us match you with the right scope.',
    type: 'select',
    options: ['Under $2K', '$2K–$5K', '$5K–$10K', '$10K+'],
  },
  {
    id: 'timeline',
    question: 'How soon are you looking to start?',
    type: 'select',
    options: ['ASAP', 'Within 30 days', '1–3 months', 'Just exploring for now'],
  },
  {
    id: 'contact',
    question: 'Last step — how do we reach you?',
    subtext: "We'll send a short growth audit within 24 hours. No spam, ever.",
    type: 'fields',
    fields: [
      { key: 'email', label: 'Email address', placeholder: 'jane@acme.com', inputType: 'email', required: true },
      { key: 'phone', label: 'Phone', placeholder: '+1 234 567 8900', inputType: 'tel', required: false },
    ],
  },
]

type Answers = Record<string, string | string[]>

interface LeadFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [stepIndex, setStepIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const currentStep = STEPS[stepIndex]
  const progress = ((stepIndex + 1) / STEPS.length) * 100

  const setAnswer = (key: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  const toggleMulti = (option: string) => {
    const id = currentStep.id
    const current = (answers[id] as string[]) || []
    const next = current.includes(option)
      ? current.filter(v => v !== option)
      : [...current, option]
    setAnswer(id, next)
  }

  const canAdvance = useCallback((): boolean => {
    const step = currentStep
    if (step.type === 'fields') {
      return (step.fields || [])
        .filter(f => f.required)
        .every(f => {
          const val = answers[f.key]
          return typeof val === 'string' && val.trim().length > 0
        })
    }
    if (step.type === 'select') return !!answers[step.id]
    if (step.type === 'multiselect') {
      const val = answers[step.id] as string[]
      return Array.isArray(val) && val.length > 0
    }
    return true
  }, [currentStep, answers])

  const submitForm = useCallback(async (finalAnswers: Answers) => {
    setSubmitting(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalAnswers),
      })
    } catch {
      // swallow — show success regardless to never lose a lead
    }
    setSubmitted(true)
    setSubmitting(false)
  }, [])

  const goNext = useCallback(() => {
    if (!canAdvance()) return
    if (stepIndex < STEPS.length - 1) {
      setDirection(1)
      setStepIndex(i => i + 1)
    } else {
      submitForm(answers)
    }
  }, [stepIndex, answers, canAdvance, submitForm])

  const goBack = () => {
    if (stepIndex > 0) {
      setDirection(-1)
      setStepIndex(i => i - 1)
    }
  }

  const selectAndAdvance = (id: string, option: string) => {
    setAnswer(id, option)
    setTimeout(() => {
      if (stepIndex < STEPS.length - 1) {
        setDirection(1)
        setStepIndex(i => i + 1)
      } else {
        submitForm({ ...answers, [id]: option })
      }
    }, 300)
  }

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStepIndex(0)
        setDirection(1)
        setAnswers({})
        setSubmitted(false)
        setSubmitting(false)
      }, 350)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  if (!isOpen) return null

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Progress bar */}
        {!submitted && (
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5">
            <motion.div
              className="h-full bg-accent"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/35 hover:text-white hover:border-white/25 transition-all duration-200 z-10"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Body */}
        <div className="px-8 sm:px-10 pt-10 pb-0" style={{ minHeight: 460 }}>
          <AnimatePresence mode="wait" custom={direction}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#CCFB55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">We've got your details.</h3>
                <p className="text-white/45 text-sm max-w-xs leading-relaxed mb-8">
                  Expect a short growth audit from us within 24 hours. No fluff — just what we found and what we'd fix first.
                </p>
                <button
                  onClick={onClose}
                  className="text-accent text-sm font-semibold hover:text-accent/70 transition-colors"
                >
                  Close ×
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={stepIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex flex-col"
              >
                {/* Counter */}
                <p className="text-white/25 text-[11px] font-semibold uppercase tracking-widest mb-5">
                  {stepIndex + 1} / {STEPS.length}
                </p>

                {/* Question */}
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white leading-snug mb-1.5">
                  {currentStep.question}
                </h2>
                {currentStep.subtext
                  ? <p className="text-white/40 text-sm mb-5">{currentStep.subtext}</p>
                  : <div className="mb-6" />
                }

                {/* FIELDS */}
                {currentStep.type === 'fields' && (
                  <div className="flex flex-col gap-3 pb-2">
                    {currentStep.fields!.map(field => (
                      <div key={field.key}>
                        <label className="text-white/35 text-[11px] font-semibold uppercase tracking-wider mb-1.5 block">
                          {field.label}
                          {!field.required && <span className="text-white/20 normal-case font-normal ml-1">(optional)</span>}
                        </label>
                        <input
                          type={field.inputType || 'text'}
                          placeholder={field.placeholder}
                          value={(answers[field.key] as string) || ''}
                          onChange={e => setAnswer(field.key, e.target.value)}
                          onKeyDown={e => { if (e.key === 'Enter' && canAdvance()) goNext() }}
                          autoComplete={field.inputType === 'email' ? 'email' : field.inputType === 'tel' ? 'tel' : 'off'}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* SINGLE SELECT */}
                {currentStep.type === 'select' && (
                  <div className="flex flex-col gap-2 pb-2">
                    {currentStep.options!.map(option => {
                      const selected = answers[currentStep.id] === option
                      return (
                        <button
                          key={option}
                          onClick={() => selectAndAdvance(currentStep.id, option)}
                          className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-150 ${
                            selected
                              ? 'border-accent/50 bg-accent/10 text-accent'
                              : 'border-white/8 bg-white/[0.03] text-white/55 hover:border-white/20 hover:text-white/85 hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                            selected ? 'border-accent bg-accent' : 'border-white/20'
                          }`}>
                            {selected && <span className="w-1.5 h-1.5 rounded-full bg-dark block" />}
                          </span>
                          {option}
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* MULTI SELECT */}
                {currentStep.type === 'multiselect' && (
                  <div className="flex flex-col gap-2 pb-2">
                    {currentStep.options!.map(option => {
                      const selected = ((answers[currentStep.id] as string[]) || []).includes(option)
                      return (
                        <button
                          key={option}
                          onClick={() => toggleMulti(option)}
                          className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-150 ${
                            selected
                              ? 'border-accent/50 bg-accent/10 text-accent'
                              : 'border-white/8 bg-white/[0.03] text-white/55 hover:border-white/20 hover:text-white/85 hover:bg-white/[0.05]'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                            selected ? 'bg-accent border-accent' : 'border-white/20 bg-transparent'
                          }`}>
                            {selected && (
                              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path d="M1.5 4.5l2 2L7.5 2" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </span>
                          {option}
                        </button>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav footer */}
        {!submitted && (
          <div className="px-8 sm:px-10 py-5 flex items-center justify-between border-t border-white/5 mt-5">
            <button
              onClick={goBack}
              className={`text-white/30 hover:text-white/60 text-sm transition-colors duration-200 ${stepIndex === 0 ? 'invisible' : ''}`}
            >
              ← Back
            </button>

            {(currentStep.type === 'fields' || currentStep.type === 'multiselect' || !!answers[currentStep.id]) && (
              <button
                onClick={goNext}
                disabled={!canAdvance() || submitting}
                className={`flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 ${
                  canAdvance() && !submitting
                    ? 'bg-accent text-dark hover:scale-105 hover:shadow-[0_0_20px_rgba(204,251,85,0.25)]'
                    : 'bg-white/5 text-white/20 cursor-not-allowed'
                }`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" opacity="0.3"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    Submitting...
                  </>
                ) : stepIndex === STEPS.length - 1 ? 'Submit →' : 'Continue →'}
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
