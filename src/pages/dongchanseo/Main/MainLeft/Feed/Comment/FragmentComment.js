import React, { Component } from "react";
import CommentLit from "./CommentList";
import "./FragmentComment.scss";

class FragmentComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: "",
      commentList: [
        { num: 0, id: "sdc337dc", content: "이쁘심" },
        { num: 1, id: "sdc337dc", content: "이쁘심2" },
        { num: 2, id: "ggul_00", content: "그만해" },
        { num: 3, id: "dooloi", content: "알고 있음" },
        { num: 4, id: "check", content: "확인용" },
      ],
    };
  }

  // 댓글 추가 이벤트 함수
  addComment = () => {
    if (this.state.commentValue === "") {
      alert("내용이 없습니다.");
      return;
    }

    this.setState({
      commentValue: "",
      commentList: this.state.commentList.concat({
        num: this.state.commentList.length,
        id: "sdc337dc",
        content: this.state.commentValue,
      }),
    });
  };

  // 댓글 삭제 이벤트 함수
  delComment = (num) => {
    this.setState({
      commentList: this.state.commentList.filter(
        (comment) => comment.num !== num
      ),
    });
  };

  // 댓글 input 함수
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      commentValue: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="FragmentComment_DC">
          <CommentLit
            delComment={this.delComment}
            commentList={this.state.commentList}
          />

          <div className="input-container">
            <input
              onChange={this.handleInput}
              placeholder="댓글 달기..."
              value={this.state.commentValue}
            />
            <button type="button" onClick={this.addComment}>
              게시
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default FragmentComment;
