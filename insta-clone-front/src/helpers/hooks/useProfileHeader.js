import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  getProfileInfo,
  checkIfUserFollowsUser,
} from "../../services/UserService";
import { getDecodedUsername } from "../../helpers/AuthHelper.js";

export const useProfileHeader = (username) => {
  const [Username, setUsername] = useState(username || "Loading...");
  const [Name, setName] = useState("");
  const [Bio, setBio] = useState("");
  const [ProfilePicture, setProfilePicture] = useState("");
  const [PostsNumber, setPostsNumber] = useState(0);
  const [FollowerNumber, setFollowerNumber] = useState(0);
  const [FollowingNumber, setFollowingNumber] = useState(0);
  const [FollowEnabled, setFollowEnabled] = useState(true);
  const [FollowVal, setFollowVal] = useState("Follow");
  var loggedInUser = null;

  useEffect(() => {
    if (!username) return <Navigate to={"/login"} />;

    getProfileInfo(username)
      .then((res) => {
        if (!res.data.username) <Navigate to={"/home"} />;
        setName(res.data.name);
        setPostsNumber(res.data.postsNumber);
        setFollowerNumber(res.data.followersNumber);
        setFollowingNumber(res.data.followingNumber);
        setBio(res.data.bio);
        setProfilePicture(
          res.data.profilePicture ? res.data.profilePicture : ""
        );
        loggedInUser = getDecodedUsername();
        if (loggedInUser) {
          if (loggedInUser === username) {
            setFollowEnabled(false);
          } else {
            setFollowEnabled(true);
            checkIfUserFollowsUser(loggedInUser, username).then((res) =>
              res.data === "true"
                ? setFollowVal("Follow")
                : setFollowVal("Unfollow")
            );
          }
        } else {
          window.location.href = "/home";
        }
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
  ];
};

export default useProfileHeader;
