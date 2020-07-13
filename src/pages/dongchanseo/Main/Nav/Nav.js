import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav_DC">
        <div className="nav-container">
          <div className="nav-left">
            <img
              className="nav-left-icon"
              alt="nav-left-icon"
              src="/images/dongchanseo/icon_text.png"
            />
            <p className="nav-left-slice">|</p>
            <img
              className="nav-left-logo"
              alt="nav-left-logo"
              src="/images/dongchanseo/logo_text.png"
            />
          </div>
          <div className="nav-center">
            <input type="text" placeholder="검색어 입력" />
            <img src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
          </div>
          <div className="nav-content-right">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />

            <div className="nav-profile">
              <img src="/images/dongchanseo/hansohee_board1.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
