import React, { useState, useEffect } from "react";
import { getOnePost } from "../../../../../services/PostService.js";
import PostHeader from "../../PostHeader/PostHeader.js";
import { PostContext } from "../../../../../helpers/contexts/PostContext.js";
import ReactionsBar from "../../Reactions/ReactionsBar.js";
import AddComment from "../../AddComment/AddComment.js";

import "./SinglePostView.css";

const SinglePostView = ({ postId }) => {
  const [Post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    getOnePost(postId)
      .then((res) => {
        if (res.data) {
          setPost(res.data);
          setLikes(res.data.numOfReactions);
        }
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, []);
  return (
    <>
      <div id="single-post-view">
        <div id="main-img-container">
          <img
            id="single-post-img"
            alt="loading..."
            src={process.env.REACT_APP_SERVER_URL + Post.picture}
          ></img>
        </div>
        <div id="post-detalies-container">
          <div className="post-header-container">
            <PostHeader
              username={Post.username}
              profilePic={
                process.env.REACT_APP_SERVER_URL + Post.userProfilePicture
              }
            ></PostHeader>
            <div className="post-description">
              <p>
                <span className="username">@{Post.username}</span> {Post.text}
              </p>
            </div>
          </div>
          <div className="single-post-comment-container">
            <div></div>
            <div className="reactions-comment-container">
              <PostContext.Provider
                value={{ entityId: postId, likes, setLikes }}
              >
                <ReactionsBar likes={likes} />
              </PostContext.Provider>
              <AddComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostView;
