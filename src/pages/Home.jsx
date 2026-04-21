import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"

function Home() {
  return (
    <>
    <NavigationBar />
    <Container>
      <Row>
        <Col>
          <div>Hello</div>
        </Col>
        <Col>
          <div>Hello</div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home