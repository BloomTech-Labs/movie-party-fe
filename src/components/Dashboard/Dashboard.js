import React, { Component } from 'react';
import "./dashboard.css";
import EventCard from "./EventCard";
import AddPartyModal from "./AddPartyModal"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {id: 1, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster"},
        {id: 2, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster TWO!!!"},
        {id: 3, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster 3"},
        {id: 4, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster FOUR???"},
        {id: 5, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster fiv--"},
        {id: 6, date: "Febuary 28th", time: "8pm", title: "scooby doo scary monster & six!"},
      ],
    }
  }
  render() {
    console.log(this.state.events)
    return (
      <div>
        <div className="dashboardHeader">
          <h3>Upcoming Parties</h3>
          <h3>Filter</h3>
          <AddPartyModal />
        </div>
      
        <div className="dashboardEventContainer">
          { this.state.events.map(event => {
            return <EventCard key={event.id} title={event.title} date={event.date} time={event.time}/>
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;