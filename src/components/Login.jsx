import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Login(props) {

  const isValidating = useSelector((state) => state.user.isValidating);

  const { info, onInputChange, onLogin, errors } = props;

  if (isValidating) {
     return (
        <h2>Logging in</h2>
     )
  }

  return (
    <>
      <form>
        <h1>Welcome to Potluck Planner</h1>
        {props.otherErrors && <div>{props.otherErrors}</div>}
        <label>
          username:&nbsp;
          <input
            type="text"
            name="username"
            value={info.username}
            onChange={onInputChange}
          />
        </label>
        <div>{errors.username}</div>
        <label>
          password:&nbsp;
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={onInputChange}
          />
        </label>
        <div>{errors.password}</div>
        <button onClick={onLogin}>Login</button>
      </form>
      <Link to="./register">dont't have an account? Register now.</Link>
    </>
  );
}

export default Login;
