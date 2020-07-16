import React, { Component } from 'react';
import faker from 'faker';
import StoryItem from './StoryItem/StoryItem';
import Feed from './Feed/Feed';
import StoryModal from './StoryModal/StoryModal';
import Dimmer from './Dimmer/Dimmer';
import './MainContent.scss';

class MainContent extends Component {
  state = { stories: [], feeds: [], storyModalStatus : false, storyModal: null, timerId: null };

  componentDidMount() {
    const makeStories = () => {
      return {
        thumbnail: faker.image.avatar(),
        userName: faker.internet.userName().slice(0, 6)
      };
    };

    const makeComments = () => {
      return {
        userName: faker.internet.userName().slice(0,6),
        content: faker.lorem.sentence()
      }
    }

    const makeFeeds = () => {
      return {
        thumbnail: faker.image.avatar(),
        userName: faker.internet.userName().slice(0, 6),
        likes: faker.random.number() % 100,
        image: `/images/junchoi/feed${getRandomIntInclusive(1, 3)}.jpg`,
        paragraph: faker.lorem.paragraph(),
        hashes: myRepeat(faker.lorem.word, 3),
        comments: myRepeat(makeComments, 2),
        post_id: 2 
      };
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const myRepeat = (func, times) => {
      let i = 1;
      const results = [];
      while (i <= times) {
        results.push(func());
        i += 1;
      }
      return results;
    };

    const stories = myRepeat(makeStories, 20);
    const feeds = myRepeat(makeFeeds, 15);


    this.setState({ stories, feeds });
  }

  onStoryClick = (storyModal, timerId) => {
    this.setState({ storyModalStatus: true, storyModal, timerId });    
  }

  modalOff = () => {
    clearTimeout(this.state.timerId);
    this.setState({ storyModalStatus: false, storyModal: null});
  }

  render() {
    return(
      <div className="MainContent_J">
        {this.state.storyModalStatus && <StoryModal storyModal={this.state.storyModal} /> }
        {this.state.storyModalStatus && <Dimmer modalOff={this.modalOff} /> }
        <div className="main-stories">
          {this.state.stories.map((story, index) => {
            return <StoryItem key={story.userName + index} 
                      story={story} 
                      onStoryClick={this.onStoryClick}
                      modalOff={this.modalOff}
                   />
          })}
        </div>
        <div className="main-feeds">
          {this.state.feeds.map((feed, index) => {
            return <Feed key={feed.userName + index} feed={feed}/>
          })}
        </div>
      </div>
    );
  }
}

export default MainContent;