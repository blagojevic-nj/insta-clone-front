import React from "react";
import UserBio from "../Bio/UserBio";
import useProfileHeader from "../../../helpers/hooks/useProfileHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProfileHeader.css";

toast.configure();

const ProfileHeader = ({ username }) => {
  const [
    loggedInUser,
    Name,
    Bio,
    ProfilePicture,
    PostsNumber,
    FollowerNumber,
    FollowingNumber,
    FollowEnabled,
    FollowVal,
    setFollowVal,
    setFollowerNumber,
  ] = useProfileHeader(username);

  return (
    <div className="header-container row">
      <div className="img-container">
        <img
          className="profile-img"
          alt="loading..."
          src={ProfilePicture}
        ></img>
      </div>
        <UserBio  username={username}
                  FollowEnabled = {FollowEnabled} 
                  FollowVal = {FollowVal}
                  PostsNumber={ PostsNumber}
                  FollowerNumber={ FollowerNumber}
                  FollowingNumber={ FollowingNumber}
                  Name={ Name}
                  Bio={Bio}
                  loggedInUser={loggedInUser}
                  setFollowVal={setFollowVal}
                  setFollowerNumber={setFollowerNumber}
         ></UserBio>
      
    </div>
  );
};

export default ProfileHeader;
