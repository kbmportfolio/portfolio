import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
  return (
    <Navbar className="nbstyle" bg="blue" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h1 className='brand'><strong className="dcolor">K</strong>evan <strong className="dcolor">M</strong>eratinia</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {/* <Nav.Link href="#projects" className='link'>Projects</Nav.Link>
            <Nav.Link href="#contact" className='link'>Contact</Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;