'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Hero: React.FC = () => {
  const [text, setText] = useState('')
  const fullText = 'Full Stack Developer & AWS Cloud Practitioner'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        // Blinking cursor effect
        setInterval(() => {
          setShowCursor(prev => !prev)
        }, 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-800/30 to-gray-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-700/20 to-gray-500/30 rounded-full blur-3xl"
          />
        </div>      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-serif"
        >
          <span className="text-white">Hello, I'm </span>
          <motion.span
            className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Sarthak
          </motion.span>
        </motion.h1>

        {/* Typing animation subtitle */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl text-gray-300 font-light min-h-[3rem] flex items-center justify-center">
            {text}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Computer Science student at VIT with strong academic foundation and expertise in{' '}
          <span className="text-vibrant-blue font-semibold">MERN Stack</span>,{' '}
          <span className="text-vibrant-green font-semibold">AWS Cloud</span>, and{' '}
          <span className="text-vibrant-orange font-semibold">AI/ML</span>. 
          Building innovative solutions and creating exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 20, 147, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-vibrant-pink to-vibrant-violet rounded-full font-semibold text-white text-lg shadow-lg hover:shadow-vibrant-pink/50 transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-vibrant-cyan text-vibrant-cyan rounded-full font-semibold text-lg hover:bg-vibrant-cyan hover:text-black transition-all duration-300"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: '8.87', label: 'CGPA', suffix: '/10' },
            { number: '500+', label: 'Users Served', suffix: '' },
            { number: '15+', label: 'Projects Built', suffix: '' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center glass-morphism p-6 rounded-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.2, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.number}<span className="text-vibrant-yellow">{stat.suffix}</span>
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
