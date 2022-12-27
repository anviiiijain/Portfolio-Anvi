import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Preloader from '../src/components/Pre'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import About from './components/Home/About'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import './style.css'
import Projects from './components/Projects/Projects'
import ResumeNew from './components/Resume/ResumeNew'
import ContactForm from './components/Contact/ContactForm'

function App() {
  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/project' exact element={<Projects />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/resume' exact element={<ResumeNew />} />
          <Route path='/contact' exact element={<ContactForm />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
