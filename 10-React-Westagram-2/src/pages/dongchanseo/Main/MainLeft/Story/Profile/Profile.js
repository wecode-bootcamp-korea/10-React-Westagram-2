import React, { Component } from "react";
import "./Profile.scss";

class Profile extends Component {
  render() {
    const imgSrc = `/images/dongchanseo/${this.props.data.img}.png`;
    return (
      <>
        <div className="Profile_DC">
          <div className="profile_img">
            <div className="img_container">
              <img src={imgSrc} />
            </div>
          </div>
          <div className="span_container">
            <span>{this.props.data.id}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
