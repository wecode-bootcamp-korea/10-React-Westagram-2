import React, { Component } from "react";
import "./CreateMD.scss";

class CreateMD extends Component {
  render() {
    const { mdValid } = this.props;
    const component = (
      <div className="CreateMD">
        <p>모달 테스트</p>
        <div>
          <p>데이터</p>
        </div>
      </div>
    );

    return mdValid ? component : <div></div>;
  }
}

export default CreateMD;
