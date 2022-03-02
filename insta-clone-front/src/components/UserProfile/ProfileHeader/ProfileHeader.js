import React, { useState } from 'react'
import "./ProfileHeader.css"

const ProfileHeader = () => {
    const [UserName, setUserName] = useState("LuLe")
    const [Name, setName] = useState("Luka Kureljusic")
    const [Bio, setBio] = useState("Neki motivacioni opis profilla")
    const [ProfilePicture, setProfilePicture] = useState(img)
    const [PostsNumber, setPostsNumber] = useState(0)
    const [FollowerNumber, setFollowerNumber] = useState(158)
    const [FollowingNumber, setFollowingNumber] = useState(123)
    const [FollowEnabled, setFollowEnabled] = useState(true)
    const [FollowVal, setFollowVal] = useState("Follow")


  return (
    <div className='header-container row'>
        <div className='img-container'>
            <img className='profile-img' alt='loading...' src={ProfilePicture}></img>
        </div>
        <div className='info-container'>
            <div className='row space-between'>
                <p className='usernameHeader'>{UserName}</p>
                {FollowEnabled ? <button className='btn btn-primary small'>{FollowVal}</button> : {}}
                
            </div>
            <div className='row'>
                <span className='info-val'>
                    <span className='number'>{PostsNumber}</span>
                    posts
                </span>
                <span className='info-val'>
                    <span className='number'>{FollowerNumber}</span>
                    followers
                </span>
                <span className='info-val'>
                    <span className='number'>{FollowingNumber}</span>
                    following
                </span>
            </div>
            <p className='name'>{Name}</p>
            <p className='bio'> {Bio}</p>

        </div>
    </div>
  )
}

export default ProfileHeader


const img = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80"