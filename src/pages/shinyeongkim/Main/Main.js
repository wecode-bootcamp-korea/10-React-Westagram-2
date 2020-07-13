import React from "react";
import Nav from "./Nav/Nav";
import Feed from "./Feed/Feed";
import Stories from "./Stories/Stories";
import MainRight from "./MainRight/MainRight";
import SearchDropDown from "./SearchDropDown/SearchDropDown";
import "./Main.scss";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsContents: [
        {
          userId: "s_shin.a",
          userImg: {
            imgSrc: "http://bitly.kr/fDGTTLcd6pM",
            imgAlt: "user avater",
          },
          feedImg: {
            imgSrc: "http://bitly.kr/VyxCUGQS3d0",
            imgAlt: "업로드 이미지",
          },
          feedText: "안시는 사랑입니다:)",
          likeUser: {
            imgSrc: "http://bitly.kr/uacyfcqBYr",
            imgAlt: "Friend Avatar",
            userId: "goodday",
          },
          commentedTexts: {
            userId: "neceosecius",
            text: "안시는 찐사랑 입니다~~",
          },
        },
        {
          userId: "aida_shin.y",
          userImg: {
            imgSrc: "/images/shinyeongkim/user.jpg",
            imgAlt: "user avater",
          },
          feedImg: {
            imgSrc: "/images/shinyeongkim/feed-img.jpg",
            imgAlt: "업로드 이미지",
          },
          feedText: "힙한 강아지🕶",
          likeUser: {
            imgSrc: "/images/shinyeongkim/avatar1.jpg",
            imgAlt: "Friend Avatar",
            userId: "fatou",
          },
          commentedTexts: {
            userId: "fatou",
            text: "C'est minon!",
          },
        },
        {
          userId: "food_photos",
          userImg: {
            imgSrc: "http://bitly.kr/YAmPt11WRso",
            imgAlt: "user avater",
          },
          feedImg: {
            imgSrc: "/images/shinyeongkim/feed-img2.jpg",
            imgAlt: "업로드 이미지",
          },
          feedText: "바르셀로나 해산물 맛집!",
          likeUser: {
            imgSrc: "/images/shinyeongkim/avatar1.jpg",
            imgAlt: "Friend Avatar",
            userId: "fatou",
          },
          commentedTexts: {
            userId: "james88",
            text: "awesome!",
          },
        },
      ],
    };
  }

  render() {
    return (
      <div className="Main_KSY">
        <Nav />
        <SearchDropDown />
        <main className="main-box">
          <div className="left">
            <Stories />
            {this.state.feedsContents.map((content) => {
              return <Feed content={content} />;
            })}
          </div>
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
