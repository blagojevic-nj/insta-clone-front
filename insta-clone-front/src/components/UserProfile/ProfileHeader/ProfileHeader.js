import React from "react";
import useProfileHeader from "../../../helpers/hooks/useProfileHeader";
import { followUnfollow } from "../../../services/UserService";
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
  ] = useProfileHeader(username);

  const handleFollow = (click) => {
    followUnfollow(loggedInUser, username)
      .then((res) => {
        FollowVal === "Follow"
          ? setFollowVal("Unfollow")
          : setFollowVal("Follow");
        toast.success(`User successfully ${FollowVal}ed!`);
      })
      .catch((err) => {console.log(err.message)});
  };

  return (
    <div className="header-container row">
      <div className="img-container">
        <img
          className="profile-img"
          alt="loading..."
          src={ProfilePicture}
        ></img>
      </div>
      <div className="info-container">
        <div className="row space-between">
          <p className="usernameHeader">{username}</p>
          {FollowEnabled ? (
            <button
              className="btn btn-outline-primary small"
              onClick={(e) => handleFollow(e)}
            >
              {FollowVal}
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="row">
          <span className="info-val">
            <span className="number">{PostsNumber}</span>
            posts
          </span>
          <span className="info-val">
            <span className="number">{FollowerNumber}</span>
            followers
          </span>
          <span className="info-val">
            <span className="number">{FollowingNumber}</span>
            following
          </span>
        </div>
        <p className="name">{Name}</p>
        <p className="bio"> {Bio}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
