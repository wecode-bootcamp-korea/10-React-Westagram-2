import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import "./Phones.scss";

class Phones extends React.Component {
  render() {
    return (
      <div className="Phones_KSY">
        <div className="phones__box">
          <div className="black-phone">
            <header className="phone__header">
              <div className="header__camera">
                <div className="small-dot"></div>
              </div>
              <div className="header__speaker"></div>
            </header>
            <div className="phone__screen">
              <header className="screen-header">
                <div className="alert"></div>
                <div className="search">
                  <FiSearch />
                  <input type="text" placeholder="Search" />
                </div>
              </header>
              <div className="screen__main">
                <img alt="main__bg-img" src="/images/shinyeongkim/img1.jpg" />
                <img alt="main__bg-img" src="/images/shinyeongkim/img2.jpg" />
              </div>
              <nav>
                <ul className="list">
                  <li>
                    <AiFillHome size="18" />
                  </li>
                  <li>
                    <FiSearch size="18" />
                  </li>
                  <li>
                    <FaCamera size="18" />
                  </li>
                  <li>
                    <FaHeart size="18" />
                  </li>
                  <li>
                    <FaRegUser size="18" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="white-phone">
            <div className="phone">
              <header className="phone__header">
                <div className="column">
                  <div className="header-dot"></div>
                </div>
                <div className="column bottom">
                  <div className="header__speaker">
                    <div className="header__camera"></div>
                  </div>
                </div>
              </header>
              <div className="phone__screen-box">
                <div className="phone__screen">
                  <div className="screen-header">
                    <span>Cancel</span>
                  </div>
                  <div className="screen__main">
                    <div className="img-box">
                      <FiRefreshCw />
                      <AiFillThunderbolt />
                    </div>
                    <div className="button-box">
                      <div className="camera-btn"></div>
                    </div>
                  </div>
                  <nav>
                    <ul className="list">
                      <li className="item">Library</li>
                      <li className="camera">Camera</li>
                      <li className="item">Video</li>
                    </ul>
                  </nav>
                </div>
              </div>
              <footer className="btn-box">
                <div className="btn"></div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Phones;
