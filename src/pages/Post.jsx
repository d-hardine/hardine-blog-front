import api from "../configs/api"
import auth from "../configs/auth"
import UserContext from "../configs/UserContext"
import NavigationBar from "../components/NavigationBar"
import TagCard from "../components/TagCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { formatRelative } from "date-fns"
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CommentCard from "../components/CommentCard"

function Post() {

  const params = useParams()

  const { user, setUser } = useContext(UserContext)

  const [post, setPost] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState()
  const [newComment, setNewComment] = useState('')
  const [isCommentLoading, setIsCommentLoading] = useState(true)
  const [isSendingNewComment, setIsSendingNewComment] = useState(false)

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

  const retrieveComments = async () => {
    try {
      const retrieveComments = await api.get(`/comments/${params.postId}`)
      if (retrieveComments.status === 200) {
        setComments(retrieveComments.data.comments)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsCommentLoading(false)
    }
  }

  useEffect(() => {

    auth(setUser)
    retrievePost()
    retrieveComments()

  }, [params.postId])

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    setIsSendingNewComment(true)
    try {
      const commentResponse = await api.post('/new-comment', { newComment, postId: params.postId })
      if (commentResponse.status === 200) {
        retrieveComments()
        retrievePost()
        setNewComment('')
        e.target.reset()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSendingNewComment(false)
    }
  }

  return (
    <>
      <NavigationBar />
      <Container>
        {isLoading ? (<Spinner animation="border" variant="info" />) : (
          <Row className="pt-5">
            <Col className="col-9">
              <div className="article-tags d-flex gap-2">
                {post.tags.map(tag => (
                  <Link to={`/tag/${tag.name}`} key={tag.id} className='text-decoration-none text-light'>
                    <span className="bg-primary bg-gradient p-1 small fw-bold">{tag.name}</span>
                  </Link>
                ))}
              </div>
              <h2 className="mt-3 fw-bold">{post.title}</h2>
              <h5 className="mt-2 fw-lighter text-secondary">{post.subtitle}</h5>
              <div className="fw-lighter">By {post.author.name}, {formatRelative(post.createdAt, new Date())}</div>
              <Image src={post.thumbnail} className="object-fit-cover mt-3" width="100%" rounded />
              <p className="mt-3">
                {post.content}
              </p>

              <div className="mt-3 mb-3"><b>COMMENT SECTION</b></div>

              {isCommentLoading ? (
                <Spinner animation="border" variant="info" />
              ) : (
                <>
                  {user && (
                    <Form onSubmit={handleSubmitComment} className="mb-3">
                      <Form.Group className="mb-3" controlId="createComment">
                        <Form.Control style={{ resize: "none" }} as="textarea" rows={2} placeholder="Post your comment" onChange={(e) => setNewComment(e.target.value)} required />
                      </Form.Group>
                      <Button type="submit" disabled={isSendingNewComment}>Comment</Button>
                      {isSendingNewComment && (<Spinner className="mx-3" animation="grow" variant="info" size="sm" />)}
                    </Form>
                  )}
                  {comments.map((comment) => (
                    <CommentCard comment={comment} key={comment.id} />
                  ))}
                </>
              )}
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