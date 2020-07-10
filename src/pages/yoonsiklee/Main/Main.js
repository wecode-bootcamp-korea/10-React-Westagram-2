import React, { Component } from "react";
import Nav from "./Nav";
import Article from "./Article";
import Aside from "./Aside";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main_LYS">
        <Nav />
        <div className="main">
          <Article />
          <Aside />
        </div>
      </div>
    );
  }
}

export default Main;
