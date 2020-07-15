import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Nav/Nav";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);

    // if (!sessionStorage.getItem("tokken")) {
    //   alert("로그인부터 하시오.");
    //   this.props.history.push("/login-dongchanseo");
    // }
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
