import React, { Component } from "react";
import Profile from "./Profile/Profile";
import "./Story.scss";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { index: 0, id: "sdc", img: "hansohee" },
        { index: 1, id: "sdm", img: "hansohee" },
        { index: 2, id: "soggd", img: "hansohee" },
        { index: 3, id: "adh1123", img: "hansohee" },
        { index: 4, id: "99_111", img: "hansohee" },
        { index: 5, id: "92_data_data", img: "hansohee" },
      ],
    };
  }

  render() {
    const profileList = this.state.list.map((data, index) => (
      <li key={index}>
        <Profile data={data} />
      </li>
    ));

    return (
      <>
        <div className="Story_DC">
          <div className="story-container">
            <ul>{profileList}</ul>
          </div>
        </div>
      </>
    );
  }
}

export default Story;
