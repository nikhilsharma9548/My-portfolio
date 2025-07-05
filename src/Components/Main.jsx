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
    <div className='flex flex-col  h-full overflow-hidden'>
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