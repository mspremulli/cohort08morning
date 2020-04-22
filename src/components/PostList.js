import React from 'react';

const PostList = (props) =>{

    const renderPosts = () => {
        // const display = posts.map(post => {
        //   return <Post post = {post} />
        // })
        const display = this.state.posts.map(post => {
        
            return <Post post = {post} />
        })
            return display;
        }

    return(
        <div className ='postList'>
        {renderPosts()} 
      </div>
    )
}

export default PostList