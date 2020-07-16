import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./Login.scss"


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            id:'',
            pw:''
        }
    }

    id = (e) => {
        this.setState({ id: e.target.value})
    }

    pw = (e) => {
        this.setState({ pw: e.target.value })
    }

    goToMain = () => {
        /* let id = this.state.id 
        let pw = this.state.pw
        if (id.includes('@') && pw.length >= 5) {
            alert('성공')  
            this.props.history.push('/main-hogeunoh');
            return;
        } else {
            alert('잘못 입력했습니다')
        } */
        fetch("http://10.58.4.159:8000/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: this.state.id,
                password: this.state.pw,
                }),
            })
        .then(res => res.json())
        .then(res => console.log(res))
    };

    render() {
        return (
            <div className="Login_ho">
                <div className="loginBox">
                    <div className="loginLog">
                        <img alt="인스타 로고" src="/images/hogeunoh/logo_text.png" />
                    </div>
                    <div className="loginInput">
                        <div>
                            <input className="loginId" type="text" placeholder=" 전화번호, 사용자 이름 또는 이메일" onChange={this.id}/>
                        </div>
                        <div>
                            <input className="loginPw" type="password" placeholder=" 비밀번호" onChange={this.pw} />
                        </div>
                        <div>
                            <button 
                                onClick={this.goToMain.bind(this)} 
                                className={this.state.id && this.state.pw ? "loginButton blue":"loginButton skyblue"}
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