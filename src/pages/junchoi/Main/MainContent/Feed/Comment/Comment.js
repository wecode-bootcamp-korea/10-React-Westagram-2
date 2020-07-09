import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { userName, content } = this.props.comment;
    return (
      <div className="comment">
        <div className="user-id">{userName}</div>
        <div className="content">{content}</div>
      </div>
    );
  }
}

export default Comment;