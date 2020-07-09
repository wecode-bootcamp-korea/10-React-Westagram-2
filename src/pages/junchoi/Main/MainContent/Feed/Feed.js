import React, { Component } from 'react';
import faker from 'faker';
import Comment from './Comment/Comment';

import './Feed.scss';

class Feed extends Component {
  state = { comments: this.props.feed.comments, commentInput: "" };

  onCommentFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.commentInput === "") return;

    const userName = faker.internet.userName().slice(0, 6);
    this.setState((prevState) => ({...prevState, comments: prevState.comments.push({
      userName,
      content: prevState.commentInput
    })}));
    this.setState({...this.state, commentInput: ""});
  }

  onCommentChange = (event) => {
    this.setState({...this.state, commentInput: event.target.value});
  }

  render() {
    const { thumbnail, userName, likes, image, paragraph, hashes, comments } = this.props.feed;
    return (
      <div className="feed">
         <div className="head">
           <img src={thumbnail} alt="profile"/>
           <div className="id">{userName}</div>
           <svg className="dots" fillRule="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clipRule="evenodd" cx="8" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="24" cy="24" fillRule="evenodd" r="4.5"></circle><circle clipRule="evenodd" cx="40" cy="24" fillRule="evenodd" r="4.5"></circle></svg>
          </div>
          <img width="100%"  src={image} alt="feed1"/>
          <div className="middle-icons">
            <svg className="icons" fillRule="#f54242" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            <svg className="icons" fillRule="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
            <svg className="icons" fillRule="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
            <div className="space"></div>
            <svg className="icons" fillRule="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
          </div>
          <div className="likes">좋아요 {likes}개</div>
          <div className="user-id">{userName}</div>
          <div className="paragraph"> 
            {paragraph} 
            {hashes.map((hash, index) => <span key={hash + index} className="hash"> #{hash}</span> )}
          </div>
          <div className="comments">
            {comments.map((comment, index) => <Comment key={comment.userName + index} comment={comment}/>)} 
          </div>
          <div className="time">17시간 전</div>
          <form className="comment-input-box" onSubmit={this.onCommentFormSubmit}>
            <input className="text" placeholder="댓글 달기..." value={this.state.commentInput} onChange={this.onCommentChange}/>
            <button type="submit" className="post">게시</button>
          </form >
      </div>
    );
  }
}

export default Feed;