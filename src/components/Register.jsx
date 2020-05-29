import React from 'react'
import '../scss/register.scss'

function Register(props){

       const {
       info,
       onInputChange,
       onSubmit,
       errors

    }=props

    return(
       <div className="registerContainer">
       <form className="registerForm">
     <h1>Welcome Aboard</h1>
     <div className="textArea">
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

    <div className='errorMessage'>{errors.username}</div>

     <label> Password:&nbsp; 

     <input type='password'
             name='password' 
             value={info.password}
             onChange={onInputChange}/>
    </label>

     <div className='errorMessage'>{errors.password}</div>
     </div>

     <button onClick={onSubmit}>Submit</button>
        </form>
     
      </div>
    )
}

export default Register