import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Icon from "@material-ui/core/Icon";

class ListPost extends React.Component {
       paper= {
              padding: "10px",
              textAlign: "center",
              
            }   

  comment = React.createRef();
  state = {
    comments: {},
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const data = { id: `comment${Date.now()}`, comment: e.target.value };
      const comments = { ...this.state.comments };
      console.log(this.props.post.id);
      if (!comments[this.props.post.id]) {
        comments[this.props.post.id] = [data];
      } else {
        comments[this.props.post.id].push(data);
      }
      this.setState({
        comments,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="card mt-3">
          <div className="card-header">{this.props.post.name}</div>
          <div className="card-body">
            <p className="card-text">{this.props.post.post}</p>
          </div>
          <div className="card-footer">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={
                  <Icon
                    className="fa fa-plus-circle"
                    style={{ fontSize: 30 }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Add Comment</Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
              <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
                  id="filled-full-width"
                  style={{ margin: 8 }}
                  placeholder="Add comments"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  ref={this.comment}
                  onKeyDown={this.handleKeyDown}
                />   
       </Grid>
               
                  {this.state.comments &&
                    this.state.comments[this.props.post.id] &&
                    this.state.comments[this.props.post.id].map((post) => {
                      return (
                        <Grid item xs={12}>
                          <Paper><h6 className='p-2'>{post.comment}</h6></Paper>
                        </Grid>
                      );
                    })}
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListPost;
