import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./Login.scss"


class HoLogin extends React.Component {
    goToSignup() {
        this.props.history.push('/main-hogeunoh');
      }

    render() {
        return (
            <div className="HoLogin">
                <div className="loginBox">
                    <div className="loginLog">
                        <img alt="인스타 로고" src="/images/hogeunoh/logo_text.png" />
                    </div>
                    <div className="loginInput">
                        <div>
                            <input className="loginId" type="text" placeholder=" 전화번호, 사용자 이름 또는 이메일" />
                        </div>
                        <div>
                            <input className="loginPw" type="password" placeholder=" 비밀번호" />
                        </div>
                        <div>
                            <button onClick={this.goToSignup.bind(this)} className="loginButton" type="button">로그인</button>
                        </div>
                    </div>
                    <div className="forgetPw">
                        <span>비밀번호를 잊으셨나요?</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HoLogin);