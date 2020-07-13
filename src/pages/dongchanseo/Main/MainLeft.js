import React, { Component } from "react";
import "./MainLeft.scss";

class MainLeft extends Component {
  returnLogin() {}
  render() {
    return (
      <div className="MainLeft_DC">
        <div className="story">
          <div className="story-list-container">
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-img">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
            <div className="story-profile-container">
              <div className="story-profile-inside">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="feed">
          <div className="nav">
            <div className="nav-left">
              <div className="nav-profile">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
              <div>
                <p className="nav-profile-p">sdc337dc</p>
              </div>
            </div>
            <div className="nav-right">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
            </div>
          </div>

          <div className="feed-main">
            <img src="/images/dongchanseo/hansohee_board1.jpg" />
          </div>

          <div className="footer">
            <div className="footer-nav">
              <div className="footer-nav-left">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                <p id="feed-heart-value">false</p>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
              </div>
              <div className="footer-nav-right">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
              </div>
            </div>
            <div className="like">
              <div className="like-profile">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
              <div className="like-comment-container">
                <span className="span-border">sdc337dc</span>
                <span className="span-normal">님</span>
                <span className="span-border">외 10명</span>
                <span className="span-normal">이 좋아합니다.</span>
              </div>
            </div>

            <div className="reply">
              <div>
                <ul>
                  <li>
                    <span className="span-border">sdc3737dc</span>
                    <span className="span-normal">이쁘심</span>
                    <span className="span-more">더보기</span>
                  </li>
                  <li>
                    <span className="span-border">xoohee</span>
                    <span className="span-normal">여신님</span>
                  </li>
                  <li>
                    <span className="span-border">SSe_5</span>
                    <span className="span-normal">알고 있음</span>
                  </li>
                </ul>
              </div>
              <div className="reply-input-container">
                <input type="text" id="comment" placeholder="댓글 달기..." />
                <button type="button">게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLeft;
