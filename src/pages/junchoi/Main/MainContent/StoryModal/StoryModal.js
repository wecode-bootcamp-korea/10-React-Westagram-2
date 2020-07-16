import React, { Component } from 'react';
import './StoryModal.scss';

const body = document.querySelector('#body');
class StoryModal extends Component {
  state = { status: false };

  componentDidMount() {
    body.setAttribute("style", "overflow: hidden;");
    this.setState({ status: true });
  }

  componentWillUnmount() {
    body.removeAttribute("style");
    this.setState({ status: false });
  }

  render() {
    const { storyModal } = this.props;

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
      <div className="StoryModal_J">
        <div className="content">
          <div className="header-wrapper">
            <div className="header">
              <img src={storyModal.thumbnail} alt='story-profile' />
              <div className="user-id">
                {storyModal.userName}
              </div>
              <div className="time">
                15시간전
              </div>
              <i className="ellipsis horizontal icon"></i>
            </div>
          </div>
          <div className="status-bar"></div>
          <div className={`progress-bar ${this.state.status ? 'active' : ''}`}></div>
          <img className="main-image" src={`/images/junchoi/story${getRandomIntInclusive(1, 3)}.jpg`} alt='story-main'/>
          <div className="bottom">
            <div className="area-wrapper">
              <textarea placeholder="메세지 보내기"></textarea>
            </div>
            <i className="paper plane outline icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryModal;