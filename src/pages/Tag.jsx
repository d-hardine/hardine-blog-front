import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/TagCard"
import ArticleCard from "../components/ArticleCard"
import Image from "react-bootstrap/Image"
import { Link, useParams } from "react-router-dom"
import api from '../configs/api'
import { useState, useEffect, useContext } from "react"
import UserContext from "../configs/UserContext"
import auth from "../configs/auth"
import Spinner from 'react-bootstrap/Spinner'

function Tag() {

  const params = useParams()

  const [specificPosts, setSpecificPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const retrieveSpecificPosts = async () => {
      try {
        const retrieveResponse = await api.get(`/specific-posts/${params.tagName}`)
        if (retrieveResponse.status === 200) {
          setSpecificPosts(retrieveResponse.data.specificPosts)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    auth(setUser)
    retrieveSpecificPosts()
  }, [params.tagName])

  return (
    <>
      <NavigationBar />
      <Container>
        {isLoading ? (<Spinner animation="border" variant="info" />) : (
          <Row className="pt-5">
            <Col className="col-lg-9">
              <h3 className="pb-3">Category: {params.tagName}</h3>
                {specificPosts.map((post) => (
                  <ArticleCard post={post} key={post.id} />
                ))}
            </Col>
            <Col className="d-none d-lg-block">
              <TagCard />
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default Tag