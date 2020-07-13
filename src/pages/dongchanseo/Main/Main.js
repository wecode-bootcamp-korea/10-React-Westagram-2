import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Nav/Nav";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    /* 기능 테스트 필요로 인해 잠시 주석 처리
    if (sessionStorage.getItem("id") === "") {
      alert("로그인부터 하시오.");
      this.props.history.push("/login-dongchanseo");
    } else {
      this.state = {
        id: sessionStorage.getItem("id"),
      };
    }
    */
  }

  render() {
    return (
      <>
        <Nav />
        <div className="Main_DC">
          <div className="div-center">
            <MainLeft />
            <MainRight />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Main);
