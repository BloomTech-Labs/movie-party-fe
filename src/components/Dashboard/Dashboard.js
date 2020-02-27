import React, { Component } from 'react';
import "./dashboard.css";
import EventCard from "./EventCard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {title: "scooby doo scary monster"},
        {title: "scooby doo scary monster TWO!!!"},
        {title: "scooby doo scary monster 3"},
        {title: "scooby doo scary monster FOUR???"},
        {title: "scooby doo scary monster fiv--"},
        {title: "scooby doo scary monster & six!"},
      ],
    }
  }
  render() {
    console.log(this.state.events)
    return (
      <div>
        <h1>test</h1>
        <div className="dashboardEventContainer">
          { this.state.events.map(event => {
            return <EventCard title={event.title}/>
          })}
          
        </div>
      </div>
    )
  }
}

export default Dashboard;