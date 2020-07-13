import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  state = {
    email: "",
    pwd: "",
  };

  handleInput = (e) => {
    const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
    if (pattern_kor.test(e.target.value)) {
      alert("한글을 입력하셨습니다.");
      this.setState({
        ...this.state,
      });
      return;
    }

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

  handleloginClick = () => {
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
            <div className="container-center">
              <input
                id="email"
                placeholder="이메일을 입력하시오"
                onChange={this.handleInput}
                value={this.state.email}
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
                onClick={this.handleloginClick}
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
