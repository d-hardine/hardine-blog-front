import api from '../configs/api'
import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {

  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    const newUser = {
      username,
      displayName,
      password,
      confirmPassword
    }
    try {
      const signupResponse = await api.post('/signup', newUser)
      if(signupResponse.status === 201) { //immediate login after successful signup
        const loginUser = { username, password }
        const loginResponse = await api.post('/login', loginUser)
        if (loginResponse.status === 201)
          localStorage.setItem('token', loginResponse.data.token)
          navigate('/')
      }
    } catch (err) { //if error happened, e.g invalid form input
      console.error(err)
      setErrors(err.response.data.errors)
      setShowAlert(true)
    }
  }

  const handleDismiss = (indexToClose) => {
    const updatedErrors = errors.filter((_, index) => index !== indexToClose);
    setErrors(updatedErrors)
  }

  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="align-items-center justify-content-center" style={{height: '100vh'}}>
        <Col className="col-md-5">
          <Form onSubmit={handleSignup}>
            <h2 className="mb-5"><b>SIGN UP TO HARDINE BLOG</b></h2>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDisplayName">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" placeholder="Enter display name" onChange={(e) => setDisplayName(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
              <Form.Text className="text-muted">Password must be at least 8 characters, with numbers and letters.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required/>
            </Form.Group>
            <Button type="submit">Signup</Button>
            <div className=" mb-3 text-muted">Already have an account?? <Link to="/login"><b>Login</b></Link></div>
          </Form>
          {errors && (
            errors.map((error, index) => (
              <Alert key={index} show={showAlert} variant="danger" onClose={() => handleDismiss(index)} dismissible>{error.msg}</Alert>
            ))
          )}
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Signup