import React, { Component } from 'react';
import "./dashboard.css";
import EventCard from "./EventCard";
import AddPartyModal from "./AddPartyModal"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {id: 1, date: "Febuary 23th", time: "8pm", title: "scooby doo scary monster", host: "john", private: true, members: "5"},
        {id: 2, date: "Febuary 7th", time: "5pm", title: "Joker party", host: "joe", private: false, members: "8"},
        {id: 3, date: "Febuary 11th", time: "1pm", title: "netflix n chill", host: "bob", private: true, members: "2"},
        {id: 4, date: "Febuary 10th", time: "9pm", title: "random anime", host: "jake", private: false, members: "6"},
        {id: 5, date: "Febuary 24th", time: "6pm", title: "sonic night", host: "ron", private: true, members: "13"},
        {id: 6, date: "Febuary 28th", time: "7pm", title: "scooby doo scary monster 2!!", host: "sam", private: true, members: "16"},
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
            return <EventCard 
              key={event.id}
              title={event.title} 
              date={event.date}
              time={event.time} 
              host={event.host} 
              private={event.private} 
              members={event.members}/>
          })}
        </div>
      </div>
    )
  }
}

export default Dashboard;