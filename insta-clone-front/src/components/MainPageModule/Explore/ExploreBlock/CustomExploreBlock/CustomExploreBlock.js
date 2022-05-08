import React from 'react'
import "./CustomExploreBlock.css"

const CustomExploreBlock = ({ posts }) => {
  return (

    posts && posts[0] ?

      <div className='custom-explore-block'>
        <div className='custom-explore-small-col'>
          <div className='custom-post-container-sm'>
                  <img className="custom-post"
                    alt="loading..."
                    src={process.env.REACT_APP_SERVER_URL + posts[0].picture}
                  ></img>
          </div>

          <div className='custom-post-container-sm'>
                  <img className="custom-post"
                    alt="loading..."
                    src={process.env.REACT_APP_SERVER_URL + posts[0].picture}
                  ></img>
          </div>
        </div>
        <div className='custom-explore-big-col'>
          <div className='custom-post-container-lg'>
                  <img className="custom-post"
                    alt="loading..."
                    src={process.env.REACT_APP_SERVER_URL + posts[0].picture}
                  ></img>
          </div>
        </div>
      </div>

      : <></>
  )
}

export default CustomExploreBlock


