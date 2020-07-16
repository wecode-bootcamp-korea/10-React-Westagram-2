import React from "react";
import "./mainRight.scss"

class MainRight extends React.Component {
    render() {
        return (
            <div className="mainRight_ho">
                <div className="RightBoxIn">
                    <div className="mypageBox">
                        <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                        <div className="mypageNameBox">
                            <span className="name">o ho geun</span>
                            <span>호근</span>
                        </div>
                    </div>
                    <div className="myRecommendBox">
                        <span className="recommend">회원님을 위한 추천</span>
                        <span className="allview">모두 보기</span>
                    </div>
                    <div className="userRecommendBox">
                        <div className="user">
                            <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                            <div className="mypageNameBox">
                                <span className="name">geun</span>
                                <span>회원님을 팔로우합니다.</span>
                            </div>
                            <span className="follow">팔로우</span>
                        </div>
                        <div className="user">
                            <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                            <div className="mypageNameBox">
                                <span className="name">geun</span>
                                <span>회원님을 팔로우합니다.</span>
                            </div>
                            <span className="follow">팔로우</span>
                        </div>
                        <div className="user">
                            <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                            <div className="mypageNameBox">
                                <span className="name">geun</span>
                                <span>회원님을 팔로우합니다.</span>
                            </div>
                            <span className="follow">팔로우</span>
                        </div>
                        <div className="user">
                            <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                            <div className="mypageNameBox">
                                <span className="name">geun</span>
                                <span>회원님을 팔로우합니다.</span>
                            </div>
                            <span className="follow">팔로우</span>
                        </div>
                        <div className="user">
                            <img alt="profile" src="/images/hogeunoh/다운로드.jpg" />
                            <div className="mypageNameBox">
                                <span className="name">geun</span>
                                <span>회원님을 팔로우합니다.</span>
                            </div>
                            <span className="follow">팔로우</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainRight;