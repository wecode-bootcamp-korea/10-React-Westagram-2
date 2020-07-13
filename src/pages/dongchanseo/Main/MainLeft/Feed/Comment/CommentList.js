import React, { Component } from "react";
import Comment from "./Comment";
import "./CommentList.scss";

class CommentList extends Component {
  static defaultProps = {
    commentList: [],
  };

  render() {
    const { commentList, delComment } = this.props;

    if (!commentList) return null;

    const list = commentList.map((comment, index) => (
      <li key={index}>
        <Comment data={comment} delComment={delComment} index={index} />
      </li>
    ));

    return (
      <>
        <div className="CommentList_DC">
          <ul>{list}</ul>
        </div>
      </>
    );
  }
}

export default CommentList;
