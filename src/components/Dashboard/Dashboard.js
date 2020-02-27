import React, { Component } from 'react';
import "./dashboard.css";
import EventCard from "./EventCard";

class Dashboard extends Component {
  render() {
    return (
      <div class="dashboardEventContainer">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    )
  }
}

export default Dashboard;