import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = { email: "", pwd: "" };

  onChange = (e) => {
    let check = e.target.id;

    let data = {
      ...this.state,
      email: "asdfasdfdas",
    };

    if (check === "email") {
      data.email = e.target.value;
      console.log(this.state.email);
    } else if (check === "pwd") {
      data.pwd = e.target.value;
      console.log(data.pwd);
    }

    this.setState(data);
  };
  loginClick() {
    /* 작업 실시 */
    alert("로그인 되었습니다.");
    this.props.history.push("/main-dongchanseo");
  }
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
                onChange={this.onChange}
                value={this.state.key}
              />
              <input
                type="password"
                id="pwd"
                placeholder="비밀번호"
                onChange={this.onChange}
                value={this.state.pwd}
              />
              <button
                style={{
                  backgroundColor:
                    this.state.email !== "" && this.state.pwd !== ""
                      ? "red"
                      : "blue",
                }}
              >
                로그인
              </button>
            </div>
            <div className="container-footer">
              <p>{this.state.pwd}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
