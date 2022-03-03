import React, { useState, useEffect } from 'react'
import "./UserPosts.css"
import { getUserPosts } from '../../../services/PostService.js';


const UserPosts = ({ username }) => {

  const [Posts, setPosts] = useState([])
    useEffect(() => {
      getUserPosts(username, 0, 9)
      .then(res => {
        if(res.data?.content)
        {
          const pictures = res.data.content.map(post => {
            const img = post.picture ? `http://localhost:8080${post.picture}` : 'http://localhost:8080/static/posts/default.jpg'
            return {key: post.id, img: img}
          })
          setPosts(pictures)
        }
        return null;
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
    }, [])

    

  return (
    <div className='user-posts-container'>
        {Posts.map(post => 
          <div className='my-img-container' key={post.key}>
              <img className='my-img' alt='img' src={post.img}></img>
          </div>
          )}
    </div>
  )
}

export default UserPosts

const img = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"