import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/TagCard"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row className="pt-5">
          <Col className="col-9">
            <h3 className="pb-3">Latest Articles</h3>
            <article className="pt-3 pb-3 d-flex gap-4 article-card">
              <Image src='/lights-car-vehicle-244206.jpg' className="object-fit-cover" width="250px" height="175px" rounded />
              <div className="article-body">
                <div className="article-tags d-flex gap-2">
                  <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
                  <div className="bg-primary p-1 small fw-bold">ANDROID</div>
                </div>
                <h4 className="mt-2 fw-bold">
                  <Link to="/article" className="text-decoration-none">Meta will record employee screens, clicks, and keystrokes to train AI that may replace them</Link>
                </h4>
                <h5 className="mt-2 fw-lighter text-secondary">"Very dystopian"</h5>
                <div className="fw-lighter">By Rob Thubron, Today 5:15 AM</div>
              </div>
            </article>
            <article className="pt-3 pb-3 d-flex gap-4 article-card">
              <Image src='/lights-car-vehicle-244206.jpg' className="object-fit-cover" width="250px" height="175px" rounded />
              <div className="article-body">
                <div className="article-tags d-flex gap-2">
                  <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
                  <div className="bg-primary p-1 small fw-bold">iOS</div>
                </div>
                <h4 className="mt-2 fw-bold">
                  Meta will record employee screens, clicks, and keystrokes to train AI that may replace them
                </h4>
                <h5 className="mt-2 fw-lighter">"Very dystopian"</h5>
                <div className="fw-lighter">By Rob Thubron, Today 5:15 AM</div>
              </div>
            </article>
            <article className="pt-3 pb-3 d-flex gap-4 article-card">
              <Image src='/lights-car-vehicle-244206.jpg' className="object-fit-cover" width="250px" height="175px" rounded />
              <div className="article-body">
                <div className="article-tags d-flex gap-2">
                  <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
                  <div className="bg-primary p-1 small fw-bold">iOS</div>
                </div>
                <h4 className="mt-2 fw-bold">
                  Meta will record employee screens, clicks, and keystrokes to train AI that may replace them
                </h4>
                <h5 className="mt-2 fw-lighter">"Very dystopian"</h5>
                <div className="fw-lighter">By Rob Thubron, Today 5:15 AM</div>
              </div>
            </article>
            <article className="pt-3 pb-3 d-flex gap-4 article-card">
              <Image src='/lights-car-vehicle-244206.jpg' className="object-fit-cover" width="250px" height="175px" rounded />
              <div className="article-body">
                <div className="article-tags d-flex gap-2">
                  <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
                  <div className="bg-primary p-1 small fw-bold">iOS</div>
                </div>
                <h4 className="mt-2 fw-bold">
                  Meta will record employee screens, clicks, and keystrokes to train AI that may replace them
                </h4>
                <h5 className="mt-2 fw-lighter">"Very dystopian"</h5>
                <div className="fw-lighter">By Rob Thubron, Today 5:15 AM</div>
              </div>
            </article>
          </Col>
          <Col>
            <TagCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home