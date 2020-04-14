import React from 'react';

const Post = ({post}) => {
    
    return(
        <div className='box'>
            <h2>{post.title}</h2>
            <p>{post.resourceAuthor}</p>
            {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
            <p>Rating: {post.rating}</p>
            <p>Comments: {post.comments.length}</p>
        </div>
    )

}

export default Post;