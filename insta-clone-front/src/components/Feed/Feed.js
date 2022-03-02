import React, { useEffect, useState } from 'react'
import PostContainer from "../Post/PostContainer/PostContainer.js"
import "./Feed.css"
import InfiniteScroll from 'react-infinite-scroller';

import * as postService from "../../services/PostService"

const Feed = () => {

  const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  
  useEffect(() => {
    postService.getFeed(pageNumber, pageSize).then((result) => {
      console.log(result.data.content)
      setPosts(result.data.content)
    }).catch((error) => {

    })
  }, [])

  const loadFunc = () => {
    // setPageNumber(pageNumber + 1);
    // postService.getFeed(pageNumber, pageSize).then((result) => {
    //   console.log(result.data.content)
    //   setPosts(result.data.content)
    // }).catch((error) => {

    // })
    console()
  }

  return (
    <div className='feed-container'>
        <div className='feed'>
          {/* <InfiniteScroll
            pageStart={pageNumber}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          > */}
            {
              posts.map((post) => {
                return <PostContainer key={post.id} post={post}/>
              })
            }
          {/* </InfiniteScroll> */}
        </div>
    </div>
  )
}

export default Feed