import React, { Component } from "react";
import "./Heart.scss";

class Heart extends Component {
  render() {
    return (
      <>
        <div className="Heart_DC">
          <div className="heart-nav">
            <div className="heart-nav-left">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
              <p className="feed-heart-value">false</p>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
            </div>
            <div className="heart-nav-right">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
            </div>
          </div>
          <div className="heart-info-contianer">
            <div className="heart-profile">
              <img src="/images/dongchanseo/hansohee.png" />
            </div>
            <div className="heart-comment-container">
              <span className="span-border">sdc337dc</span>
              <span className="span-normal">님</span>
              <span className="span-border">외 10명</span>
              <span className="span-normal">이 좋아합니다.</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Heart;
