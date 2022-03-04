import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  getProfileInfo,
  checkIfUserFollowsUser,
} from "../../services/UserService";
import { getDecodedUsername } from "../../helpers/AuthHelper.js";
import { SPRING_APP_URL } from "../../components/constants";

export const useProfileHeader = (username) => {
  const [Name, setName] = useState("");
  const [Bio, setBio] = useState("");
  const [ProfilePicture, setProfilePicture] = useState("");
  const [PostsNumber, setPostsNumber] = useState(0);
  const [FollowerNumber, setFollowerNumber] = useState(0);
  const [FollowingNumber, setFollowingNumber] = useState(0);
  const [FollowVal, setFollowVal] = useState("Follow");
  var loggedInUser = null;
  const FollowEnabled = getDecodedUsername() !== username;

  useEffect(() => {
    if (!username) return <Navigate to={"/login"} />;
    loggedInUser = getDecodedUsername();

    getProfileInfo(username)
      .then((res) => {
        if (!res.data.username) <Navigate to={"/home"} />;
        setName(res.data.name);
        setPostsNumber(res.data.postsNumber);
        setFollowerNumber(res.data.followersNumber);
        setFollowingNumber(res.data.followingNumber);
        setBio(res.data.bio);
        setProfilePicture(`${SPRING_APP_URL}${res.data.profilePicture}`);
        checkIfUserFollowsUser(loggedInUser, username).then((res) =>
              res.data ? setFollowVal("Unfollow") : setFollowVal("Follow")
            ); 
      })
      .catch((err) => {
        window.location.href = "/home";
      });
  }, []);

  return [
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
  ];
};

export default useProfileHeader;
