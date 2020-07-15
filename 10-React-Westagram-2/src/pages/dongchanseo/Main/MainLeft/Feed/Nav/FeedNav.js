import React, { Component } from "react";
import "./FeedNav.scss";

class FeedNav extends Component {
  render() {
    return (
      <div className="FeedNav">
        <div className="left">
          <div className="profile">
            <img src="/images/dongchanseo/hansohee.png" />
          </div>
          <div>
            <p className="profile-p">{this.props.id}</p>
          </div>
        </div>
        <div className="right">
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
        </div>
      </div>
    );
  }
}

export default FeedNav;
