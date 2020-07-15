import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import "./Button.scss";

class Button extends Component {
  render() {
    return (
      <>
        <div className="Button">
          <MdAdd />
        </div>
      </>
    );
  }
}

export default Button;
