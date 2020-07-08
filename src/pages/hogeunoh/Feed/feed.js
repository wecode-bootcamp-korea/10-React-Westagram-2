import React from "react";
import "./feed.scss"

class Feed extends React.Component {
    render() {
        return (
            <div className="mainLeftBox">
                <div className="storyBox">
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                    <div className="story">
                        <div className="gradation">
                            <img alt="profile" src="/images/hogeunoh/사진.png" />
                        </div>
                        <span>suayo</span>
                    </div>
                </div>
                <div className="uploadBox">
                    <div className="uploadHeaderBox">
                        <div className="gradationMini">
                            <img className="UHBprofile" alt="profile" src="/images/hogeunoh/test.png" />
                        </div>
                        <span>bombombombom</span>
                        <img className="UHBdot" alt="dot" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                    </div>
                    <div className="uploadPictureBox">
                        <img alt="picure" src="/images/hogeunoh/사진.png" />
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
                    <div className="commentBox">
                        <span className="name">ohohho</span>
                        <span>댓글</span>
                        <img alt="love" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                    </div>
                    <div className="commnetTimeBox">
                        <span>4시간 전</span>
                    </div>
                    <div className="commentInputBox">
                        <input className="commentInput" type="text" placeholder="댓글 달기..." />
                        <span className="button">게시</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feed;