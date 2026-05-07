import ThemeContext from "../configs/ThemeContext"
import UserContext from "../configs/UserContext"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import InputGroup from 'react-bootstrap/InputGroup'
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import lightDarkIconBlack from '../assets/light-dark-icon-black.svg'
import lightDarkIconWhite from '../assets/light-dark-icon-white.svg'
import logout from "../configs/logout"
import './NavigationBar.css'

function NavigationBar() {

  const { theme, setTheme } = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    e.target.reset()
    const queryString = new URLSearchParams({q: searchTerm}).toString()
    navigate(`/search?${queryString}`)
    setSearchTerm('')
  }

  //Allow the user to manually toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <Navbar expand="lg" className="navbar-background-color-light">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Hardine Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="account-navbar-nav" />
        <Navbar.Collapse id="account-navbar-nav">
          <Nav className="me-auto navbar-left-side">
            <Nav.Link as={Link} to="/tag/SMARTPHONE">Smartphone</Nav.Link>
            <Nav.Link as={Link} to="/tag/PC">PC</Nav.Link>
            <Form onSubmit={handleSearch}>
              <InputGroup>
              <Form.Control type="text" placeholder="Search here..." className=" mr-sm-2" onChange={(e) => setSearchTerm(e.target.value)} />
                  <Button size="sm" type="submit">Search</Button>
              </InputGroup>
          </Form>
          </Nav>
          <Nav className="ms-auto navbar-right-side">  {/* Use ms-auto to push items to the end */}
            <Button size="sm" variant={theme === 'dark' ? 'dark' : 'light'} onClick={toggleTheme}>
              <Image src={theme === 'dark' ? lightDarkIconWhite : lightDarkIconBlack} width="20" height="20" className="d-inline-block align-top" alt="React Bootstrap logo" />
            </Button>
            {!user ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <NavDropdown title={user.name} id="account-nav-dropdown">
                <NavDropdown.Item onClick={() => logout(setUser)}>LOG OUT</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar