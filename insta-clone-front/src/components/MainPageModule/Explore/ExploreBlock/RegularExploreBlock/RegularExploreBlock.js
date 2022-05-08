import React from 'react'
import "./RegularExploreBlock.css"

const RegularExploreBlock = ({ posts }) => {
    return (
        posts && posts[0] ?

            <div className='regular-explore-block'>
                {posts?.map(post =>
                    <div className='explore-post-container'>
                        <img className="explore-post"
                            alt="loading..."
                            src={process.env.REACT_APP_SERVER_URL + post.picture}
                        ></img>
                    </div>
                )}
            </div>

            : <></>
    )
}

export default RegularExploreBlock