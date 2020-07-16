import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  render() {
    const { img, art, name, follow } = this.props;
    return (
      <div className="follow_profile">
        <div className="title_img_radius">
          <img src={img} alt={art} />
        </div>
        <div className="follow_form">
          <a className="follow_id" href="#">
            {name}
          </a>
          <a className="follow_subid sidebar_profile_name" href="#">
            {follow}
          </a>
        </div>
        <div className="follow_btn">
          <button>팔로우</button>
        </div>
      </div>
    );
  }
}

export default Story;
