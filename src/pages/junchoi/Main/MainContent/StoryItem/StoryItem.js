import React, { Component } from 'react';
import './StoryItem.scss';

class Story extends Component {
  render() {
    const {thumbnail, userName} = this.props.story;
    return (
      <div className="story-item">
        <div className="story-image-border">
          <img src={thumbnail} alt="thumbnail"/>
        </div>
        <div className="story-id">
          {userName}
        </div>
      </div>
    );
  }
}

export default Story;