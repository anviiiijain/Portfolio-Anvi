import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BiLinkExternal } from 'react-icons/bi'

function ProjectCards(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} alt='card-img' />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className='project-card-subtitle'>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text style={{ paddingTop: '0.7rem', fontSize: '14px' }}>
          {Array.isArray(props?.description) ? (
            <ul style={{ textAlign: 'left', listStyle: 'none' }}>
              {props?.description?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ) : (
            <>{props.description}</>
          )}
        </Card.Text>
        {props.link && (
          <Button variant='primary' href={props.link} target='_blank'>
            <BiLinkExternal /> &nbsp;
            {props.isWork ? 'View Work' : 'View Project'}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
export default ProjectCards
