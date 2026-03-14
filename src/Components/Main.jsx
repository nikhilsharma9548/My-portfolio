import React from 'react'
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
const Main = () => {
  return (
    <div className='flex flex-col bg-[radial-gradient(circle_at_center,#C8C1C1,#7393B3)]  h-full overflow-hidden '>
    <Header/>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default Main