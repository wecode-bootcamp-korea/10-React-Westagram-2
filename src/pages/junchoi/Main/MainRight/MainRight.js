import React, { Component } from 'react';
import './MainRight.scss';

class MainRight extends Component {
  render() {
    return(
      <div className="main-right">
        <div className="main-right-fixed">
          <div className="current-user">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68745795_414400975847569_3012539397703729152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IfkXLs7an6EAX-lceoS&oh=1a7bc2472e8de74a4c4657c6ee82b349&oe=5F215BC7"  alt="profile"/>
            <div className="id">
              der_andere_weg
            </div>
          </div>
          <div className="suggestions">
            <span className="left">회원님을 위한 추천</span>
            <span className="right">모두 보기</span>
          </div>
          <div className="suggestion-content">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/27880797_2056502641297709_753471893763260416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=K2nXEpRi9foAX_oinNm&oh=cf1e3330601b81c0ec9200d60559fedf&oe=5F21F32C" alt="profile"/> 
            <div className="text">
              <div className="id">
                gourmetbooks
              </div>
              <div className="info">
                회원님을 팔로우합니다.
              </div>
            </div>
            <div className="follow">
              팔로우
            </div>
          </div>
          <div className="suggestion-content">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/20635165_1942203892713915_5464937638928580608_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=CvL424BwKG4AX-P8qIw&oh=cff78171d2a5994e8a0022591ad609b1&oe=5F2214E4" alt="profile"/> 
            <div className="text">
              <div className="id">
                apple
              </div>
              <div className="info">
                yunjucat님 외 83명이 팔로우합니다
              </div>
            </div>
            <div className="follow">
              팔로우
            </div>
          </div>
          <div className="suggestion-content">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/11821744_765018380311633_530354327_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=6hKRnQXgsjAAX9FJFc1&oh=c65183b35b61cdb110f183cd6c6ccc26&oe=5F24D1B1" alt="profile"/> 
            <div className="text">
              <div className="id">
                rickygervais
              </div>
              <div className="info">
                회원님을 팔로우 합니다
              </div>
            </div>
            <div className="follow">
              팔로우
            </div>
          </div>
          <div className="suggestion-content">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/42392004_353815145360475_5897819885089587200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=xvBp15Yj6yoAX-P19Ca&oh=bf6cee574a85081efce7ba03f992ce2e&oe=5F2485D9" alt="profile"/> 
            <div className="text">
              <div className="id">
                _minjuu
              </div>
              <div className="info">
                smin2.2님 외 26명이 팔로우합니다
              </div>
            </div>
            <div className="follow">
              팔로우
            </div>
          </div>
          <div className="suggestion-content">
            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100967993_243400670251628_5829301537377091584_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Rwcspp2WXMgAX-J0qJg&oh=88bb2bc12be25917a18d97db944a06ff&oe=5F23FF83" alt="profile"/> 
            <div className="text">
              <div className="id">
                thecine.file
              </div>
              <div className="info">
                회원님을 팔로우합니다.
              </div>
            </div>
            <div className="follow">
              팔로우
            </div>
          </div>
          <div className="corporation">
            © 2020 INSTAGRAM FROM FACEBOOK
          </div>
        </div>
      </div>
    );
  }
}

export default MainRight;