import React, { Component } from 'react';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
  }

  render() {
    return (
      <div class="eventCardContainer">
        <div class="eventCardImg"></div>
        <h5>Title</h5>
        <p>date</p>
        <p>time</p>
      </div>
    )
  }
}

export default EventCard