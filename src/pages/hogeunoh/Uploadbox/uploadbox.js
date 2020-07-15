import React from "react";
import Comment from "../Comment/Comment";
import "./uploadbox.scss"


class Uploadbox extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: '',
            posting: ['기본 댓글'],
            id: ""
        }
    }

    comments = (e) => {
        if (e.key == "Enter") {
            this.click()
        } else { this.setState({ comment: e.target.value }) }
    }

    click = () => {
        if (this.state.comment) {
            this.setState({
                posting: [...this.state.posting, this.state.comment],
                comment: '',
            })
        }
    }

    delete = (e) => {
        this.setState({
            posting: this.state.posting.filter(word => word !== this.state.posting[e] )
        })
    }

    render() {
        const { img } = this.props;
        return (
            <div className="uploadBox">
                <div className="uploadHeaderBox">
                    <div className="gradationMini">
                        <img className="UHBprofile" alt="profile" src={img.large_cover_image} />
                    </div>
                    <span>{img.title}</span>
                    <img className="UHBdot" alt="dot" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                </div>
                <div className="uploadPictureBox">
                    <img alt="picure" src={img.large_cover_image} />
                </div>
                <div className="pictureIconBox">
                    <img alt="love" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                    <img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                    <img alt="" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                    <img className="iconLeft" alt=""
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                </div>
                <div className="likeBox">
                    <img alt="profile" src="/images/hogeunoh/프사.png" />
                    <div>
                        <span>hogeun님 외 5명이 좋아합니다.</span>
                    </div>
                </div>
                {this.state.posting.map((post, index) => (
                    <Comment key={index} id={index} comment={post} parentFunction={this.delete} />
                ))}
                <div className="commnetTimeBox">
                    <span>4시간 전</span>
                </div>
                <div className="commentInputBox">
                    <input
                        className="commentInput"
                        onKeyPress={this.comments}
                        onChange={this.comments}
                        type="text"
                        value={this.state.comment}
                        placeholder="댓글 달기..."
                    />
                    <button
                        className={this.state.comment ? "btn blue" : "btn skyblue"}
                        onClick={this.click}
                    >
                        게시
                </button>
                </div>
            </div>
        );
    }
}

export default Uploadbox;