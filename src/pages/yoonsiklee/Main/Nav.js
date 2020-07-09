import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  goToLogin() {
    this.props.history.push("/login-yoonsiklee");
  }

  render() {
    return (
      <nav class="nav">
        <div className="nav_container">
          <div className="logo_container">
            <img
              className="logo_image"
              src="/images/yoonsiklee/logo_text.png"
            />
          </div>
          <input type="search" placeholder="검색" className="search" />
          <div className="icon_container">
            <img className="icon" src="/images/yoonsiklee/heart.png" />
            <img className="icon" src="/images/yoonsiklee/explore.png" />
            <img
              className="icon"
              src="/images/yoonsiklee/profile.png"
              onClick={this.goToLogin.bind(this)}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
