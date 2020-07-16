import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import "./Button.scss";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mdValid, activeMD } = this.props;
    const component = (
      <div onClick={activeMD} className="Button">
        <MdAdd />
      </div>
    );

    return !mdValid ? component : <div></div>;
  }
}

export default Button;
