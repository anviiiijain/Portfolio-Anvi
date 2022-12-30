import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import pdf from '../../Assets/Anvi_Jain_Resume.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import Tilt from 'react-parallax-tilt'
import myResume from '../../Assets/resume.png'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { Link } from 'react-router-dom'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink =
  'https://raw.githubusercontent.com/anviiiijain/Portfolio-Anvi/master/src/Assets/Anvi_Jain_Resume.pdf'

function ResumeNew() {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />

        <Document file={pdf} className='d-flex justify-content-center'>
          <Page pageNumber={1} scale={width > 786 ? 0.725 : 0.6} />
        </Document>
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginTop: '1rem',
          }}
        >
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download Now
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeNew
