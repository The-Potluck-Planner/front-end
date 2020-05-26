import React ,{useState}from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import {Switch,Route} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'

   
const initialLogin={
  username:'',
  password:''
}

const initialRegister={
     name: '',
     username:'',
     password:'',

}

const initialFormErrors={
  username: '',
  password: '',
}

function App() {

       const [login, setLogin]=useState(initialLogin)
       const [register,setRegister]=useState(initialRegister)
       const [formErrors, setFormErrors]=useState(initialFormErrors)

       const onInputChange = (evt) => {

          const {name,value}=evt.target

          yup.reach(formSchema, name)
              .validate(value)
              .then(valid=>{
                setFormErrors({
                  ...formErrors,
                  [name]: ''
                })
              })
              .catch((err)=>{
                setFormErrors({
                  ...formErrors,
                  [name]: err.errors[0]
                })
              })
              
          
          setLogin({...login,[name]:value})
          console.log(login)
       }
    
       const registerOnInputChange = (evt) => {
        const {name,value}=evt.target

        yup.reach(formSchema, name)
              .validate(value)
              .then(valid=>{
                setFormErrors({
                  ...formErrors,
                  [name]: ''
                })})
              .catch((err)=>{
                setFormErrors({
                  ...formErrors,
                  [name]: err.errors[0]
                })
              })
            
        setRegister({...register,[name]:value})
        console.log(register)
     }

     const onLogin=(evt)=>{
      
      evt.preventDefault(); 
      console.log('login button clicked')

      const newUser={...login}

      postNewUser(newUser,'login')

     }

     const onSubmit=(evt)=>{
      evt.preventDefault(); 
       console.log('submit button clicked')

      const newUser={...register}

      postNewUser(newUser,'register')
     }

      const postNewUser=(newUser,endpoint)=>{
        console.log('I am at postNewUser')
        console.log(newUser)

        axios.post(`https://thepotluckplanner.herokuapp.com/auth/${endpoint}`, newUser)
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          if(err.response){    
             console.log(err.response.data)}
     
        })
      }

  return (
    
      <div className="App">

    <Switch>
      <Route exact path="/login">
    <Login info={login} onInputChange={onInputChange} onLogin={onLogin} errors={formErrors}/>
      </Route>

      <Route exact path="/register">
        <Register info={register} onInputChange={registerOnInputChange} onSubmit={onSubmit} errors={formErrors}/>
        </Route>

    </Switch>


    </div>


  )
}

export default App;
