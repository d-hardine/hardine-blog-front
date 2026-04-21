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
        <Navbar.Brand as={Link} to={'/'}>Hardine Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="account-navbar-nav" />
        <Navbar.Collapse id="account-navbar-nav">
          <Nav className="ms-auto">  {/* Use ms-auto to push items to the end */}
            <NavDropdown title="hello" id="account-nav-dropdown">
              <NavDropdown.Item >laskdjasldkj</NavDropdown.Item>
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