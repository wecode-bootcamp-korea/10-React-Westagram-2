import React, { Component } from "react";
import "./Aside.scss";
import Story from "../../Component/Story/Story";

class Aside extends Component {
  render() {
    return (
      <aside className="aside_LYS">
        <div className="main_right">
          <div className="sidebar_profile">
            <div className="sidebar_img_radius">
              <img src="/images/yoonsiklee/wecode.jpg" />
            </div>
            <div className="sidebar_profile_id_contaner">
              <a className="sidebar_profile_id" href="#">
                iyunsig50
              </a>
              <a className="sidebar_profile_name" href="#">
                이윤식
              </a>
            </div>
          </div>
          <div className="story">
            <div className="story_msg">스토리</div>
            <div className="view_all">
              <a href="#">모두 보기</a>
            </div>
          </div>
          <div className="follow">
            <Story
              img={"/images/yoonsiklee/wecode.jpg"}
              alt={"wecode"}
              name={"wecode"}
              follow={"회원님을 팔로우합니다"}
            />
            <Story
              img={"/images/yoonsiklee/wecode.jpg"}
              art={"wecode2"}
              name={"wecode2"}
              follow={"회원님을 팔로우합니다"}
            />
            <Story
              img={"/images/yoonsiklee/wecode.jpg"}
              art={"wecode3"}
              name={"wecode3"}
              follow={"회원님을 팔로우합니다"}
            />
            <Story
              img={"/images/yoonsiklee/wecode.jpg"}
              art={"wecode4"}
              name={"wecode4"}
              follow={"회원님을 팔로우합니다"}
            />
            <Story
              img={"/images/yoonsiklee/wecode.jpg"}
              art={"wecode5"}
              name={"wecode5"}
              follow={"회원님을 팔로우합니다"}
            />
          </div>

          <ul className="footer_site">
            <li className="footer_list">
              <a>소개&nbsp; '</a>
              <a>도움말&nbsp; '</a>
              <a>홍보센터&nbsp; '</a>
              <a>소개&nbsp; '</a>
              <a>API&nbsp; '</a>
              <a>채용 정보&nbsp; '</a>
              <a>개인정보처리방침&nbsp; '</a>
              <a>약관&nbsp; '</a>
              <a>위치&nbsp; '</a>
              <a>인기 계정&nbsp; '</a>
              <a>위시 태그&nbsp; '</a>
              <a>언어</a>
            </li>
          </ul>
          <a className="footer_text">© 2020 INSTAGRAM FROM FACEBOOK</a>
        </div>
      </aside>
    );
  }
}

export default Aside;
