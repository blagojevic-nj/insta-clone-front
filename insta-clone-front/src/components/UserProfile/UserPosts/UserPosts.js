import React from 'react'
import "./UserPosts.css"

const UserPosts = () => {

    const dummy = [1,2,,12,1,1,1,1,1,1,1]

  return (
    <div className='user-posts-container'>
        {dummy.map(pic => 
          <div className='my-img-container'>
            <img className='my-img' alt='img' src={img}></img>
          </div>
          )}
    </div>
  )
}

export default UserPosts

const img = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"