import React, { useState } from 'react'
import PostContainer from "../Post/PostContainer/PostContainer.js"
import useFetch from "../../helpers/hooks/useFetch.js"
import postPic from "./pic.jpg"
import profPic from "./prof.jpg"
import "./Feed.css"

const Feed = () => {

  const [Posts, setPosts] = useState([])
  const [PageNumber, setPageNumber] = useState(0)
  const [PageSize, setPageSize] = useState(5)
  
  const[data] = setPosts(useFetch(`/api/post/feed?page=${PageNumber}&size=${PageSize}`))
  


  return (
    <div className='feed-container'>
        <div className='feed'>
            {Posts.map(p => 
                <PostContainer username="Lule" porfilePic={profPic} picture={postPic}/>)}
        </div>
    </div>
  )
}

export default Feed