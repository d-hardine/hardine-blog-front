import { Link } from "react-router-dom"
import Image from "react-bootstrap/Image"
import { formatRelative } from "date-fns"

function ArticleCard({ post }) {
  return (
    <article className="pt-3 pb-3 d-flex gap-4 article-card">
      <Image src={post.thumbnail} className="object-fit-cover" width="250px" height="175px" rounded />
      <div className="article-body">
        <div className="article-tags d-flex gap-2">
          <div className="bg-primary p-1 small fw-bold">SMARTPHONE</div>
          <div className="bg-primary p-1 small fw-bold">ANDROID</div>
        </div>
        <h4 className="mt-2 fw-bold">
          <Link to={`/post/${post.id}`} className="text-decoration-none">{post.title}</Link>
        </h4>
        <h5 className="mt-2 fw-lighter text-secondary">{post.subtitle}</h5>
        <div className="fw-lighter">By {post.author.name}, {formatRelative(post.createdAt, new Date())}</div>
      </div>
    </article>
  )
}

export default ArticleCard