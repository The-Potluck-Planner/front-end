import React from 'react'
import {Link} from 'react-router-dom'
function Login(props){

    const {
       info,
       onInputChange,

    }=props

   return(
       <>
       <form>

     <h1>Welcome to Potluck Planner</h1>

     <label> username:&nbsp;   </label>

     <input type='text' 
            name='username'
             value={info.username} 
            onChange={onInputChange}/>

     <label> password:&nbsp; </label>

     <input type='password'
             name='password' 
             value={info.password}
             onChange={onInputChange}/>

     <button>Login</button>
        </form>

     <Link to='./register'>
       dont't have an account? Register now.
     </Link>


    </>

   )

}


export default Login