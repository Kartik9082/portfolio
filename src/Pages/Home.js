import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Footer from '../components/Footer'
import { createBrowserRouter } from 'react-router-dom'

const Home = () => {

    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element:<Home />,
    //     }
    // ])

  return (
    <div className="bg-[#1F363D] text-white">
    <Navbar />
    <Hero />
    {/* <About/> */}
    <Skills />
    <Projects />
    <Education />
    <Footer />
  </div>
  )
}

export default Home