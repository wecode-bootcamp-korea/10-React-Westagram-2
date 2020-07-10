import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <article className="article_lys">
        <div className="feeds">
          <div className="feeds-header">
            <img
              className="feeds-header-image"
              src="/images/yoonsiklee/wecode.jpg"
            />
            <span>Wecode</span>
          </div>
          <img
            className="feeds-main-image"
            src="/images/yoonsiklee/wecode2.jpg"
          />
          <div className="feeds-icon-container">
            <img
              className="feeds-icon"
              alt="feeds-icon1"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="feeds-icon"
              alt="feeds-icon1"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
            />
            <img
              className="feeds-icon"
              alt="feeds-icon1"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
            />
            <img
              className="feeds-icon feeds-icon-right"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
            />
          </div>
          <div className="feeds-text">
            <a>
              <a className="feeds-text-name">이윤식</a>님 외 10명이 좋아합니다.
            </a>
            <p />
            <a>안녕하세요</a>
            <div className="commnet-plus"></div>
            <p className="feeds-text-time">42분 전</p>
          </div>
          <div className="comment-container">
            <input type="text" className="comment" placeholder="댓글 달기..." />
            <button className="comment-button">게시</button>
          </div>
        </div>
      </article>
    );
  }
}

export default Article;
