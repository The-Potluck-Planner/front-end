import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEvents } from "../store/actions";
import { useHistory, Link } from 'react-router-dom'

function ListEvents({ getEvents, events, isLoading, errors, userID, eventsList, rsvps }) {

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
  const list = (eventsList === events ? events : rsvps)
  console.log('THIS IS THE DATA',{list})
  return (
    <div>
      <h2>{(eventsList === events ? 'Hosted Events' : 'Invitations')}</h2>
      {list &&
        list.map((event) => {
          return (
            <Link to={`/events/${event.id}`}>
            <div key={event.id}>
              <p>Event: {event.title}</p>
              <p>Location:{event.location}</p>
              <p>Date: {event.month} {event.day} {event.year}</p>
              <p>Time: {event.time_From}-{event.time_To}</p>
              <button onClick={() => push(`/edit/${event.id}`)} >Edit Event</button>
            </div>
            </Link>
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
    userID: state.user.name,
  };
};

export default connect(mapState, { getEvents })(ListEvents);