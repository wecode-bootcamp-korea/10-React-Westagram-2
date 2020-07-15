import React, { Component } from "react";
import "./Recommend.scss";
class Recommend extends Component {
  render() {
    return (
      <div className="Recommend">
        <div className="nav">
          <p className="nav-p1">회원님을 위한 추천</p>
          <p className="nav-p2">모두보기</p>
        </div>
        <div className="recommend-row">
          <ul>
            <li>
              <div className="li-left">
                <div className="profile">
                  <img src="/images/dongchanseo/wecode_hansohee.jpg" />
                </div>
                <div>
                  <p className="id">sohee</p>
                  <p className="count">xohheee외 2명이...</p>
                </div>
              </div>

              <div>
                <p className="li-right">팔로우</p>
              </div>
            </li>
            <li>
              <div className="li-left">
                <div className="profile">
                  <img src="/images/dongchanseo/hansohee.png" />
                </div>
                <div>
                  <p className="id">sohee</p>
                  <p className="count">sdc337dc외 2명이...</p>
                </div>
              </div>

              <div>
                <p className="li-right">팔로우</p>
              </div>
            </li>
            <li>
              <div className="li-left">
                <div className="profile">
                  <img src="/images/dongchanseo/wecode_hansohee.jpg" />
                </div>
                <div>
                  <p className="id">sohee</p>
                  <p className="count">sdcssss외 2명이...</p>
                </div>
              </div>

              <div>
                <p className="li-right">팔로우</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Recommend;
