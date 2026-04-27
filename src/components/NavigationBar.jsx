import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import './NavigationBar.css'

function NavigationBar() {

  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchInput)
    setSearchInput('')
    e.target.reset()
  }

  return (
    <Navbar expand="lg" className="navbar-background-color-light">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Hardine Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="account-navbar-nav" />
        <Navbar.Collapse id="account-navbar-nav">
          <Nav className="me-auto navbar-left-side">
            <Nav.Link href="#smartphone">Smartphone</Nav.Link>
            <Nav.Link href="#link">PC</Nav.Link>
            <Form onSubmit={handleSearch}>
              <InputGroup>
              <Form.Control type="text" placeholder="Search here..." className=" mr-sm-2" onChange={(e) => setSearchInput(e.target.value)} />
                  <Button size="sm" type="submit">Search</Button>
              </InputGroup>
          </Form>
          </Nav>
          <Nav className="ms-auto navbar-right-side">  {/* Use ms-auto to push items to the end */}
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar