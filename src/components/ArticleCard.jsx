import { Link } from "react-router-dom"
import Image from "react-bootstrap/Image"
import { formatRelative } from "date-fns"

function ArticleCard({ post }) {
  return (
    <div className="pt-3 pb-3 d-flex gap-2 article-card">
      <Image src={post.postPicture} className="d-none d-md-block object-fit-cover" width="250px" height="175px" rounded />
      <Image src={post.postPicture} className="d-block d-md-none object-fit-cover" width="125px" height="88px" rounded />
      <div className="article-body">
        <div className="article-tags d-none d-sm-flex gap-2">
          {post.tags.map(tag => (
            <Link to={`/tag/${tag.name}`} key={tag.id} className='text-decoration-none text-light'>
              <p className="bg-primary bg-gradient p-1 small fw-bold">{tag.name}</p>
            </Link>
          ))}
        </div>
        <h4 className="fw-bold">
          <Link to={`/post/${post.id}`} className="text-decoration-none">{post.title}</Link>
        </h4>
        <h5 className="mt-2 fw-lighter text-secondary">{post.subtitle}</h5>
        <div className="fw-lighter">By {post.author.name}, {formatRelative(post.createdAt, new Date())}</div>
      </div>
    </div>
  )
}

export default ArticleCard