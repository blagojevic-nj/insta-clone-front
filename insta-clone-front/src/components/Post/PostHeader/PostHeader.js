import React from 'react'
import { Avatar } from '@material-ui/core'
import "./PostHeader.css"

const PostHeader = ({username, profilePic, picture}) => {

  const seeProfile = () => window.location.href = `/profile/${username}`

  return (
    <div className='post-header' onClick={seeProfile}>
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