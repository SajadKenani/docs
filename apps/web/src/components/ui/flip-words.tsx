'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const FlipWords = ({
  words,
  className,
}: {
  words: string[]
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}
    >
      <div
        className={cn(
          'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
          className
        )}
        key={currentWord}
      >
        {currentWord!.split('').map((letter, index) => (
          <span
            key={currentWord! + index}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </div>
    </AnimatePresence>
  )
}
