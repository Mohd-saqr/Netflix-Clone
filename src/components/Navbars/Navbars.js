import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Navbars(){
    return(
        <>

  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Netflix-Clone</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favourite">Favourite</Nav.Link>
      <Nav.Link href="/">AboutUs</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


</>
    )
}