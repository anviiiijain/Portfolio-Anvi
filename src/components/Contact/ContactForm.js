import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function ContactForm() {
  return (
    <section className='contact-section'>
      <h1>Contact Me</h1>
      <Card className='contact-card'>
        <Card.Body>
          <form></form>
          <form encType='multipart/form-data'>
            <div className='form-group'>
              <label className='mb-1 mt-3 form-label'>
                Your name<span className='text-danger'>*</span>
              </label>
              <input
                name='name'
                type='text'
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label className='mb-1 mt-3 form-label'>
                Your email<span className='text-danger'>*</span>
              </label>
              <input
                name='email'
                type='email'
                className='form-control'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label className='mb-1 mt-3 form-label'>
                Message<span className='text-danger'>*</span>
              </label>
              <textarea
                name='message'
                type='text'
                className='form-control'
                placeholder='Message'
              />
            </div>

            <Button variant='primary' size='md' type='submit' className='mt-4'>
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
      <p>
        Feel free to <span className='purple'>connect </span>with me
      </p>
      <ul className='contact-social-links'>
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
    </section>
  )
}

export default ContactForm
