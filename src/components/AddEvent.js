import React , {useState} from 'react'

const initialEvent={ 

    title:'',
    description:'',
    location:'',
    month:'',
    day:'',
    year:'',
    time_From:'',
    time_To: '',
  
  
  }

function AddEvent(){

  
      const [event,setEvent]=useState(initialEvent)

      const onInputChange = (evt) => {
        const {name,value}=evt.target
        console.log(name,value)
        setEvent({...event,[name]:value})
      }

    const onSubmit=(evt)=>{
        evt.preventDefault();
        console.log("submit clicked")
    }

    return (
        <form>
            <h1> Add an Event</h1>

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
    )


}

export default AddEvent
