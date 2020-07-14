import React from "react";
import "./Stories.scss";
import { FaObjectUngroup } from "react-icons/fa";

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        {
          id: "fatou",
          img: {
            imgSrc: "/images/shinyeongkim/avatar1.jpg",
            imgAlt: "fatou의 프로필사진",
          },
        },
        {
          id: "ibrahima",
          img: {
            imgSrc: "/images/shinyeongkim/avatar2.jpg",
            imgAlt: "ibrahima의 프로필사진",
          },
        },
        {
          id: "lemondefr",
          img: {
            imgSrc: "http://bitly.kr/cR60O74QHzq",
            imgAlt: "lemondefr의 프로필사진",
          },
        },
        {
          id: "ted",
          img: {
            imgSrc: "http://bitly.kr/kxJAIN3q67L",
            imgAlt: "ted의 프로필사진",
          },
        },
        {
          id: "henryl89",
          img: {
            imgSrc: "http://bitly.kr/FzgjjhkFbdq",
            imgAlt: "henryl89의 프로필사진",
          },
        },
        {
          id: "yoonjujang",
          img: {
            imgSrc: "http://bitly.kr/mipSBb1FDwa",
            imgAlt: "yoonjujang의 프로필사진",
          },
        },
        {
          id: "konbini",
          img: {
            imgSrc: "http://bitly.kr/AmfY3xpxuEG",
            imgAlt: "konbini의 프로필사진",
          },
        },
        {
          id: "franciscoblancophotos",
          img: {
            imgSrc: "http://bitly.kr/I8GSoKwKHWh",
            imgAlt: "franciscoblancophotos의 프로필사진",
          },
        },
        {
          id: "jung.sia",
          img: {
            imgSrc: "http://bitly.kr/yHowiSjCQxf",
            imgAlt: "jung.sia의 프로필사진",
          },
        },
        {
          id: "tyleroninsta",
          img: {
            imgSrc: "http://bitly.kr/5Sl7CwYI0W5",
            imgAlt: "tyleroninsta의 프로필사진",
          },
        },
        {
          id: "bbclearningenglish",
          img: {
            imgSrc: "http://bitly.kr/t8dFXp7Gunj",
            imgAlt: "bbclearningenglish의 프로필사진",
          },
        },
      ],
    };
  }

  render() {
    return (
      <div className="Stories_KSY">
        <ul className="list">
          {this.state.contents.map((content) => (
            <li className="story">
              <div className="mark">
                <div className="line">
                  <img
                    alt={content.img.imgAlt}
                    className="user__img"
                    src={content.img.imgSrc}
                  />
                </div>
              </div>
              <span className="user__id">
                {content.id.length > 10
                  ? `${content.id.slice(0, 9)}...`
                  : content.id}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Stories;
