import React, { Component } from "react";
import "./Article.scss";
import Comment from "../../Component/Comment/Comment";

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
          <Comment />
        </div>
      </article>
    );
  }
}

export default Article;
