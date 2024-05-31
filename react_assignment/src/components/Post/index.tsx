import { getAuthorById } from "../../services/author.service"
import { IPost } from "../../types/post.type"
import { formatFullDateText } from "../../utils/date.utils"
import "./style.css"

interface PostProps {
     post: IPost
}
const Post = (props: PostProps) => {
     const { post } = props
     const author = getAuthorById(post.author_id)
     const postedAt = formatFullDateText(post.created_at)

     const AuthorDetail = () => {
          return (
               <div className="author-detail">
                    <img src={author?.avatar_url} className="img-author-posted" />
                    <span className="author-name">
                         {`${author?.name || '-'} `}
                    </span>
                    <span className="author-post-detail">
                         posted on {postedAt}
                    </span>
               </div>
          )
     }

     const PostDetail = () => {
          return (
               <div className="post-detail">
                    <img src={post.image_url} />
                    <div>
                         <div className="post-title">{post.title}</div>
                         <div className="post-body mt-4">
                              {post.body}
                         </div>
                    </div>
               </div>
          )
     }
     return (
          <div className="post-container">
               <AuthorDetail />
               <hr className="line-break" />
               <PostDetail />
          </div>
     )
}

export default Post