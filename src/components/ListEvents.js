import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEvents } from "../store/actions";
import { useHistory, Link } from 'react-router-dom'
import '../scss/ListEvents.scss'
function ListEvents({ getEvents, events, isLoading, errors, userID, eventsList, rsvps }) {
  //let list
  const { push } = useHistory()

  useEffect(() => {
    getEvents(userID);
  }, [getEvents, userID]);

  if (isLoading) {
    return <h2>Loading events...</h2>;
  } else if (errors) {
    return (
      <>
        <h2>Uh oh, something went wrong</h2>
        {console.log(errors)}
      </>
    );
  }
  // if (eventsList === 'events') {
  //   list = [...events]
  // } else if (eventsList === 'rsvps') {
  //   list = [...rsvps]
  // }

  return (
    <div className='upcomingEvents'>
      <h2>Upcoming Events</h2>
      {events &&
        events.map((event) => {
          return (        
            
            <div className='eventLink' >
            <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>
            <div key={event.id}>
              <p>Event:  {event.title}</p>
              <p>Location:  {event.location}</p>
              <p>Date:  {event.month}/{event.day}/{event.year}</p>
              <p>Time:  {event.time_From}-{event.time_To}</p>
            </div>
            </Link>
            </div>

          );
        })}
    </div>
  );
}

const mapState = (state) => {
  return {
    events: state.event.events,
    rsvps: state.event.rsvps,
    isLoading: state.event.isLoading,
    errors: state.event.errors,
    userID: state.user.id,
  };
};

export default connect(mapState, { getEvents })(ListEvents);