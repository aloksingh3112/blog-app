import React, { Component } from "react";


class Auth extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>
       
        <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
       
        
          <button className="btn btn-primary">Submit</button>
       
      </div>
    );
  }
}

export default Auth;
