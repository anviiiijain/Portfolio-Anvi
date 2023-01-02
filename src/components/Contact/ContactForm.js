import React, { useRef, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const handleChange = (e) => {
    let { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_sss5x4w',
        'template_4ytdxax',
        form.current,
        'XWzxOno_MjgjTLJtd'
      )
      .then(
        (result) => {
          toast.success('Email Sent', {
            position: 'top-right',
            hideProgressBar: true,
            closeOnClick: true,
            theme: 'colored',
          })
        },
        (error) => {
          toast.error('Error occured', {
            position: 'top-right',
            hideProgressBar: true,
            closeOnClick: true,
            theme: 'colored',
          })
        }
      )
      .finally(() => {
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        })
      })
  }
  return (
    <section className='contact-section'>
      <h1>Contact Me</h1>
      <Card className='contact-card'>
        <Card.Body>
          <form
            ref={form}
            onSubmit={(e) => sendEmail(e)}
            encType='multipart/form-data'
          >
            <div className='form-group'>
              <label className='mb-1 mt-3 form-label'>
                Your name<span className='text-danger'>*</span>
              </label>
              <input
                required
                name='user_name'
                value={formData.user_name}
                onChange={(e) => handleChange(e)}
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
                required
                name='user_email'
                value={formData.user_email}
                onChange={(e) => handleChange(e)}
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
                required
                name='message'
                value={formData.message}
                onChange={(e) => handleChange(e)}
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
      <ToastContainer />
    </section>
  )
}

export default ContactForm
