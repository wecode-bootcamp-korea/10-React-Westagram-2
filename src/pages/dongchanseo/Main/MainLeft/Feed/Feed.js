import React, { Component } from "react";
import FeedNav from "./Nav/FeedNav";
import FeedMain from "./Main/FeedMain";
import Heart from "./Heart/Heart";
import FragmentComment from "./Comment/FragmentComment";
import "./Feed.scss";

class Feed extends Component {
  render() {
    return (
      <>
        <div className="Feed_DC">
          <FeedNav id={this.props.id} />
          <FeedMain />
          <Heart />
          <FragmentComment />
        </div>
      </>
    );
  }
}

export default Feed;
