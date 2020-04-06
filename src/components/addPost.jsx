import React from 'react';

class AddPost extends React.Component {
       name=React.createRef();
       post=React.createRef();

       handleSubmit=(e)=>{
         e.preventDefault();
       //   this.name.current.value)
         const form={
                name:this.name.current.value,
                post:this.post.current.value,
                id:`post${Date.now()}`
         }
        this.props.addPost(form) 
       e.currentTarget.reset()         
       }

       render() { 
              return (
                     <div className="mt-4">
                      <form onSubmit={this.handleSubmit}>   
                     <div className="form-group">
                       <input ref={this.name} type="text" className="form-control" placeholder="Enter name" name='name'/>     
                     </div>
                     <div className="form-group">
                     <textarea ref={this.post} name="" className="form-control" placeholder="Enter post" name='post'></textarea>
                     </div>
             
                     <button type="submit" className='btn btn-primary'>Add Post</button>
                     </form>   
                   </div>   
                );
       }
}
 
export default AddPost;