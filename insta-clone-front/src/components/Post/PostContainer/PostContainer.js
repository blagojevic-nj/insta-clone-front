import React, { useState } from "react";
import AddComment from "../AddComment/AddComment";
import PostHeader from "../PostHeader/PostHeader";
import ReactionsBar from "../Reactions/ReactionsBar";
import "./PostContainer.css";

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
      <ReactionsBar entityId={post.id} likes={likes} setLikes={setLikes} />
      <div className="post-description">
        <p className="username">@{post.username}</p>
        <p>{post.text}</p>
      </div>
      <AddComment />
    </div>
  );
};

export default PostContainer;
