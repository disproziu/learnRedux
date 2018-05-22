import React, {Component} from 'react'
import EventList from '../events/EventsList'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>Events page</h1>
        <EventList />
      </div>
    )
  }
}

export default EventsPage 