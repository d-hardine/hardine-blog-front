import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/TagCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function Article() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-5">
          <Col className="col-9">
            <div className="article-tags d-flex gap-2">
              <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
              <div className="bg-primary p-1 small fw-bold">ANDROID</div>
            </div>
            <h2 className="mt-3 fw-bold">Meta will record employee screens, clicks, and keystrokes to train AI that may replace them</h2>
            <h5 className="mt-2 fw-lighter text-secondary">"Very dystopian"</h5>
            <div className="fw-lighter">By Rob Thubron, Today 5:15 AM</div>
            <Image src='/lights-car-vehicle-244206.jpg' className="object-fit-cover mt-3" width="100%" rounded />
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae beatae tempora molestias, nisi aspernatur earum itaque a dolores magni reprehenderit recusandae temporibus sit ab quas, ipsam quam alias quo tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum quibusdam minima tenetur facilis perferendis laborum iure labore consequatur earum dolores quis suscipit, mollitia magnam dolorum. Temporibus saepe suscipit unde.
            </p>
          </Col>
          <Col>
            <TagCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Article