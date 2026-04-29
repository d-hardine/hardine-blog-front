import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"
import CategoryCard from "../components/CategoryCard"
import ArticleCard from "../components/ArticleCard"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"
import api from '../configs/api'
import { useState, useEffect, useContext } from "react"
import UserContext from "../configs/UserContext"
import auth from "../configs/auth"
import Spinner from 'react-bootstrap/Spinner'

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
      <Container>
        {isLoading ? (<Spinner animation="border" variant="info" />) : (
          <Row className="pt-5">
            <Col className="col-9">
              <h3 className="pb-3">Latest Articles</h3>
                {allPosts.map((post) => (
                  <ArticleCard post={post} key={post.id} />
                ))}
            </Col>
            <Col>
              <CategoryCard />
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default Home