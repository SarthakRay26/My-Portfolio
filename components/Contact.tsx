'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mnnzryrz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raysarthak26@gmail.com',
      href: 'mailto:raysarthak26@gmail.com',
      color: 'from-vibrant-orange to-vibrant-red'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 91430 60403',
      href: 'tel:+919143060403',
      color: 'from-vibrant-green to-vibrant-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, India',
      href: 'https://maps.google.com/?q=Kolkata,India',
      color: 'from-vibrant-violet to-vibrant-pink'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sarthakray26',
      color: 'hover:text-vibrant-violet'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sarthak-ray-683910256',
      color: 'hover:text-vibrant-blue'
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
    <section className="min-h-screen py-20 px-4 relative bg-gradient-to-t from-gray-900/20 via-black to-black">
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
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-vibrant-cyan" />
                Let's Connect
              </h3>
            </motion.div>

            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 glass-morphism p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{contact.label}</h4>
                  <p className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="glass-morphism p-6 rounded-2xl border border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently seeking full-time positions and exciting project collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="glass-morphism p-8 rounded-3xl border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gray focus:outline-none transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gray focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gray focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gray focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </motion.div>
                
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-500 hover:shadow-lg hover:shadow-gray-600/50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2024 Sarthak Ray. Built with Next.js, TypeScript, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
