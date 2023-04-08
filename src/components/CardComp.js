import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import House from './house.jpeg';

function CardComp() {
  return (
    <div className="cardContainer">
    <Card fluid="md" className="cardStyle" style={{ width: '18rem', height: '28rem', background: 'none', }}>
      <Card.Img className="projectImage" variant="top" src={House} />
      <Card.Body>
        <Card.Title>Real Estate App</Card.Title>
        <Card.Text>
          Real Estate App using React Router
        </Card.Text>
        <Button variant="primary" style={{ margin: '10px' }}><a href="https://real-estate-api-app.netlify.app/" target='_blank'>View Site</a></Button><br></br>
        <a  href="https://real-estate-api-app.netlify.app/" target='_blank'> <i class="bi-github cardgh" ></i></a>
      </Card.Body>
    </Card>
    </div>

    
    
  );
}

export default CardComp;