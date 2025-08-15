'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, MapPin, Calendar, ExternalLink, Users, TrendingUp } from 'lucide-react'

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'AWS Certified Cloud Practitioner',
      company: 'Amazon Web Services',
      location: 'Remote',
      period: 'July 2024',
      type: 'Certification',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
      achievements: [
        'Achieved AWS Cloud Practitioner certification demonstrating expertise in 6 core AWS service categories',
        'Mastered cloud fundamentals, billing optimization, and deployment models across 130+ AWS services'
      ],
      link: 'https://www.credly.com/go/vueaaK7N6sve4r07AVqQQw'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Smartinternz',
      location: 'India',
      period: 'June 2024 - Aug 2024',
      type: 'Internship',
      icon: Users,
      color: 'from-neon-pink to-neon-purple',
      achievements: [
        'Developed restaurant management platform "SnackSpirit" serving 200+ users using MERN stack architecture',
        'Collaborated with 5-member development team to deliver project 2 weeks ahead of schedule',
        'Implemented responsive design patterns increasing mobile user engagement by 40%',
        'Optimized database queries reducing page load times by 35% across 10+ application modules'
      ],
      link: 'https://www.thesmartbridge.com/'
    },
    {
      title: 'Node.js Developer Path Certification',
      company: 'MongoDB',
      location: 'Remote',
      period: 'June 2024',
      type: 'Certification',
      icon: TrendingUp,
      color: 'from-green-400 to-blue-500',
      achievements: [
        'Completed 40-hour MongoDB Atlas developer certification covering advanced Node.js database integration',
        'Implemented 8+ database optimization techniques improving query performance by average 50%'
      ],
      link: 'https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path-for-smartbridge'
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
            <span className="text-white">Experience </span>
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              & Certifications
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            My professional journey includes hands-on experience in full-stack development, 
            cloud technologies, and industry-recognized certifications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Background gradient animation */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <exp.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-neon-blue font-semibold mb-2">{exp.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full text-white text-sm font-semibold`}
                    >
                      {exp.type}
                    </motion.span>
                    
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: achievementIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
