import React, { Component } from "react";
import Story from "./Story/Story";
import Feed from "./Feed/Feed";
import "./MainLeft.scss";

class MainLeft extends Component {
  returnLogin() {}
  render() {
    return (
      <div className="MainLeft_DC">
        <Story />
        <Feed />
      </div>
    );
  }
}

export default MainLeft;
