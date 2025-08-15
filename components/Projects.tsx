'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Star, Users, Award } from 'lucide-react'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Paw Recognition',
      subtitle: 'AI-powered pet identification system',
      description: 'Advanced AI system with 92% breed classification accuracy serving 500+ users. Built with Next.js, TensorFlow, and Llama 3.1 API for intelligent pet breed recognition.',
      tech: ['Next.js', 'TensorFlow', 'Llama 3.1 API', 'Machine Learning'],
      link: 'https://pawrecognition.vercel.app/',
      github: null,
      image: '/api/placeholder/600/400',
      featured: true,
      stats: { users: '500+', accuracy: '92%' },
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'SnackSpirit',
      subtitle: 'Restaurant management platform',
      description: 'Full-stack web application handling 200+ concurrent users with 99.5% uptime. Complete restaurant management solution with ordering, inventory, and analytics.',
      tech: ['MERN Stack', 'RESTful APIs', 'MongoDB', 'Express.js'],
      link: null,
      github: 'https://github.com/SarthakRay26/SBFoods-SmartInternz',
      image: '/api/placeholder/600/400',
      featured: true,
      stats: { users: '200+', uptime: '99.5%' },
      color: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Museum Ticketing Chatbot',
      subtitle: 'AI visitor assistance',
      description: 'Engineered AI chatbot with 85% query resolution rate and integrated payment gateway. Streamlines museum visits with intelligent assistance and seamless booking.',
      tech: ['MERN Stack', 'Grok AI', 'Payment Gateway', 'Chatbot'],
      link: 'https://museum-booking.vercel.app',
      github: null,
      image: '/api/placeholder/600/400',
      featured: false,
      stats: { resolution: '85%', queries: '1000+' },
      color: 'from-neon-blue to-cyber-blue'
    },
    {
      title: 'Crime Investigation AI',
      subtitle: 'Top 10 Finalist - Tredence Infinity AI Hackathon',
      description: 'Achieved top 10 placement among 500+ teams in national-level AI competition. Advanced AI solution for crime pattern analysis and investigation assistance.',
      tech: ['Python', 'AI/ML', 'Data Analysis', 'Computer Vision'],
      link: null,
      github: null,
      image: '/api/placeholder/600/400',
      featured: false,
      stats: { rank: 'Top 10', teams: '500+' },
      color: 'from-cyber-blue to-neon-pink',
      achievement: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold cyber-font mb-6"
          >
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Innovative solutions that showcase my expertise in full-stack development, 
            AI/ML, and cloud technologies with real-world impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
              }}
              className={`glass-morphism rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 relative group ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Achievement badge */}
              {project.achievement && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                >
                  <Award className="w-4 h-4" />
                  Award Winner
                </motion.div>
              )}
              
              <div className="relative z-10 p-8">
                {/* Project header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-neon-blue font-semibold">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -15 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
                </div>

                {/* Project stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <motion.div
                      key={statIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: statIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-black/20 rounded-xl p-3 text-center border border-white/10"
                    >
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-sm text-white font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(58, 134, 255, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
