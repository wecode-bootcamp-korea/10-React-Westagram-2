import React from 'react';
import './Feeds.scss';

class Feeds extends React.Component {
  render() {
    return (
      <div className="Feeds_KSY">
        <article className="feed">
          <header className="header">
            <div className="user">
              <img
                alt="user avater"
                className="user__img"
                src="http://bitly.kr/fDGTTLcd6pM"
              />
              <span className="user__id">
                s_shin.a
              </span>
            </div>
            <div className="icon">
              <img
                alt="three dots"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </header>
          <main className="main">
            <img
              alt="업로드 이미지 France anecy nature person"
              src="http://bitly.kr/VyxCUGQS3d0"
            />
            <div className="text-box">
              <div className="interaction">
                <div className="interaction-right">
                  <svg aria-label="좋아요" viewBox="0 0 48 48">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                  <svg aria-label="댓글 달기" viewBox="0 0 48 48">
                    <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path>
                  </svg>
                  <svg aria-label="게시물 공유" viewBox="0 0 48 48">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div className="interaction-left">
                  <svg aria-label="저장" viewBox="0 0 48 48">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </div>
              <div className="like-preview">
                <img
                  alt="friend avatar girls"
                  src="http://bitly.kr/uacyfcqBYr"
                />
                <span className="about__like-user"> <span className="user__id">goodday</span>님 외 10명이 좋아합니다</span>
              </div>
              <div className="text-preview">
                <span className="user__id login-user">
                  s_shin.a
                </span>
                <span className="contents">안시는 사랑입니다</span>
              </div>
              <div>
                <ul>
                  <li className="comment">
                    <div className="texts">
                      <span className="user__id">neceosecius</span>
                      <span className="contents">안시는 찐사랑입니다~~</span>
                    </div>
                    <div className="heart-btn">
                      <i className="far fa-heart"></i>
                    </div>
                  </li>
                </ul>
                <span className="time">43분 전</span>
              </div>
            </div>
          </main>
          <footer className="comment-writing">
            <form>
              <input className="writing__input" type="text" placeholder="댓글 달기..." />
              <button className="writing__btn">게시</button>
            </form>
          </footer>
        </article>
        <article className="feed">
          <header className="header">
            <div className="user">
              <img
                alt="user avater"
                className="user__img"
                src='/images/shinyeongkim/user.jpg'
              />
              <span className="user__id">
                aida_shin.y
              </span>
            </div>
            <div className="icon">
              <img
                alt="three dots"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </header>
          <main className="main">
            <img
              alt="업로드이미지 Barcelona dog"
              className="main__img"
              src='/images/shinyeongkim/feed-img.jpg'
            />
            <div className="text-box">
              <div className="interaction">
                <div>
                  <svg aria-label="좋아요" viewBox="0 0 48 48">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                  <svg aria-label="댓글 달기" viewBox="0 0 48 48">
                    <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path>
                  </svg>
                  <svg aria-label="게시물 공유" viewBox="0 0 48 48">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div>
                  <svg aria-label="저장" viewBox="0 0 48 48">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </div>
              <div className="like-preview">
                <span className="about__like-user">70명이 좋아합니다</span>
              </div>
              <div className="text-preview">
                <span className="user__id login-user">
                  aida_shin.y
                </span>
                <span className="contents">힙한 강아지🕶</span>
              </div>
              <div>
                <ul className="comments__display">
                </ul>
                <span className="time">43분 전</span>
              </div>
            </div>
          </main>
          <footer className="comment-writing">
            <form>
              <input className="writing__input" type="text" placeholder="댓글 달기..." />
              <button className="writing__btn">게시</button>
            </form>
          </footer>
        </article>
        <article className="feed">
          <header className="header">
            <div className="user">
              <img
                alt="user avater"
                className="user__img"
                src="http://bitly.kr/YAmPt11WRso"
              />
              <span className="user__id">
                food_photos
              </span>
            </div>
            <div className="icon">
              <img
                alt="three dots"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </header>
          <main className="main">
            <img
              alt="France anecy nature person"
              className="main__img"
              src='/images/shinyeongkim/feed-img2.jpg'
            />
            <div className="text-box">
              <div className="interaction">
                <div className="interaction-right">
                  <svg aria-label="좋아요" viewBox="0 0 48 48">
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                  <svg aria-label="댓글 달기" viewBox="0 0 48 48">
                    <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path>
                  </svg>
                  <svg aria-label="게시물 공유" viewBox="0 0 48 48">
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </div>
                <div className="interaction-left">
                  <svg aria-label="저장" viewBox="0 0 48 48">
                    <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                  </svg>
                </div>
              </div>
              <div className="like-preview">
                <span className="about__like-user">205명이 좋아합니다</span>
              </div>
              <div className="text-preview">
                <span className="user__id login-user">
                  food_photos
                </span>
                <span className="contents"> 유명한 바르셀로나 해산물 맛집! </span>
              </div>
              <div>
                <ul className="comments__display">
                  <li className="comment">
                    <div className="texts">
                      <span className="user__id">eric</span>
                      <span className="contents">awesome!</span>
                    </div>
                    <div className="heart-btn">
                      <i className="far fa-heart"></i>
                    </div>
                  </li>
                </ul>
                <span className="time">43분 전</span>
              </div>
            </div>
          </main>
          <footer className="comment-writing">
            <form>
              <input className="writing__input" type="text" placeholder="댓글 달기..." />
              <button className="writing__btn">게시</button>
            </form>
          </footer>
        </article>
      </div>  
    )
  }
}

export default Feeds;