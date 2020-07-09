import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  onLoginButtonClick = () => {
    console.log(this.props.history);
    this.props.history.push('/main-junchoi');
  }

  render() {
    return(
      <div className="login-container">
        <div className="login-content">
        <img src="/images/junchoi/logo_text.png" alt="logo_text"/>
        <div className="login-input-box">
          <input className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input className="pw" type="password" placeholder="비밀번호"/>
          <button onClick={this.onLoginButtonClick} >로그인</button>
        </div>
        <div className="login-pw-check">
          비밀번호를 잊으셨나요?
        </div>
        </div>
      </div>
    );
  }
}

export default Login;