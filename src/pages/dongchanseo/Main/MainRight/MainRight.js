import React, { Component } from "react";
import "./MainRight.scss";

class MainRight extends Component {
  render() {
    return (
      <div className="MainRight">
        <div className="myinfo">
          <div className="myinfo-left">
            <img src="/images/dongchanseo/wecode_hansohee.jpg" />
          </div>
          <div className="myinfo-right">
            <div className="myinfo-right-1">
              <p>wecode_bootcamp</p>
            </div>
            <div className="myinfo-right-2">
              <p>weCode|위코드</p>
            </div>
          </div>
        </div>
        <div className="recommend">
          <div className="recommend-nav">
            <p className="recommend-nav-p1">회원님을 위한 추천</p>
            <p className="recommend-nav-p2">모두보기</p>
          </div>
          <div className="recommend-row">
            <ul>
              <li>
                <div className="li-left">
                  <div className="recommend-profile">
                    <img src="/images/dongchanseo/wecode_hansohee.jpg" />
                  </div>
                  <div>
                    <p className="recommend-id">sohee</p>
                    <p className="recommend-count">xohheee외 2명이...</p>
                  </div>
                </div>

                <div>
                  <p className="li-right">팔로우</p>
                </div>
              </li>
              <li>
                <div className="li-left">
                  <div className="recommend-profile">
                    <img src="/images/dongchanseo/hansohee.png" />
                  </div>
                  <div>
                    <p className="recommend-id">sohee</p>
                    <p className="recommend-count">sdc337dc외 2명이...</p>
                  </div>
                </div>

                <div>
                  <p className="li-right">팔로우</p>
                </div>
              </li>
              <li>
                <div className="li-left">
                  <div className="recommend-profile">
                    <img src="/images/dongchanseo/wecode_hansohee.jpg" />
                  </div>
                  <div>
                    <p className="recommend-id">sohee</p>
                    <p className="recommend-count">sdcssss외 2명이...</p>
                  </div>
                </div>

                <div>
                  <p className="li-right">팔로우</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
