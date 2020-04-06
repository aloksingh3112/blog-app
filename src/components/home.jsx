import React, { Component } from "react";
import AddPost from "./addPost";
import ListPost from "./listPost";

class Home extends Component {
  state = {
    posts: [],
  };

  addPost=(post) =>{
    const posts = [ ...this.state.posts ];
    posts.push(post)
    this.setState({
      posts,
    });
  }

  render() {
    return (
      <div className="container">
        <AddPost addPost={this.addPost}/>
        {
            this.state.posts.map((post)=>{
                   return(
                     <ListPost key={post.id} post={post}/>
                   )
            })   
        }
        
      </div>
    );
  }
}

export default Home;
