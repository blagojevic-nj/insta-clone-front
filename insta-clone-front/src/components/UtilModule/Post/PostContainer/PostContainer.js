import React, { useState } from "react";
import AddComment from "../AddComment/AddComment";
import PostHeader from "../PostHeader/PostHeader";
import ReactionsBar from "../Reactions/ReactionsBar";
import "./PostContainer.css";
import { PostContext } from "../../../../helpers/contexts/PostContext";
import { REACT_APP_URL} from '../../../../helpers/constants.js'
import TagRibbon from "../TagRibbon/TagRibbon";

const PostContainer = ({ post }) => {
  const [likes, setLikes] = useState(post.numOfReactions);

  const viewPost = (id) => {
     window.location.href = `${REACT_APP_URL}/post/${id}`
  }

  return (
    <div className="post-container">
      <PostHeader
        username={post.username}
        profilePic={process.env.REACT_APP_SERVER_URL + post.userProfilePicture}
        location={post.location}
      ></PostHeader>
        <img
          className="post-img cursor"
          alt="loading..."
          src={process.env.REACT_APP_SERVER_URL + post.picture}
          onClick={() => viewPost(post.id)}
        ></img>
      <PostContext.Provider value={{ entityId: post.id, likes, setLikes }}>
        <ReactionsBar likes={likes} />
      </PostContext.Provider>
      <div className="post-description">
        <p><span className="username">@{post.username}</span> {post.text}</p>
      </div>
      <TagRibbon tags={post.categories}></TagRibbon>
      <AddComment />
    </div>
  );
};

export default PostContainer;
