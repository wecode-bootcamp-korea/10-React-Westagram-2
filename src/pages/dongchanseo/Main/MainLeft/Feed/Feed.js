import React, { Component } from "react";
import FragmentComment from "./FragmentComment";
import Heart from "./Heart/Heart";
import "./Feed.scss";

class Feed extends Component {
  render() {
    return (
      <>
        <div className="Feed_DC">
          <div className="feed-nav">
            <div className="feed-nav-left">
              <div className="feed-nav-profile">
                <img src="/images/dongchanseo/hansohee.png" />
              </div>
              <div>
                <p className="feed-nav-profile-p">sdc337dc</p>
              </div>
            </div>
            <div className="feed-nav-right">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
            </div>
          </div>

          <div className="feed-main">
            <img src="/images/dongchanseo/hansohee_board1.jpg" />
          </div>

          <Heart />
          <FragmentComment />
        </div>
      </>
    );
  }
}

export default Feed;
