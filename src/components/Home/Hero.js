import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineDownload,
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import pdf from '../../Assets/Anvi_Jain_Resume.pdf'
import homeLogo from '../../Assets/Coding-amico.svg'
import Particle from '../Particle'
import Type from './Type'

function Hero() {
  return (
    <Container fluid className='home-section' id='home'>
      <Particle />
      <Container className='home-content'>
        <Row>
          <Col md={6} className='home-header'>
            <h1 className='heading'>
              Hi There!
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h1>
            <h1 className='heading-name'>
              I'm
              <strong className='main-name'> Anvi Jain.</strong>
            </h1>
            <div style={{ paddingLeft: 50, textAlign: 'left' }}>
              <div
              // style={{
              //   fontWeight: 'lighter',
              //   fontSize: '2rem',
              //   paddingTop: 16,
              //   paddingBottom: 16,
              // }}
              >
                I'm a full-stack developer and soon-to-be engineer who loves
                technology.
                <p>
                  Javascript and Modern Javascript Libraries and Frameworks like
                  ReactJs and NextJs are among my current development
                  interests.In my spare time I watch anime and explore different
                  cultures through music.
                </p>
              </div>

              <a
                href={pdf}
                target='_blank'
                rel='noreferrer'
                className='purple link'
              >
                Checkout my resume
              </a>
              <div className='home-about-social'>
                <ul className='home-about-social-links'>
                  <li className='social-icons'>
                    <a
                      href='https://github.com/anviiiijain'
                      target='_blank'
                      rel='noreferrer'
                      className='icon-colour  home-social-icons'
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className='social-icons'>
                    <a
                      href='https://www.linkedin.com/in/anviiiijain/'
                      target='_blank'
                      rel='noreferrer'
                      className='icon-colour  home-social-icons'
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className='social-icons'>
                    <a
                      href='https://www.instagram.com/anviiiijain/'
                      target='_blank'
                      rel='noreferrer'
                      className='icon-colour home-social-icons'
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            style={{ paddingBottom: 20 }}
            className='d-flex justify-content-center'
          >
            <img
              src={homeLogo}
              alt='home pic'
              className='img-fluid'
              style={{ maxHeight: '450px' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Hero
