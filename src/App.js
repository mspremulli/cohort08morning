import React, {Component} from 'react';
import {BrowerRouter, Route } from 'react-router-dom'
import './App.css';
import posts from './mock/posts.js';
import Navbar from './components/Navbar.js';
import PostList from './components/PostList.js';
import PostForm from './components/PostForm.js';

class App extends Component {
  state = {
    posts: [...posts],
  }

  addPost = (postData) => {
    this.setState({
    posts: [...this.state.posts, postData],
    })
  }

  render(){
    
    return (
      <BrowerRouter>
        <div className="App">
          <Navbar />
          <PostList postList={this.state.posts} />
          <PostForm addPost={this.props} />
        </div>
      </BrowerRouter>
    );
  }
}



export default App;
