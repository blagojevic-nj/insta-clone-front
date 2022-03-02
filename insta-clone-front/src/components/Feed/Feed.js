import React from 'react'
import PostContainer from "../Post/PostContainer/PostContainer.js"
import postPic from "./pic.jpg"
import profPic from "./prof.jpg"
import "./Feed.css"

const Feed = () => {

    const posts = [1,2,3,4,5]
  return (
    <div className='feed-container'>
        <div className='feed'>
            {posts.map(p => 
                <PostContainer username="Lule" porfilePic={profPic} picture={postPic}/>)}
        </div>
    </div>
  )
}

export default Feed