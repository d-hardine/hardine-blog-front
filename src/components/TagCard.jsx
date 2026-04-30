import api from '../configs/api'
import { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

function TagCard() {

  const [allTags, setAllTags] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const retrieveAllTags = async () => {
      try {
        const retrieveResponse = await api.get('/all-tags')
        if (retrieveResponse.status === 200) {
          setAllTags(retrieveResponse.data.allTags)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    retrieveAllTags()
  }, [])

  return (
    <>
      {isLoading ? (<div>Loading coeg</div>) : (
      <div className="tag-card">
        <h3>Categories</h3>
        <div className="tag-body lh-lg">
          {allTags.map(tag => (
            <Fragment key={tag.id}>
              <Link to={`/tag/${tag.name}`} className='text-decoration-none text-light'>
                <span className="bg-primary bg-gradient p-1 small fw-bold">{tag.name}</span>
              </Link>{' '}
            </Fragment>
          ))}
      </div>
    </div>
      )}
    </>
  )
}

export default TagCard