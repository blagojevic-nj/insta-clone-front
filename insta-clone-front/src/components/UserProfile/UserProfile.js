import React from 'react'
import { useParams } from 'react-router'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import UserPosts from './UserPosts/UserPosts'
import "./UserProfile.css"

const UserProfile = () => {

    const { username } = useParams()

  return (
    <div className='profile-container'>
      <div className='profile'>
          <ProfileHeader username={username}/>
          <UserPosts username={username}/>
      </div>
    </div>
  )
}

export default UserProfile