import React, { Component } from "react";
import "./MyInfo.scss";

class MyInfo extends Component {
  render() {
    return (
      <div className="MyInfo">
        <div className="left">
          <img src="/images/dongchanseo/wecode_hansohee.jpg" />
        </div>
        <div className="right">
          <div className="right-profile">
            <p>wecode_bootcamp</p>
          </div>
          <div className="right-content">
            <p>weCode|위코드</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
