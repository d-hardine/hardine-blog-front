import api from "../configs/api"
import auth from "../configs/auth"
import UserContext from "../configs/UserContext"
import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/CategoryCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { formatRelative } from "date-fns"
import Spinner from 'react-bootstrap/Spinner'

function Post() {

  const params = useParams()

  const { setUser } = useContext(UserContext)

  const [post, setPost] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const retrievePost = async () => {
      try {
        const retrieveResponse = await api.get(`/post/${params.postId}`)
        if (retrieveResponse.status === 200) {
          setPost(retrieveResponse.data.post)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    auth(setUser)
    retrievePost()
  }, [params.postId])

  return (
    <>
      <NavigationBar />
      <Container>
        {isLoading ? (<Spinner animation="border" variant="info" />) : (
          <Row className="pt-5">
            <Col className="col-9">
              <div className="article-tags d-flex gap-2">
                <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
                <div className="bg-primary p-1 small fw-bold">ANDROID</div>
              </div>
              <h2 className="mt-3 fw-bold">{post.title}</h2>
              <h5 className="mt-2 fw-lighter text-secondary">{post.subtitle}</h5>
              <div className="fw-lighter">By {post.author.name}, {formatRelative(post.createdAt, new Date())}</div>
              <Image src={post.thumbnail} className="object-fit-cover mt-3" width="100%" rounded />
              <p className="mt-3">
                {post.content}
              </p>
            </Col>
            <Col>
              <TagCard />
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default Post