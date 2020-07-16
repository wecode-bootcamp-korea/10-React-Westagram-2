import React, { Component } from "react";
import Story from "./Story/Story";
import Feed from "./Feed/Feed";
import Button from "./Button";
import "./MainLeft.scss";

class MainLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, email: "sdc337dc" },
        { id: 2, email: "mongu" },
      ],
    };
  }

  render() {
    const list = this.state.list.map((data) => (
      <Feed key={data.id} id={data.email} />
    ));
    const { activeMD, mdValid } = this.props;
    return (
      <div className="MainLeft_DC">
        <Story />
        {list}
        <Button activeMD={activeMD} mdValid={mdValid} />
      </div>
    );
  }
}

export default MainLeft;
