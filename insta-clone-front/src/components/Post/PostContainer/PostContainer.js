import React from 'react'
import AddComment from '../AddComment/AddComment'
import PostHeader from '../PostHeader/PostHeader'
import ReactionsBar from '../Reactions/ReactionsBar'
import "./PostContainer.css"

const PostContainer = ({username, profilePic, picture}) => {
  return (
    <div className='post-container'>
        <PostHeader username={username} picture={profilePic}></PostHeader>
        <img className='post-img' alt="loading..." src={picture}></img>
        <ReactionsBar/>
        <div className='post-description'>
          <p className='username'>@{username}</p>
          <p>Neki text iz opisa kako je ovo super slika! Lorem ipsum  i ostalo latinski nesto nakucano</p>
        </div>
        <AddComment/>
    </div>
    
  )
}

export default PostContainer