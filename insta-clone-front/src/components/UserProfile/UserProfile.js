import React from 'react'
import { useParams } from 'react-router'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import UserPosts from './UserPosts/UserPosts'
import "./UserProfile.css"

const UserProfile = () => {

    const { id } = useParams()

  return (
    <div className='profile-container'>
      <div className='profile'>
          <ProfileHeader/>
          <UserPosts/>
      </div>
    </div>
  )
}

export default UserProfile