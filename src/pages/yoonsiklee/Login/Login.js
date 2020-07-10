import React, { Component } from "react";
import Nav from "../Main/Nav";
import "./login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  goToMain() {
    this.props.history.push("/main-yoonsiklee");
  }

  render() {
    return (
      <div className="Login_LYS">
        <Nav />
        <div className="Login">
          <div className="container">
            <header className="logo-container">
              <img src="/images/yoonsiklee/logo_text.png" className="logo" />
            </header>
            <section className="login-container">
              <input
                type="text"
                className="login-id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                type="password"
                className="login-pw"
                placeholder="비밀번호"
              />
              <button
                className="login-button"
                onClick={this.goToMain.bind(this)}
              >
                로그인
              </button>
              <p className="forgot-pw">비밀번호를 잊으셨나요?</p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
