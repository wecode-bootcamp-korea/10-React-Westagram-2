import React from "react";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";
import Stories from "./Stories/Stories";
import MainRight from "./MainRight/MainRight";
import SearchDropDown from "./SearchDropDown/SearchDropDown";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main_KSY">
        <Nav />
        <SearchDropDown />
        <main className="main-box">
          <div className="left">
            <Stories />
            <Feeds />
          </div>
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
