'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Brain, Server, Smartphone } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'JavaScript', 'Python', 'Java', 'CSS3', 'HTML5'],
      icon: Code,
      color: 'from-neon-pink to-neon-purple'
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'TensorFlow', 'Tailwind CSS'],
      icon: Server,
      color: 'from-neon-purple to-neon-blue'
    },
    {
      category: 'Databases & Cloud',
      items: ['MongoDB', 'MySQL', 'AWS (EC2, S3, Lambda)', 'Heroku', 'Vercel'],
      icon: Database,
      color: 'from-neon-blue to-cyber-blue'
    },
    {
      category: 'Developer Tools',
      items: ['Git', 'GitHub', 'Postman', 'Vite', 'VS Code', 'Docker (Basic)'],
      icon: Cloud,
      color: 'from-cyber-blue to-neon-pink'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a passionate Computer Science student at Vellore Institute of Technology with a strong foundation 
            in full-stack development and cloud technologies. With a CGPA of 8.87/10, I combine academic excellence 
            with practical experience in building scalable applications.
          </motion.p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Education
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-morphism p-8 rounded-2xl border border-neon-blue/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Vellore Institute of Technology</h4>
                  <p className="text-neon-blue">B.Tech Computer Science and Engineering</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">2022 - Present</p>
              <p className="text-2xl font-bold text-neon-pink">CGPA: 8.87/10.0</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="glass-morphism p-8 rounded-2xl border border-neon-purple/30"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-cyber-blue rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">St. Xavier's Institution</h4>
                  <p className="text-neon-purple">Higher Secondary Education (ICSE)</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">2020 - 2022</p>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-neon-blue">Class XII: 94.6%</p>
                <p className="text-lg font-semibold text-neon-pink">Class X: 96.7%</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="glass-morphism p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mr-4`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{skillGroup.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-sm text-gray-300 border border-white/20 hover:border-neon-blue/50 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
