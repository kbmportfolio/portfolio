import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TheGrind from './thegrind.png'

function CardComp2() {
  return (
    <div className="cardContainer">
    <Card fluid="md" className="cardStyle" style={{ width: '18rem', height: '28rem', background: 'none', }}>
      <Card.Img className="projectImage" variant="top" src={TheGrind} />
      <Card.Body>
        <Card.Title>The Grind</Card.Title>
        <Card.Text>
         E-Commerce App built with React and Material UI
        </Card.Text>
        <Button variant="primary" style={{ margin: '10px' }}><a href="https://the-grind.netlify.app/" target='_blank'>View Site</a></Button><br></br>
        <a  href="https://github.com/kbmportfolio/thegrind" target='_blank'> <i class="bi-github cardgh"></i></a>
      </Card.Body>
    </Card>
    </div>

    
    
  );
}

export default CardComp2;