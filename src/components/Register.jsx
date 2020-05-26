import React from 'react'
import { EditorBorderStyle } from 'material-ui/svg-icons'

function Register(props){

       const {
       info,
       onInputChange,
       onSubmit,
       errors

    }=props

    return(
       <>
       <form>
     <h1>Welcome to Potluck Planner</h1>

     <label>Name:&nbsp;

    <input type='text' 
       name='name'
        value={info.name} 
       onChange={onInputChange}/>

    </label>

     <label> Username:&nbsp;

     <input type='text' 
            name='username'
             value={info.username} 
            onChange={onInputChange}/>

    </label>

    <div>{errors.username}</div>

     <label> Password:&nbsp; 

     <input type='password'
             name='password' 
             value={info.password}
             onChange={onInputChange}/>
    </label>

     <div>{errors.password}</div>

     <button onClick={onSubmit}>Submit</button>
        </form>
     
      </>
    )
}

export default Register