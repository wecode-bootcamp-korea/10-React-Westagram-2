import React, { Component } from 'react';
import './Dimmer.scss';

class Dimmer extends Component {
  render() {
    return (
      <div className="Dimmer_J" onClick={this.props.modalOff}>
      </div>
    )
  }
}

export default Dimmer;