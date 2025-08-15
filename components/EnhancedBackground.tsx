'use client'

import React from 'react'
import ParticleBackground from './ParticleBackground'
import FloatingShapes from './FloatingShapes'
import MatrixRain from './MatrixRain'

const EnhancedBackground: React.FC = () => {
  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-dark via-purple-900 to-black z-0" />
      
      {/* Animated grid overlay */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(58, 134, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58, 134, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Floating geometric shapes */}
      <FloatingShapes />
      
      {/* Enhanced particle system */}
      <ParticleBackground />
      
      {/* Subtle gradient overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-neon-pink/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-neon-blue/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-neon-purple/10 to-transparent rounded-full blur-3xl" />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </>
  )
}

export default EnhancedBackground
