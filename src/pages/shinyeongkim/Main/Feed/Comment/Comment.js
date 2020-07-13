import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Comment.scss";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentText: "",
      userId: "aida_shin.y",
    };
  }

  handleCommentText = (e) => {
    this.setState({
      commentText: e.target.value,
    });
  };

  handleCommentUpload = (e) => {
    e.preventDefault();
    const { commentList, commentText } = this.state;
    this.setState({
      commentText: "",
      commentList: [...commentList, commentText],
    });
  };

  handleDeleteComment = (index) => {
    const List = this.state.commentList;
    List.splice(index, 1);
    this.setState({ commentList: List });
  };

  render() {
    const comment = this.state.commentList.map((comment, i) => {
      return (
        <li className="comment" key={i}>
          <div className="texts">
            <span className="user__id">{this.state.userId}</span>
            <span className="contents">{comment}</span>
          </div>
          <div className="heart-btn">
            <RiDeleteBinLine
              style={{ marginRight: "5px", cursor: "pointer" }}
              onClick={() => this.handleDeleteComment(i)}
            />
            <FaRegHeart />
          </div>
        </li>
      );
    });

    return (
      <div className="Comment_KSY">
        <ul>
          <li className="comment">
            <div className="texts">
              <span className="user__id">
                {this.props.content.commentedTexts.userId}
              </span>
              <span className="contents">
                {this.props.content.commentedTexts.text}
              </span>
            </div>
            <div className="heart-btn">
              <FaRegHeart />
            </div>
          </li>
          {comment}
        </ul>
        <span className="time">43분 전</span>
        <footer className="comment-writing">
          <form
            onSubmit={
              this.state.commentText.length > 0
                ? this.handleCommentUpload
                : (e) => e.preventDefault()
            }
          >
            <input
              type="text"
              onChange={this.handleCommentText}
              value={this.state.commentText}
              placeholder="댓글 달기..."
            />
            <button
              className={
                this.state.commentText ? "activatedBtn" : "unActivatedBtn"
              }
            >
              게시
            </button>
          </form>
        </footer>
      </div>
    );
  }
}

export default Comment;
