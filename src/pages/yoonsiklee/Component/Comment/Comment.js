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

  ChangeInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  clickAddComment = () => {
    this.setState({
      commentArr: this.state.commentArr.concat(this.state.userInput),
    });
  };

  EnterAddComment = (e) => {
    if (e.key === "Enter") {
      this.clickAddComment();
    }
  };

  render() {
    const { userInput } = this.state;
    return (
      <>
        <div className="Comment_LYS">
          <a>
            <a className="feeds-text-name">이윤식</a>님 외 10명이 좋아합니다.
          </a>
          <p />
          <a>안녕하세요</a>
          {this.state.commentArr.map((userInput, idx) => {
            return (
              <div
                className="commnet-box"
                key={idx}
                parentFunction={this.delete}
              >
                <a className="comment-id">Wecode</a>
                <span className="comment-content">{userInput}</span>
                <button className="comment-btn-del" onClick={this.delete}>
                  삭제
                </button>
              </div>
            );
          })}
          <p className="feeds-text-time">42분 전</p>
        </div>
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
      </>
    );
  }
}
export default Comment;
