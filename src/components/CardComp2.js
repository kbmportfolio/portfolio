import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Makeup from './makeup.jpg';

function CardComp2() {
  return (
    <div className="cardContainer">
    <Card fluid="md" className="cardStyle" style={{ width: '18rem', height: '28rem', background: 'none', }}>
      <Card.Img className="projectImage" variant="top" src={Makeup} />
      <Card.Body>
        <Card.Title>Maekup Search</Card.Title>
        <Card.Text>
         Makeup Search App using GET API
        </Card.Text>
        <Button variant="primary" style={{ margin: '10px' }}><a href="https://makeup-search.netlify.app/" target='_blank'>View Site</a></Button><br></br>
        <a  href="https://github.com/kbmportfolio/makeupsearch" target='_blank'> <i class="bi-github cardgh"></i></a>
      </Card.Body>
    </Card>
    </div>

    
    
  );
}

export default CardComp2;