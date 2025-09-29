'use client'
import { useEffect, useState } from 'react'

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="ambient-background">
      <div className="floating-elements">
        <div 
          className="floating-dot" 
          style={{
            top: '20%',
            left: '10%',
            animationDelay: '0s'
          }}
        />
        <div 
          className="floating-dot" 
          style={{
            top: '60%',
            left: '85%',
            animationDelay: '-2s'
          }}
        />
        <div 
          className="floating-dot" 
          style={{
            top: '40%',
            left: '70%',
            animationDelay: '-4s'
          }}
        />
        <div 
          className="floating-dot" 
          style={{
            top: '80%',
            left: '20%',
            animationDelay: '-1s'
          }}
        />
        <div 
          className="floating-dot" 
          style={{
            top: '15%',
            left: '60%',
            animationDelay: '-3s'
          }}
        />
      </div>
    </div>
  )
}