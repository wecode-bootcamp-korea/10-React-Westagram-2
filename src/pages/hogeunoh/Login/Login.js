import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./Login.scss"


class Login extends React.Component {
    state = {
        id:'',
        pw:''
    }

    id = (e) => {
        this.setState({ id: e.target.value})
    }

    pw = (e) => {
        this.setState({ pw: e.target.value })
    }

    goToMain() {
        let id = this.state.id 
        let pw = this.state.pw
        if (id && pw) {
            alert('성공')
            this.props.history.push('/main-hogeunoh');
            return;
        } else if (id) {
            alert('비밀번호 입력해주세요')
            return;
        } else if (pw) {
            alert('아이디 입력해주세요')
            return;
        } else {
            alert('입력해주세요')
        }
      }

    render() {
        return (
            <div className="login_ho">
                <div className="loginBox">
                    <div className="loginLog">
                        <img alt="인스타 로고" src="/images/hogeunoh/logo_text.png" />
                    </div>
                    <div className="loginInput">
                        <div>
                            <input className="loginId" type="text" placeholder=" 전화번호, 사용자 이름 또는 이메일" value={this.state.id} onChange={this.id}/>
                        </div>
                        <div>
                            <input className="loginPw" type="password" placeholder=" 비밀번호" value={this.state.pw} onChange={this.pw} />
                        </div>
                        <div>
                            <button 
                                style={{backgroundColor: this.state.id && this.state.pw ? "blue":"#B2DFFC"}} 
                                onClick={this.goToMain.bind(this)} 
                                className="loginButton" 
                                type="button">
                                    로그인
                            </button>
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

export default withRouter(Login);