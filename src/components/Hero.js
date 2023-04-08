import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Seattle from '../img/seattle.jpg';
import Kevan from '../img/kevanphoto.jpeg'



function Hero() {
  return (
    <Container fluid="md" className='containerimg'>
      <Row className="justify-content-md-center">
        <Col md> <img href={Kevan} alt="seattlebg" style={{ width: '400px', }} />
        
        </Col>
        <Col md>
        <p className='bio'>

            
        <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></p>
        Kevan is a talented web developer based in Seattle, with a passion for creating intuitive and visually appealing websites. He has over five years of experience in front-end and back-end web development, with a deep understanding of HTML, CSS, JavaScript, PHP, and MySQL.
<br></br><br></br>
Kevan is a creative problem solver who loves to collaborate with clients and team members to build websites that meet their unique needs and goals. He stays up-to-date with the latest web development trends and technologies, ensuring that his work is always cutting-edge and effective.
<br></br><br></br>
When he's not coding, Kevan enjoys hiking in the beautiful Pacific Northwest, exploring Seattle's vibrant food scene, and spending time with his friends and family.
        </p>
        </Col>
      </Row>

      
    </Container>
  );
}

export default Hero;