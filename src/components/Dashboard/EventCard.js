import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    console.log("in eventcard")
    return (
      <div className="eventCardContainer">
        <div className="eventCardImg"></div>
        <h5>{this.props.title}</h5>
        <p>date</p>
        <p>time</p>
      </div>
    )
  }
}

export default EventCard