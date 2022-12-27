import React, { useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import muniversiti from '../../Assets/Projects/muniversiti.png'
import InternNET from '../../Assets/Projects/InternNET.png'
import medicsy from '../../Assets/Projects/medicsy.png'
import ev from '../../Assets/Projects/ev.png'
import incentiv from '../../Assets/Projects/incentiv.png'
import editor from '../../Assets/Projects/codeEditor.png'
import bitsOfCode from '../../Assets/Projects/blog.png'

function Projects() {
  const [activeTab, setActiveTab] = useState('work')
  return (
    <Container fluid className='project-section'>
      <Particle />

      <Tab.Container id='left-tabs-example' defaultActiveKey='work'>
        <Col>
          <Row sm={3} style={{ justifyContent: 'center' }}>
            <Nav
              variant='pills'
              className='flex nav-justified'
              style={{
                borderBottom: '2px solid #623686',
                borderRadius: '0.25rem',
                paddingRight: 0,
              }}
            >
              <Nav.Item>
                <Nav.Link
                  className={
                    activeTab === 'work' ? 'btn btn-primary' : 'purple'
                  }
                  eventKey='work'
                  onClick={() => setActiveTab('work')}
                >
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={
                    activeTab === 'project' ? 'btn btn-primary' : 'purple'
                  }
                  eventKey='project'
                  onClick={() => setActiveTab('project')}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Tab.Content style={{ padding: '2rem 0 0' }}>
              <Tab.Pane eventKey='work'>
                {' '}
                <Container fluid>
                  <h1 className='project-heading'>
                    My Recent <strong className='purple'>Experience </strong>
                  </h1>
                  <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                  >
                    <Col md={4} className='project-card'>
                      <ProjectCard
                        imgPath={incentiv}
                        isWork={true}
                        title='Incentiv'
                        subtitle='FULL-STACK DEVELOPER'
                        description=''
                        link='https://incentiv.in'
                      />
                    </Col>
                    <Col md={4} className='project-card'>
                      <ProjectCard
                        imgPath={ev}
                        isWork={true}
                        title='EventEngage'
                        subtitle='JUNIOR SOFTWARE DEVELOPER'
                        description=''
                        link='https://eventengage.io/'
                      />
                    </Col>

                    <Col md={4} className='project-card'>
                      <ProjectCard
                        imgPath={muniversiti}
                        isWork={true}
                        title='Muniversiti'
                        subtitle='FULL STACK DEVELOPER'
                        description=''
                        link='https://www.muniversiti.org/'
                      />
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey='project'>
                <Container fluid>
                  <h1 className='project-heading'>
                    <strong className='purple'>Projects </strong>I've worked on
                    recently.
                  </h1>
                  <Row>
                    <Col md={4} className='project-card'>
                      <ProjectCard
                        imgPath={InternNET}
                        title='InternNET'
                        subtitle='ReactJS | NodeJS | ExpressJS | PostgreSQL'
                        description='(Team Project)'
                        link=''
                      />
                    </Col>

                    <Col md={4} className='project-card'>
                      <ProjectCard
                        imgPath={medicsy}
                        title='Medicsy'
                        subtitle='ReactJS | NodeJS | ExpressJS | PostgreSQL'
                        description='(Team Project)'
                        link=''
                      />
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Col>
      </Tab.Container>
    </Container>
  )
}

export default Projects
