'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FloatingShapes: React.FC = () => {
  const shapes = [
    {
      id: 1,
      type: 'circle',
      size: 'w-20 h-20',
      color: 'bg-gradient-to-r from-neon-pink/20 to-neon-purple/20',
      position: 'top-1/4 left-1/4',
      duration: 20,
      delay: 0,
    },
    {
      id: 2,
      type: 'square',
      size: 'w-16 h-16',
      color: 'bg-gradient-to-r from-neon-blue/20 to-cyber-blue/20',
      position: 'top-1/3 right-1/4',
      duration: 15,
      delay: 2,
    },
    {
      id: 3,
      type: 'triangle',
      size: 'w-12 h-12',
      color: 'bg-gradient-to-r from-neon-purple/20 to-neon-pink/20',
      position: 'bottom-1/4 left-1/3',
      duration: 25,
      delay: 4,
    },
    {
      id: 4,
      type: 'hexagon',
      size: 'w-24 h-24',
      color: 'bg-gradient-to-r from-cyber-blue/20 to-neon-blue/20',
      position: 'bottom-1/3 right-1/3',
      duration: 18,
      delay: 1,
    },
    {
      id: 5,
      type: 'diamond',
      size: 'w-14 h-14',
      color: 'bg-gradient-to-r from-neon-pink/20 to-neon-blue/20',
      position: 'top-1/2 left-1/2',
      duration: 22,
      delay: 3,
    },
  ]

  const getShapeClasses = (type: string) => {
    switch (type) {
      case 'circle':
        return 'rounded-full'
      case 'square':
        return 'rounded-lg'
      case 'triangle':
        return 'rounded-sm transform rotate-45'
      case 'hexagon':
        return 'rounded-xl transform rotate-12'
      case 'diamond':
        return 'rounded-sm transform rotate-45'
      default:
        return 'rounded-full'
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} ${getShapeClasses(shape.type)} blur-sm`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* Animated gradient orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${
              ['#ff006e', '#8338ec', '#3a86ff', '#00d4ff'][i % 4]
            }40 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
