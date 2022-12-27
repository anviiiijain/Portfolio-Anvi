import React from 'react'
import { Container } from 'react-bootstrap'
import Github from '../About/Github'
import Techstack from '../About/Techstack'
import Toolstack from '../About/Toolstack'
import Projects from '../Projects/Projects'
import Hero from './Hero'
import About from './About'

function Home() {
  return (
    <section>
      <Hero />
      <About />
      <section className='skills-section'>
        <Container style={{ padding: '1rem 0', color: 'white' }}>
          {/* <Projects /> */}
          <h1 className='project-heading'>
            Professional <strong className='purple'>Skillset </strong>
          </h1>

          <Techstack />

          <h1 className='project-heading'>
            <strong className='purple'>Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </section>
    </section>
  )
}

export default Home
