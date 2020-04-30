import React, { Component } from "react";
import "./dashboard.css";
import EventCard from "./EventCard";
import AddPartyModal from "./AddPartyModal";
import PartyMenu from "./Menu";

import { NavigationBar } from "../navigation";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          date: "Febuary 23th",
          time: "8pm",
          title: "scooby doo scary monster",
          host: "john",
          private: true,
          members: "5",
          location: "163 street drive",
        },
        {
          id: 2,
          date: "Febuary 7th",
          time: "5pm",
          title: "Joker party",
          host: "joe",
          private: false,
          members: "8",
          location: "1233 AMC",
        },
        {
          id: 3,
          date: "Febuary 11th",
          time: "1pm",
          title: "netflix n chill",
          host: "bob",
          private: true,
          members: "2",
          location: "netflix.com",
        },
        {
          id: 4,
          date: "Febuary 10th",
          time: "9pm",
          title: "random anime",
          host: "jake",
          private: false,
          members: "6",
          location: "123 street",
        },
        {
          id: 5,
          date: "Febuary 24th",
          time: "6pm",
          title: "sonic night",
          host: "ron",
          private: true,
          members: "13",
          location: "123 street",
        },
        {
          id: 6,
          date: "Febuary 28th",
          time: "7pm",
          title: "scooby doo scary monster 2!!",
          host: "sam",
          private: true,
          members: "16",
          location: "123 street",
        },
      ],
    };
  }
  render() {
    console.log(this.state.events);
    return (
      <div>
        <NavigationBar />
        <div className="dashboardHeader">
          <AddPartyModal />
        </div>

        <PartyMenu />

        <div className="dashboardHeader">
          <AddPartyModal />
        </div>
      </div>
    );
  }
}

export default Dashboard;
