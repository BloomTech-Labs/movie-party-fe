import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    return (
      <div className="eventCardContainer">
        <div className="eventCardImg"></div>
        <h5>{this.props.title}</h5>
        <p>{this.props.date}</p>
        <p>{this.props.time}</p>
      </div>
    )
  }
}

export default EventCard