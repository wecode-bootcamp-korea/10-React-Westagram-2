import React from "react";
import "./nav.scss"

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <div className="headerBox">
                    <div className="logoBox">
                        <img className="logoImg" alt="logo" src="/images/hogeunoh/logo_text.png"/>
                    </div>
                    <div className="searchBox">
                        <img className="searchImg" src="/images/hogeunoh/search.png"/>
                        <input className="search" type="text" placeholder="검색"/>
                    </div>
                    <div className="navIconBox">
                        <svg aria-label="홈" className="icon" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                            <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z">
                            </path>
                        </svg>
                        <svg aria-label="Direct" className="icon" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                            </path>
                        </svg>
                        <img className="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                        <img className="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                        <img className="icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;