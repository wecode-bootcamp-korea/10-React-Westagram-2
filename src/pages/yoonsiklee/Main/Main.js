import React, { Component } from "react";
import Nav from "./Nav";
import Article from "./Article";
import Aside from "./Aside";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="main">
          <Article />
          <Aside />
        </div>
      </>
    );
  }
}

export default Main;
