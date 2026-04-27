import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [errors, setErrors] = useState([])

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="align-items-center justify-content-center" style={{height: '100vh'}}>
        <Col className="col-md-5">
          <Form>
            <h2 className="mb-5"><b>LOG IN TO HARDINE BLOG</b></h2>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Button>Login</Button>
            <div className=" mb-3 text-muted">Don't have an account? <Link to="/signup"><b>Signup</b></Link></div>
          </Form>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Login