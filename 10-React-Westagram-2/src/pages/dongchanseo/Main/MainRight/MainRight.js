import React, { Component } from "react";
import MyInfo from "./MyInfo/MyInfo";
import Recommend from "./Recommend/Recommend";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="MainRight">
        <MyInfo />
        <Recommend />
        <div className="etc">
          <p>
            Instagram 정보, 지원, 홍보 센터, API 채용 정보, 개인정보처리방침,
            약관디렉터리, 프로필, 해시태그, 언어
          </p>
          <p>ⓒ 2019 INSTAGRAM</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
