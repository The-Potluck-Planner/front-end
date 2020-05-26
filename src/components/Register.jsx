import React from 'react'

function Register(props){

 

       const {
       info,
       onInputChange,
       onSubmit

    }=props

    return(
       <>
       <form>

     <h1>Welcome to Potluck Planner</h1>

     <label> Username:&nbsp;

     <input type='text' 
            name='username'
             value={info.username} 
            onChange={onInputChange}/>

    </label>

     <label> Password:&nbsp; 

     <input type='password'
             name='password' 
             value={info.password}
             onChange={onInputChange}/>
    </label>
            
       <label> Confirm Password:&nbsp; 

     <input type='password'
             name='password' 
             value={info.confirmaPssword}
             onChange={onInputChange}/>

    </label>

    <label> Email:&nbsp; 

    <input type='text'
        name='email' 
        value={info.email}
        onChange={onInputChange}/>

    </label>

     <button onClick={onSubmit}>Submit</button>
        </form>
     
      </>
    )
}

export default Register