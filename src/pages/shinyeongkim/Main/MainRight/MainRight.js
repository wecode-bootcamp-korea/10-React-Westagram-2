import React from "react";
import { Link } from "react-router-dom";
import "./MainRight.scss";

class MainRight extends React.Component {
  render() {
    return (
      <aside className="MainRight_KSY">
        <div className="box">
          <div className="user-information">
            <img
              alt="user__img"
              className="user__img"
              src="/images/shinyeongkim/user.jpg"
            />
            <div className="user__info">
              <span className="user__id my-id">aida_shin.y</span>
              <span className="user__name">Shinyeong Kim</span>
            </div>
          </div>
          <section className="recommends">
            <header className="header">
              <span className="title">회원님을 위한 추천</span>
              <span className="viewAll">모두 보기</span>
            </header>
            <div>
              <ul className="user__list">
                <li>
                  <div className="user">
                    <img
                      alt="drawing님의 프로필사진"
                      className="user__img"
                      src="http://bitly.kr/NtLXhjjlfL"
                    />
                    <div className="user__about">
                      <span className="user__id">drawing</span>
                      <span className="state">회원님을 팔로우합니다</span>
                    </div>
                  </div>
                  <span className="follow">팔로우</span>
                </li>
                <li>
                  <div className="user">
                    <img
                      alt="music-mylife님의 프로필사진"
                      src="http://bitly.kr/ef0iaaCcb87"
                    />
                    <div className="user__about">
                      <span className="user__id">music-mylife</span>
                      <span className="state">instagram 신규가입</span>
                    </div>
                  </div>
                  <span className="follow">팔로우</span>
                </li>
                <li>
                  <div className="user">
                    <img
                      alt="drawing님의 프로필사진"
                      src="http://bitly.kr/CSDfv7zDx5D"
                    />
                    <div className="user__about">
                      <span className="user__id">with-you</span>
                      <span className="state">회원님을 팔로우합니다</span>
                    </div>
                  </div>
                  <span className="follow">팔로우</span>
                </li>
                <li>
                  <div className="user">
                    <img
                      alt="moonlight님의 프로필사진"
                      src="http://bitly.kr/0fwQPDU0ilx"
                    />
                    <div className="user__about">
                      <span className="user__id">moonlight</span>
                      <span className="state">회원님을 팔로우합니다</span>
                    </div>
                  </div>
                  <span className="follow">팔로우</span>
                </li>
                <li>
                  <div className="user">
                    <img
                      alt="drawing님의 프로필사진"
                      src="http://bitly.kr/txnnVPoYz5E"
                    />
                    <div className="user__about">
                      <span className="user__id">jenny</span>
                      <span className="state">회원님을 팔로우합니다</span>
                    </div>
                  </div>
                  <span className="follow">팔로우</span>
                </li>
              </ul>
            </div>
          </section>
          <footer className="footer">
            <div>
              <ul>
                <li>
                  <Link to="/a">소개</Link>
                </li>
                <li>
                  <Link to="/b">도움말</Link>
                </li>
                <li>
                  <Link to="/c">홍보 센터</Link>
                </li>
                <li>
                  <Link to="/d">API</Link>
                </li>
                <li>
                  <Link to="/e">채용 정보</Link>
                </li>
                <li>
                  <Link to="/f">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="/g">약관</Link>
                </li>
                <li>
                  <Link to="/h">위치</Link>
                </li>
                <li>
                  <Link to="/i">인기 계정</Link>
                </li>
                <li>
                  <Link to="/j">해시태그</Link>
                </li>
                <li>
                  <Link to="/k">언어</Link>
                </li>
              </ul>
            </div>
            <span className="copyright">ⓒ 2020 INSTAGRAM FROM FACEBOOK</span>
          </footer>
        </div>
      </aside>
    );
  }
}

export default MainRight;
