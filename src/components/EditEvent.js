import React, { useState, useEffect } from "react";
import { connect,  } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { editEvent } from '../store/actions'
import { axiosWithAuth, BASE_URL } from '../utils/axiosAuth'
import '../scss/AddEvent.scss'

const initialEvent = {
  title: "",
  description: "",
  location: "",
  month: "",
  day: "",
  year: "",
  time_From: "",
  time_To: "",
  userID: 0,
};

function EditEvent({createEvent, isLoading, errors, userID, editEvent}) {
  const [event, setEvent] = useState(initialEvent);
  const { id } = useParams()
  const { push } = useHistory()

  useEffect(() => {
      console.log('USE EFFECT ENTERED')
    axiosWithAuth()
        .get(`${BASE_URL}api/events/${id}`)
        .then(res => {
            console.log('ABOUT TO SET DATA', res.data)
            setEvent(res.data[0])
        })
        .catch(err => console.log({err}))
  }, [id])

  const onInputChange = evt => {
    const { name, value } = evt.target;
    setEvent({ ...event, [name]: value });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const modifiedEvent = {
        ...event, 
        time_To: Number(event.time_To),
        time_From: Number(event.time_From)
    }
    delete modifiedEvent.id
    console.log('submit clicked', {modifiedEvent})
    editEvent(modifiedEvent, id)
        .then(res => {
            //res.success[0]
            push('/')
        })
  };

  return (
    <div className="addContainer">
    <h1> Add an Event</h1>
    <form  className="formArea">
      <label>
        Title:&nbsp;
        <input
          type="text"
          name="title"
          value={event.title}
          onChange={onInputChange}
        />
      </label>

      <label>
        Description:&nbsp;
        <input
          type="text"
          name="description"
          value={event.description}
          onChange={onInputChange}
        />
      </label>

      <label>
        Year:&nbsp;
        <input
          type="text"
          name="year"
          value={event.year}
          onChange={onInputChange}
        />
      </label>

      <label>
        Month:&nbsp;
        <input
          type="text"
          name="month"
          value={event.month}
          onChange={onInputChange}
        />
      </label>

      <label>
        Day:&nbsp;
        <input
          type="text"
          name="day"
          value={event.day}
          onChange={onInputChange}
        />
      </label>

      <label>
        Location:&nbsp;
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={onInputChange}
        />
      </label>

      <label>
        Time from:&nbsp;
        <input
          type="text"
          name="time_From"
          value={event.time_From}
          onChange={onInputChange}
        />
      </label>

      <label>
        Time to:&nbsp;
        <input
          type="text"
          name="time_To"
          value={event.time_To}
          onChange={onInputChange}
        />
      </label>

      <button onClick={onSubmit}>Submit</button>
    </form>
    </div>
  );
}

const mapState = state => {
  return ({
    isLoading: state.event.isLoading,
    errors: state.event.errors,
    userID: state.user.name
  })
}

export default connect(mapState, { editEvent })(EditEvent)
