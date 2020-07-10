import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer_KSY">
        <nav>
          <ul>
            <li>
              <Link to="/a"></Link>
              <span>소개</span>
            </li>
            <li>
              <Link to="/b"></Link>
              <span>도움말</span>
            </li>
            <li>
              <Link to="/c"></Link>
              <span>홍보 센터</span>
            </li>
            <li>
              <Link to="/d"></Link>
              <span>API</span>
            </li>
            <li>
              <Link to="/e"></Link>
              <span>채용 정보</span>
            </li>
            <li>
              <Link to="/f"></Link>
              <span>개인정보처리방침</span>
            </li>
            <li>
              <Link to="/g"></Link>
              <span>약관</span>
            </li>
            <li>
              <Link to="/h"></Link>
              <span>위치</span>
            </li>
            <li>
              <Link to="/i"></Link>
              <span>인기 계정</span>
            </li>
            <li>
              <Link to="/j"></Link>
              <span>해시태그</span>
            </li>
            <li>
              <Link to="/k"></Link>
              <span>언어</span>
            </li>
          </ul>
        </nav>
        <div>
          <span className="copyright">ⓒ 2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </footer>
    )
  }
}

export default Footer;