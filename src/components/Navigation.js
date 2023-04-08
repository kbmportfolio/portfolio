import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation() {
  return (
    <Navbar bg="blue" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h1 className='brand'>Kevan Meratinia</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><span className='navlink'>Home</span></Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;