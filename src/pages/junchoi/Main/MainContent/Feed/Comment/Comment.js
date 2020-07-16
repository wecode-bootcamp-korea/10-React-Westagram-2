import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { userName, content } = this.props.comment;
    const { onCommentDelete } = this.props;

    return (
      <div className="comment">
        <div className="user-id">{userName}</div>
        <div className="content-wrapper">
          <div className="content">{content}</div>
          <button onClick={() => onCommentDelete(userName)}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Comment;