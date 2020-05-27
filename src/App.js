import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { login as userLogin, register as registerUser } from './store/actions'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import { Switch ,Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import axios from 'axios'

 
const initialLogin={
  username:'',
  password:''
}

const initialFormErrors={
  username: '',
  password: '',
}

const initialRegister={
    name: '',
    username:'',
    password:'',
    confirmPassword:'',
}

function App({isValidating, errors, name, userLogin, registerUser}) {
  const { push } = useHistory()

  const [login, setLogin] = useState(initialLogin)
  const [register,setRegister] = useState(initialRegister)
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
        //  console.log(login)
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
       // console.log(register)
     }

  const onLogin= evt => {
    evt.preventDefault();
    console.log('login button clicked')
    userLogin(login)
    if (errors.length){
      setTimeout(() => {
        push('/')
      }, 1000)
    }
  }

  const onSubmit= evt => {
    evt.preventDefault();
    registerUser({
      name: register.name,
      username: register.username,
      password: register.password
    }) 
    console.log('Register button clicked')
  }

  return (
    <div className="App">
    <Switch>
      <PrivateRoute exact path='/' component={DashBoard} name={name} />
      <Route exact path="/login">
        <Login info={login} onInputChange={onInputChange} onLogin={onLogin} errors={formErrors} otherErrors={errors} />
      </Route>
      <Route exact path="/register">
        <Register info={register} onInputChange={registerOnInputChange} onSubmit={onSubmit} errors={formErrors}/>
      </Route>
    </Switch>
    </div>
  )
}

const mapState = state => {
  return ({
    isValidating: state.user.isValidating,
    name: state.user.name,
    errors: state.user.errors,
  })
}

export default connect(mapState, { userLogin, registerUser })(App);
