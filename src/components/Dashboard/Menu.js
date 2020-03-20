import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import EventCard from "./EventCard"

export default class PartyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [
        {id: 1, date: "Febuary 23th", time: "8pm", title: "scooby doo scary monster", host: "john", private: true, members: "5", location: "163 street drive"},
        {id: 6, date: "Febuary 28th", time: "7pm", title: "scooby doo scary monster 2!!", host: "sam", private: true, members: "16", location: "123 street"},
      ],
      myEvents: [
        {id: 3, date: "Febuary 11th", time: "1pm", title: "netflix n chill", host: "bob", private: true, members: "2", location: "netflix.com"},
        {id: 4, date: "Febuary 10th", time: "9pm", title: "random anime", host: "jake", private: false, members: "6", location: "123 street"},
      ],
      invitedEvents: [
        {id: 5, date: "Febuary 24th", time: "6pm", title: "sonic night", host: "ron", private: true, members: "13", location: "123 street"},
      ],
      pastEvents: [
        {id: 2, date: "Febuary 7th", time: "5pm", title: "Joker party", host: "joe", private: false, members: "8", location: "1233 AMC"},
      ],
      activeItem: 'Upcoming'
    }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name  })

  render() {
    const { activeItem } = this.state

    const partyDisplayController = () => {
      switch(activeItem) {

        case "Upcoming":   return this.state.upcomingEvents.map(event => {
          return <EventCard 
            key={event.id}
            title={event.title} 
            date={event.date}
            time={event.time} 
            host={event.host}
            location={event.location} 
            private={event.private} 
            members={event.members}/>
        });

        case "My Parties":   return this.state.myEvents.map(event => {
          return <EventCard 
            key={event.id}
            title={event.title} 
            date={event.date}
            time={event.time} 
            host={event.host}
            location={event.location} 
            private={event.private} 
            members={event.members}/>
        });

        case "Invites":   return this.state.invitedEvents.map(event => {
          return <EventCard 
            key={event.id}
            title={event.title} 
            date={event.date}
            time={event.time} 
            host={event.host}
            location={event.location} 
            private={event.private} 
            members={event.members}/>
        });

        case "Past":   return this.state.pastEvents.map(event => {
          return <EventCard 
            key={event.id}
            title={event.title} 
            date={event.date}
            time={event.time} 
            host={event.host}
            location={event.location} 
            private={event.private} 
            members={event.members}/>
        });

        default:      return <h1>No parties here!</h1>
      }
    }
    return (
      <div>
      <div className="menuContainer">
        <Menu pointing secondary>
          <Menu.Item
            name='Upcoming'
            active={activeItem === 'Upcoming'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='My Parties'
            active={activeItem === 'My Parties'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Invites'
            active={activeItem === 'Invites'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Past'
            active={activeItem === 'Past'}
            onClick={this.handleItemClick}
          />
        </Menu>
        </div>
        <div className="dashboardEventContainer">

        {partyDisplayController()}

        </div>
        
        
        </div>
    )
  }
}