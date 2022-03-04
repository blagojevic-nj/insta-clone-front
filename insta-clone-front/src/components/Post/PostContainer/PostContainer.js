import React, { useState } from "react";
import AddComment from "../AddComment/AddComment";
import PostHeader from "../PostHeader/PostHeader";
import ReactionsBar from "../Reactions/ReactionsBar";
import "./PostContainer.css";
import { PostContext } from "../../../helpers/contexts/PostContext";

const PostContainer = ({ post }) => {
  const [likes, setLikes] = useState(post.numOfReactions);

  return (
    <div className="post-container">
      <PostHeader
        username={post.username}
        profilePic={process.env.REACT_APP_SERVER_URL + post.userProfilePicture}
      ></PostHeader>
      <img
        className="post-img"
        alt="loading..."
        src={process.env.REACT_APP_SERVER_URL + post.picture}
      ></img>
      <PostContext.Provider value={{ entityId: post.id, likes, setLikes }}>
        <ReactionsBar likes={likes} />
      </PostContext.Provider>
      <div className="post-description">
        <p><span className="username">@{post.username}</span> {post.text}</p>
      </div>
      <AddComment />
    </div>
  );
};

export default PostContainer;
