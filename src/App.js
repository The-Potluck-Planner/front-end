import React ,{useState}from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import {Switch,Route} from 'react-router-dom'


   
const initialLogin={
  username:'',
  password:''
}

const initialRegister={
     username:'',
     password:'',
     confirmPassword:'',
     email:''

}


function App() {

       const [login, setLogin]=useState(initialLogin)
       const [register,setRegister]=useState(initialRegister)

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

     const onLogin=(evt)=>{
      
      evt.preventDefault(); 
      console.log('login button clicked')

     }

     const onSubmit=(evt)=>{
      evt.preventDefault(); 
       console.log('submit button clicked')
     }

  return (
    
      <div className="App">

    <Switch>
      <Route exact path="/login">
    <Login info={login} onInputChange={onInputChange} onLogin={onLogin}/>
      </Route>

      <Route exact path="/register">
        <Register info={register} onInputChange={registerOnInputChange} onSubmit={onSubmit}/>
        </Route>

    </Switch>


    </div>


  );
}

export default App;
