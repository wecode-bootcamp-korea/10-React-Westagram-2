import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    buttonActive: false, 
    id: '', 
    pw: ''
  };

  onLoginFormSubmit = (event) => {
    event.preventDefault();
    const { id, pw } = this.state;
    const isValid = id.length !== 0 && pw.length !== 0; 

    if (isValid) this.props.history.push('/main-junchoi');
  }

  onInputsChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onInputBoxKeyUp = () => {
    const { id, pw } = this.state;
    const isValid = id.length !== 0 && pw.length !== 0; 

    this.setState({
      buttonActive: isValid ? true : false
    });
  }
  
  render() {
    return(
      <div className="Login_J">
        <div className="login-content">
        <img src="/images/junchoi/logo_text.png" alt="logo_text"/>
        <form className="login-input-box" 
          onKeyUp={this.onInputBoxKeyUp} 
          onSubmit={this.onLoginFormSubmit}
        >
          <input 
            className="id" 
            name="id"
            type="text" 
            placeholder="전화번호, 사용자 이름 또는 이메일" 
            value={this.state.id}
            onChange={this.onInputsChange}
          />
          <input 
            className="pw" 
            name="pw"
            type="password" 
            placeholder="비밀번호"
            value={this.state.pw}
            onChange={this.onInputsChange}
          />
          <button 
            className={this.state.buttonActive ? 'active' : ''} 
            type="submit"
          >
            로그인
          </button>
        </form>
        <div className="login-pw-check">
          비밀번호를 잊으셨나요?
        </div>
        </div>
      </div>
    );
  }
}

export default Login;