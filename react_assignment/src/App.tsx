import "./App.css"
import Post from "./components/Post"
import { getPosts } from "./services/post.service"
import { getCurrentTimeZone } from "./utils/date.utils"
function App() {
  const timezone = getCurrentTimeZone()
  const posts = getPosts()
  return (
    <>
      <div className="main-container">
        <div className="header-title">MAQE Forum</div>
        <div className="">
          Your current timezone is: {timezone}
        </div>

        <div>
          {posts && posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
