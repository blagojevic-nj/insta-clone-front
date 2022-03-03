import React, { useState } from "react";
import PostContainer from "../Post/PostContainer/PostContainer.js";
import "./Feed.css";
import InfiniteScroll from "react-infinite-scroller";

import { getFeed } from "../../services/PostService";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadFunc = () => {
    getFeed(pageNumber, 4).then((result) => {
      const newPosts = [...posts, ...result.data.content];
      setPosts(newPosts);

      if (newPosts.length >= result.data.totalElements) {
        setHasMore(false);
      }
      setPageNumber(pageNumber + 1);
    });
  };

  return (
    <div className="feed-container">
      <div className="feed">
        <InfiniteScroll
          pageStart={pageNumber}
          loadMore={loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {posts.map((post) => {
            return <PostContainer key={post.id} post={post} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Feed;
