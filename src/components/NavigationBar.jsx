import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom"
import './NavigationBar.css'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-background-color-light">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Hardine Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="account-navbar-nav" />
        <Navbar.Collapse id="account-navbar-nav">
          <Nav className="me-auto navbar-left-side">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#link">Tech</Nav.Link>
          </Nav>
          <Nav className="ms-auto navbar-right-side">  {/* Use ms-auto to push items to the end */}
            <Nav.Link href="#search">Search</Nav.Link>
            <NavDropdown title="hello" id="account-nav-dropdown">
              <NavDropdown.Item >askdj</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => console.log('kontol')}>LOGIN</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar