import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    return (
      <div className="eventCardContainer">
        <div className="eventCardLeft">
          <div className="eventCardImg"></div>
          <div className="eventCardInfo">
            <h2>{this.props.title}</h2>
            <p>Host: {this.props.host}</p>
            {this.props.private? <p>Private Party</p> : <p>Public Party</p>}
            <p>{this.props.location}</p>
            <p>{this.props.date} {this.props.time}</p>
            <p>{this.props.members} People Are Attending</p>
          </div>
        </div>
        <div>
          <button>more info</button>
        </div>
        
      </div>
    )
  }
}

export default EventCard