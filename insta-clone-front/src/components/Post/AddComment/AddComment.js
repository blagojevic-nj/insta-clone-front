import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../../node_modules/bootstrap/dist/js/bootstrap"
import "./AddComment.css"


const AddComment = () => {
  return (
    <div className='comment-container'>
        <div className="input-group">
        <textarea className="form-control comment-text-area" aria-label="With textarea" placeholder='Add a comment...'></textarea>
        </div>
        <span className='post-btn'>Post</span>
    </div>
  )
}

export default AddComment