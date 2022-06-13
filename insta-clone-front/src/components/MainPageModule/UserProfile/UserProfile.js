import React from 'react'
import { useParams } from 'react-router'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import UserPosts from './UserPosts/UserPosts'
import FriendSuggestion from '../../UtilModule/FriendSuggestion/FriendSuggestion'
import "./UserProfile.css"

const UserProfile = () => {

  const { username } = useParams()

  return (
    <div className='profile-container'>
      <div className='profile'>
        <ProfileHeader username={username} />
        <UserPosts username={username} />
        <div className="centerItems">
          <FriendSuggestion numOfSuggs={4}></FriendSuggestion>
        </div>

      </div>
    </div>
  )
}

export default UserProfile