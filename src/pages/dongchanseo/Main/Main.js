import React, { Component } from "react";
import "./Main.scss";
import MainLeft from "./MainLeft/MainLeft";
import Nav from "./Nav";
import MainRight from "./MainRight";

class Main extends Component {
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

export default Main;
