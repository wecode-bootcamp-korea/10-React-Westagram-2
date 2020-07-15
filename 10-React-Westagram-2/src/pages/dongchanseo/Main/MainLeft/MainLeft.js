import React, { Component } from "react";
import Story from "./Story/Story";
import Feed from "./Feed/Feed";
import Button from "./Button";
import "./MainLeft.scss";

class MainLeft extends Component {
  state = [
    { id: 1, email: "sdc337dc" },
    { id: 2, email: "mongu" },
  ];
  render() {
    const list = this.state.map((data) => (
      <Feed key={data.id} id={data.email} />
    ));
    return (
      <div className="MainLeft_DC">
        <Story />
        {list}
        <Button />
      </div>
    );
  }
}

export default MainLeft;
