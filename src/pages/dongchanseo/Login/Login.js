import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  state = {
    email: "",
    pwd: "",
  };

  handleInput = (e) => {
    /* 
      콜백함수로 기능 수정 할 것
      - isActive 추가
      - 콜백으로 즉각 반응.. 공부 필요
    */
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  handleCheckBtnActive = () => {
    // className으로 함수 이벤트 실행 가능
    if (this.state.email.indexOf("@") !== -1 && this.state.pwd.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  loginClick = () => {
    /*
      비동기 통신 작업 구간
    */
    alert("로그인 되었습니다.");

    sessionStorage.setItem("id", this.state.email);

    this.props.history.push("/main-dongchanseo");
  };

  render() {
    return (
      <>
        <div className="Login_DC">
          <div className="container">
            <div className="container-top">
              <img src="/images/dongchanseo/logo_text.png" />
            </div>
            <div>{this.state.key}</div>
            <div className="container-center">
              <input
                id="email"
                placeholder="이메일을 입력하시오"
                onChange={this.handleInput}
                value={this.state.key}
              />
              <input
                type="password"
                id="pwd"
                placeholder="비밀번호"
                onChange={this.handleInput}
                value={this.state.pwd}
              />
              <button
                className={
                  this.handleCheckBtnActive()
                    ? "button-active"
                    : "button-nonactive"
                }
              >
                로그인
              </button>
            </div>
            <div className="container-footer">
              <p>instagram</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
