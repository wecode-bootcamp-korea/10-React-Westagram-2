import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  handleDel = () => {
    const { data, delComment } = this.props;
    delComment(data.num);
  };
  render() {
    const { data, index } = this.props;

    return (
      <>
        <div className="Comment_DC">
          <div className="span-container">
            <span className="span-border">{data.id}</span>
            <span className="span-normal">{data.content}</span>
            {index === 0 ? (
              <span className="span-more">더보기</span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="btn-container">
            <img
              type="button"
              onClick={this.handleDel}
              src="/images/dongchanseo/trash.png"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Comment;
