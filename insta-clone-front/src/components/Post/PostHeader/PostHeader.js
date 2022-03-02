import React from 'react'
import { Avatar } from '@material-ui/core'
import "./PostHeader.css"

const PostHeader = ({username, profilePic, picture}) => {
  return (
    <div className='post-header'>
        <Avatar
        className="avatar"
        alt={username}
        src={profilePic}
        ></Avatar>
        <h3 className='post-header-username'>{username}</h3>
    </div>
  )
}

export default PostHeader