import React from "react";
import { withRouter, Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Phones from "./Phones/Phones";
import Footer from "./Footer/Footer";
import "./Login.scss";
import "./LoginReset.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "bonbon0202@gmail.com",
      pw: "12345",
      userid: "",
      userpw: "",
      incorrectId: false,
      incorrectPw: false,
    };
  }

  handleLogin = (e) => {
    if (
      this.state.id === this.state.userid &&
      this.state.pw === this.state.userpw
    ) {
      this.props.history.push("/main-shinyeongkim");
      this.setState({ incorrectId: false, incorrectPw: false });
    } else if (
      this.state.id !== this.state.userid &&
      this.state.pw === this.state.userpw
    ) {
      this.setState({ incorrectId: true, incorrectPw: false });
    } else if (
      this.state.id === this.state.userid &&
      this.state.pw !== this.state.userpw
    ) {
      this.setState({ incorrectId: false, incorrectPw: true });
    }
  };

  handleInput = (e) => {
    e.target.className === "id"
      ? this.setState({ userid: e.target.value })
      : this.setState({ userpw: e.target.value });
    if (e.keyCode === 13) {
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className="Login_KSY">
        <main className="login__main">
          <Phones />
          <div className="content">
            <section className="sign-in content-box">
              <header className="insta-logo">
                <img
                  src="/images/shinyeongkim/logo_text.png"
                  alt="instagram logo"
                />
              </header>
              <div className="login-box">
                <input
                  type="email"
                  className="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onKeyUp={this.handleInput}
                />
                <input
                  type="password"
                  className="pw"
                  placeholder="비밀번호"
                  onKeyUp={this.handleInput}
                />
                <button
                  type="submit"
                  onClick={this.handleLogin}
                  className={
                    this.state.userid.includes("@") &&
                    this.state.userpw.length >= 5
                      ? "activatedBtn"
                      : "unActivatedBtn"
                  }
                >
                  로그인
                </button>
              </div>
              <div className="or">
                <div className="line"></div>
                <span className="Text"> 또는 </span>
                <div className="line"></div>
              </div>
              <div className="facebookLogIn">
                <i className="fab fa-facebook-square"></i>
                <span>Facebook으로 로그인</span>
              </div>
              <div
                className={
                  this.state.incorrectId
                    ? "incorrect-visible"
                    : "incorrect-invisible"
                }
              >
                잘못된 아이디입니다. 다시 확인하세요.
              </div>
              <div
                className={
                  this.state.incorrectPw
                    ? "incorrect-visible"
                    : "incorrect-invisible"
                }
              >
                잘못된 비밀번호 입니다. 다시 확인하세요.
              </div>
              <Link to="/forgetPw" className="forgot-box">
                비밀번호를 잊으셨나요?
              </Link>
            </section>
            <section className="sign-up content-box">
              <span className="text">계정이 없으신가요?</span>
              <Link to="/SignUp" className="link">
                가입하기
              </Link>
            </section>
            <section className="downloads">
              <div>앱을 다운로드하세요.</div>
              <div className="link-box">
                <div className="appStore link">
                  <FaApple size={30} />
                  <span>
                    AppStore에서
                    <br />
                    다운로드 하기
                  </span>
                </div>
                <div className="googlePlay link">
                  <FaGooglePlay size={28} color="#00D4FF" />
                  <div>
                    <span className="text-top">다운로드하기</span>
                    <span className="text-bottom">Google Play</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
