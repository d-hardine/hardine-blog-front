import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/TagCard"
import ArticleCard from "../components/ArticleCard"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"
import api from '../configs/api'
import { useState, useEffect, useContext } from "react"
import UserContext from "../configs/UserContext"
import auth from "../configs/auth"
import Spinner from 'react-bootstrap/Spinner'
import Carousel from 'react-bootstrap/Carousel'

function Home() {

  const [allPosts, setAllPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const retrieveAllPosts = async () => {
      try {
        const retrieveResponse = await api.get('/all-posts')
        if (retrieveResponse.status === 200) {
          setAllPosts(retrieveResponse.data.allPosts)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    auth(setUser)
    retrieveAllPosts()
  }, [])

  return (
    <>
      <NavigationBar />
      {isLoading ? (<Spinner animation="border" variant="info" />) : (
      <Container>
        <Row>
          <Carousel className="mt-4 " data-bs-theme="light">
            <Carousel.Item>
              <Link to={`/post/${allPosts[0].id}`}>
                <Image className="object-fit-cover h-md-50" src={allPosts[0].postPicture} height={600} width="100%" alt="first slide" rounded/>
              </Link>
              <Carousel.Caption className="position-absolute bottom-0 start-0 end-0 m-0 p-4 bg-dark bg-opacity-75 text-start">
                <h5 className="fw-bold text-white mb-1">{allPosts[0].title}</h5>
                <p className="text-white-50 small mb-0">{allPosts[0].subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/post/${allPosts[0].id}`}>
                <Image className="object-fit-cover h-md-50" src={allPosts[1].postPicture} height={600} width="100%" alt="second slide" rounded/>
              </Link>
              <Carousel.Caption className="position-absolute bottom-0 start-0 end-0 m-0 p-4 bg-dark bg-opacity-75 text-start">
                <h5 className="fw-bold text-white mb-1">{allPosts[1].title}</h5>
                <p className="text-white-50 small mb-0">{allPosts[1].subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link to={`/post/${allPosts[2].id}`}>
                <Image className="object-fit-cover h-md-50" src={allPosts[2].postPicture} height={600} width="100%" alt="second slide" rounded/>
              </Link>
              <Carousel.Caption className="position-absolute bottom-0 start-0 end-0 m-0 p-4 bg-dark bg-opacity-75 text-start">
                <h5 className="fw-bold text-white mb-1">{allPosts[2].title}</h5>
                <p className="text-white-50 small mb-0">{allPosts[2].subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      )}
      <Container>
        {isLoading ? (<Spinner animation="border" variant="info" />) : (
          <Row className="pt-5">
            <Col className="col-lg-9">
              <h3 className="pb-3">Latest Articles</h3>
                {allPosts.map((post) => (
                  <ArticleCard post={post} key={post.id} />
                ))}
            </Col>
            <Col className="d-none d-lg-block">
              <TagCard/>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default Home