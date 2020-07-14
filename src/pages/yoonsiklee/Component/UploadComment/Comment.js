import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      commentArr: [],
      commentvl: "",
    };
  }

  render() {
    const { userInput } = this.state;
    return (
      <div className="comment-container">
        <input
          type="text"
          className="comment"
          placeholder="댓글 달기..."
          onChange={this.ChangeInput}
          onKeyPress={this.EnterAddComment}
          value={this.state.userInput}
        />
        <button className="comment-button" onClick={this.clickAddComment}>
          게시
        </button>
      </div>
    );
  }
}
export default Comment;
