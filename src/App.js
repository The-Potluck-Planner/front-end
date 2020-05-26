import React ,{useState}from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import {Switch,Route} from 'react-router-dom'


   
const initialLogin={
  username:'',
  password:''
}

const iniitialRegister={
     username:'',
     password:'',
     confirmPassword:'',
     email:''

}

function App() {

       const [login, setLogin]=useState(initialLogin)
       const [register,setRegister]=useState(iniitialRegister)

       const onInputChange = (evt) => {
          const {name,value}=evt.target
          setLogin({...login,[name]:value})
          console.log(login)
       }
    
       const registerOnInputChange = (evt) => {
        const {name,value}=evt.target
        setRegister({...register,[name]:value})
        console.log(register)
     }
  return (
    
      <div className="App">

    <Switch>
      <Route exact path="/">
    <Login info={login} onInputChange={onInputChange}/>
      </Route>

      <Route exact path="/register">
        <Register info={register} onInputChange={registerOnInputChange}/>
        </Route>

    </Switch>


    </div>


  );
}

export default App;
