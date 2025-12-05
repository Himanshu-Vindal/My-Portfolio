import React from 'react'
import Hero from '../components/Hero'
import Skills from './Skills'
import Projects from './Projects'
import Experience from '../components/Experience'

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
        </div>
    )
}

export default Home