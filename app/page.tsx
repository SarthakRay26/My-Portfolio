'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import PerformanceToggle from '../components/PerformanceToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <ParticleBackground />
      <Navbar />
      <PerformanceToggle />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
