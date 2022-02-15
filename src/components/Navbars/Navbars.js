import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Navbars(){
    return(
        <>

  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Netflix-Clone</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#favourite">favourite</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


</>
    )
}