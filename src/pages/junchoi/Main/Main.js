import React, { Component } from 'react';
import './Main.scss';

import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MainRight from './MainRight/MainRight';

class Main extends Component {
  render() {
    return (
      <div className="main-container">
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