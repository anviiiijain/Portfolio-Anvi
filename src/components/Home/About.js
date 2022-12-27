import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import myImg from '../../Assets/about-me.jpg'

import { ImPointRight } from 'react-icons/im'

function About() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row
          style={{ width: '100%' }}
          className='align-center justify-content-between padding-y-5'
        >
          <Col
            md={7}
            className='home-about-description'
            style={{ padding: '0 0 0 2rem' }}
          >
            <h1 style={{ fontSize: '2.3em', textAlign: 'left' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <div style={{ textAlign: 'justify', margin: '2rem 0' }}>
              <p>
                I’m a tech enthusiast, developer and soon-to-be Engineer from{' '}
                <span className='purple'> Indore, India</span>.
              </p>
              <p>
                {' '}
                I started my journey as a developer a few years ago and I have
                met amazing people and teams who helped me learn and grow. I
                have good knowledge of Javascript and Modern Javascript Libaries
                and Frameworks. I’m always seeking opportunities to know more
                about the web development industry and practical implementations
                of it. I’m always open to discussions about code, space and
                music, so feel free to drop a message.
              </p>
              <p>In my spare time I love to:</p>
              <ul>
                <li className='about-activity'>
                  <ImPointRight /> Bake and make deserts
                </li>
                <li className='about-activity'>
                  <ImPointRight /> Read Thrillers
                </li>
                <li className='about-activity'>
                  <ImPointRight /> Watch Anime
                </li>
                <li className='about-activity'>
                  <ImPointRight /> Explore different cultures through music
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default About
