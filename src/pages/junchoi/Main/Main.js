import React, { Component } from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MainRight from './MainRight/MainRight';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="Main_J">
        <Header />
        <div className="main-contents">
          <MainContent />
          <MainRight />
        </div>
      </div>
    );
  }
}

export default Main;