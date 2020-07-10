import React from 'react';
import './Phones.scss';

class Phones extends React.Component {
  render() {
    return (
      <div className="Phones_KSY">
        <div className="phones__box">
          <div className="black-phone">
            <header className="phone__header">
              <div className="header__camera">
                <div className="camera__small-dot"></div>
              </div>
              <div className="header__speaker"></div>
            </header>
            <div className="phone__screen">
              <header className="screen__header">
                <div className="header__alert"></div>
                <div className="header__search">
                  <i className="fas fa-search"></i>
                  <input type="text" placeholder="Search" />
                </div>
              </header>
              <div className="screen__main">
                <img alt="main__bg-img" className="main__bg-img" src="/images/shinyeongkim/img1.jpg" />
                <img alt="main__bg-img" className="main__bg-img" src="/images/shinyeongkim/img2.jpg" />
              </div>
              <div className="screen__nav">
                <ul className="screen__nav-list">
                  <li className="nav-list__item">
                    <i className="fas fa-home"></i>
                  </li>
                  <li className="nav-list__item">
                    <i className="fas fa-search"></i>
                  </li>
                  <li className="nav-list__item">
                    <i className="fas fa-camera"></i>
                  </li>
                  <li className="nav-list__item">
                    <i className="far fa-heart"></i>
                  </li>
                  <li className="nav-list__item">
                    <i className="fas fa-user"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="white-phone">
            <div className="phone">
              <header className="phone__header">
                <div className="phone__header-column">
                  <div className="header-dot"></div>
                </div>
                <div className="phone__header-column bottom">
                  <div className="header__speaker">
                    <div className="header__camera"></div>
                  </div>
                </div>
              </header>
              <div className="phone__screen-box">
                <div className="phone__screen">
                  <div className="screen__header">
                    <span className="header__text">Cancel</span>
                  </div>
                  <div className="screen__main">
                    <div className="main__img">
                      <i className="fas fa-redo"></i>
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div className="main__button">
                      <div className="button__camera"></div>
                    </div>
                  </div>
                  <nav className="screen__nav">
                    <ul className="screen__nav-list">
                      <li className="nav-item">Library</li>
                      <li className="nav-item camera">Camera</li>
                      <li className="nav-item">Video</li>
                    </ul>
                  </nav>
                </div>
              </div>
              <footer className="phone__home-btn">
                <div className="home-btn"></div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Phones;