import React, { Component } from "react";
import Nav from "../Component/Nav/Nav";
import Article from "./Article/Article";
import Aside from "./Aside/Aside";
import "./Main.scss";

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
