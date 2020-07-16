import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Component/Nav/Nav";
import "./login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      userpw: "",
    };
  }

  goToMain = () => {
    /* 백엔드 통신시
    fetch("url", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.userid,
        password: this.state.userpw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
        this.props.history.push("/main-yoonsiklee"");
      }); */
    this.props.history.push("/main-yoonsiklee");
  };

  IdInput = (e) => {
    this.setState({
      userid: e.target.value,
    });
  };

  PwInput = (e) => {
    this.setState({
      userpw: e.target.value,
    });
  };

  render() {
    const { userid, userpw } = this.state;
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
                onChange={this.IdInput}
              />
              <input
                type="password"
                className="login-pw"
                placeholder="비밀번호"
                onChange={this.PwInput}
              />
              <button
                onClick={this.goToMain}
                className={
                  userid.includes("@") && userpw.length >= 5
                    ? "button-Active"
                    : "button-Default"
                }
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
