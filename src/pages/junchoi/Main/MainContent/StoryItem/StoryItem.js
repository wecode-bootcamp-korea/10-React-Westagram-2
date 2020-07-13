import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './StoryItem.scss';

class Story extends Component {

  onStoryImageClick = () => {
    const { onStoryClick } = this.props;
    onStoryClick(this.props.story);
  }

  render() {
    const {thumbnail, userName} = this.props.story;
    return (
      <div className="StoryItem_J">
        <div onClick={this.onStoryImageClick} className="story-image-border">
          <img src={thumbnail} alt="thumbnail"/>
        </div>
        <div className="story-id">
          {userName}
        </div>
      </div>
    );
  }
}

export default withRouter(Story);