import api from "../configs/api"
import NavigationBar from "../components/NavigationBar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from 'react-bootstrap/Spinner'
import TagCard from "../components/TagCard"
import { useSearchParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import auth from "../configs/auth"
import UserContext from "../configs/UserContext"
import ArticleCard from "../components/ArticleCard"

function Search() {

  const { setUser } = useContext(UserContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')

  const [searchedPosts, setSearchedPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const retrieveSearchedPosts = async () => {
      try {
        const retrieveResponse = await api.get(`/search-posts?q=${query}`)
        if (retrieveResponse.status === 200) {
          console.log(retrieveResponse.data)
          setSearchedPosts(retrieveResponse.data.searchedPosts)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    auth(setUser)
    retrieveSearchedPosts()
  }, [query])
  
  return(
    <>
      <NavigationBar />
      <Container>
        {isLoading ? (<div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}><Spinner animation="border" variant="info" /></div>) : (
          <Row className="pt-5">
            <Col className="col-lg-9">
              <h3 className="pb-3">Search: "{query}"</h3>
                {searchedPosts.map((post) => (
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

export default Search