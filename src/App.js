import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { login as userLogin, register as registerUser } from './store/actions'
import PrivateRoute from './components/PrivateRoute'
import DashBoard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import { Switch ,Route, useHistory} from 'react-router-dom'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import axios from 'axios'
import AddEvent from './components/AddEvent'

 
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
    yup
      .reach(formSchema, name)
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
  }
    
  const registerOnInputChange = (evt) => {
    const {name,value}=evt.target
    yup
      .reach(formSchema, name)
      .validate(value)
      .then( valid => {
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
    setRegister({...register,[name]:value})
  }

  const onLogin= evt => {
    evt.preventDefault();
    userLogin(login)
    .then(res => {
      if (res === 200) {
        push('/')
      } 
    })
    setLogin(initialLogin)
  }

  const onSubmit= evt => {
    evt.preventDefault();
    registerUser({
      name: register.name,
      username: register.username,
      password: register.password
    }).then(status => {
      console.log(status)
      if (status === 201) {
        push('/login')
      }
    })
    setRegister(initialRegister) 
  }

  return (
    <div className="App">
    <Switch>
      <PrivateRoute exact path='/' component={DashBoard} />
      <Route exact path="/login">
        <Login info={login} onInputChange={onInputChange} onLogin={onLogin} errors={formErrors} otherErrors={errors} />
      </Route>
      <Route exact path="/register">
        <Register info={register} onInputChange={registerOnInputChange} onSubmit={onSubmit} errors={formErrors}/>
      </Route>
      <Route exact path='/addevent'>
      <AddEvent/>
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
