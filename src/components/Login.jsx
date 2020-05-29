import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../scss/login.scss'


function Login(props) {

  const isValidating = useSelector((state) => state.user.isValidating);

  const { info, onInputChange, onLogin, errors } = props;

  if (isValidating) {
     return (
        <h2>Logging in</h2>
     )
  }

  return (
    <div className="formContainer">
      <form className="loginForm">
        <h2>Welcome Aboard</h2>
        <div className="errorMessage">{props.otherErrors && props.otherErrors}</div>
        <label>
          username:&nbsp;
          <input
            type="text"
            name="username"
            value={info.username}
            onChange={onInputChange}
          />
        </label>
        <div className="errorMessage">{errors.username}</div>
        <label>
          password:&nbsp;
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={onInputChange}
          />
        </label>
        <div className="errorMessage">{errors.password}</div>
        <button onClick={onLogin}>Login</button>
        <Link className="registerLink" to="./register">dont't have an account? Register now.</Link>
      </form>
 
    </div>
  );
}

export default Login;
