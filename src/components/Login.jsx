import React from 'react'
import {Link} from 'react-router-dom'
function Login(props){

    const {
       info,
       onInputChange,
       onLogin,
       errors, 

    }=props

   return(
       <>

    <form>

     <h1>Welcome to Potluck Planner</h1>

     <label> username:&nbsp;   

     <input type='text' 
            name='username'
             value={info.username} 
            onChange={onInputChange}/>
    </label>

    <div>{errors.username}</div>

     <label> password:&nbsp; 

     <input type='password'
             name='password' 
             value={info.password}
             onChange={onInputChange}/>

    </label>

     <div>{errors.password}</div>

     <button onClick={onLogin}>Login</button>
        </form>

     <Link to='./register'>
       dont't have an account? Register now.
     </Link>


    </>

   )

}


export default Login