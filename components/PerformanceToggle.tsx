'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, ZapOff } from 'lucide-react'

const PerformanceToggle: React.FC = () => {
  const [highPerformance, setHighPerformance] = useState(false)

  useEffect(() => {
    // Auto-detect low-end devices
    const isLowEndDevice = () => {
      // Check for mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Check for low memory (if available)
      const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4
      
      // Check for slow connection
      const hasSlowConnection = (navigator as any).connection && 
        ((navigator as any).connection.effectiveType === 'slow-2g' || 
         (navigator as any).connection.effectiveType === '2g')

      return isMobile || hasLowMemory || hasSlowConnection
    }

    setHighPerformance(isLowEndDevice())
  }, [])

  useEffect(() => {
    // Apply performance settings
    document.documentElement.setAttribute('data-performance-mode', highPerformance ? 'high' : 'normal')
    
    if (highPerformance) {
      // Disable expensive animations
      document.documentElement.style.setProperty('--animation-duration', '0.1s')
      document.documentElement.style.setProperty('--blur-amount', '2px')
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.3s')
      document.documentElement.style.setProperty('--blur-amount', '10px')
    }
  }, [highPerformance])

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={() => setHighPerformance(!highPerformance)}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
      title={highPerformance ? 'Switch to Normal Mode' : 'Switch to Performance Mode'}
    >
      {highPerformance ? (
        <Zap className="w-5 h-5 text-green-400" />
      ) : (
        <ZapOff className="w-5 h-5 text-gray-400" />
      )}
    </motion.button>
  )
}

export default PerformanceToggle
