import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Seattle from '../img/seattle.jpg';
import Kevan from './kevanphoto.png';
import Tw from './Tw';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Hero() {
  return (
    <Container fluid="md" className='containerimg d-flex p-2'>
      <Row className="justify-content-md-center">
        <Col md className="justify-content-md-center" > 
        <img src={Kevan} alt="kevan" className="kpic" style={{ width: '350px' }} />
        
      
        </Col>
        <Col md className="justify-content-md-center">
        
        <p className='bio'>
            <Tw></Tw>
        
            
        I am an aspiring web developer based in Seattle, with a passion for creating intuitive and visually appealing websites. I have experience with HTML, CSS, JavaScript, React JS, AWS Cloud Services, MongoDB, and Bootstrap. 
<br></br><br></br>
When I am not coding I enjoy hiking in the beautiful Pacific Northwest, biking, and spending time with friends and family.
<br></br><br></br>

       
        <a href="www.linkedin.com/in/kevanmeratinia"> <i class="bi-github hero-icon"></i></a> <a href="www.linkedin.com/in/kevanmeratinia"
        ><i class="bi-linkedin hero-icon"></i></a>
        </p>
        </Col>
      </Row>

      
    </Container>
  );
}

export default Hero;