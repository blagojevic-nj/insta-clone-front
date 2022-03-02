import React, { useState } from 'react'
import PostContainer from "../Post/PostContainer/PostContainer.js"
import useFetch from "../../helpers/hooks/useFetch.js"
import postPic from "./pic.jpg"
import profPic from "./prof.jpg"
import "./Feed.css"

const Feed = () => {

  const Posts = useFetch("/api/post/feed?page=0&size=5")
  const [PageNumber, setPageNumber] = useState(0)
  const [PageSize, setPageSize] = useState(5)
  
  


  return (
    <div className='feed-container'>
        <div className='feed'>
            {Posts&&Posts.map(p => 
                <PostContainer username={p.username} porfilePic={p.userProfilePicture} picture={p.picture}/>)}
        </div>
    </div>
  )
}

export default Feed