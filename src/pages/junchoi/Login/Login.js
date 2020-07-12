import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    buttonActive: false, 
    idValue: '', 
    pwValue: ''
  };

  onLoginButtonClick = () => {
    const { idValue, pwValue } = this.state;
    const isValid = idValue.length !== 0 && pwValue.length !== 0; 

    if (isValid) this.props.history.push('/main-junchoi');
  }

  onIdChange = (event) => {
    this.setState({ idValue: event.target.value });
  }

  onPwChange = (event) => {
    this.setState({ pwValue: event.target.value });
  }

  onInputBoxKeyUp = () => {
    const { idValue, pwValue } = this.state;
    const isValid = idValue.length !== 0 && pwValue.length !== 0; 

    isValid 
      ? this.setState({ buttonActive: true }) 
      : this.setState({ buttonActive: false }); 
  }
  
  render() {
    return(
      <div className="Login_J">
        <div className="login-content">
        <img src="/images/junchoi/logo_text.png" alt="logo_text"/>
        <div className="login-input-box" onKeyUp={this.onInputBoxKeyUp}>
          <input 
            className="id" 
            type="text" 
            placeholder="전화번호, 사용자 이름 또는 이메일" 
            value={this.state.idValue}
            onChange={this.onIdChange}
          />
          <input 
            className="pw" 
            type="password" 
            placeholder="비밀번호"
            value={this.state.pwValue}
            onChange={this.onPwChange}
          />
          <button 
            className={this.state.buttonActive ? 'active' : ''} 
            onnClick={this.onLoginButtonClick} 
          >
            로그인
          </button>
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