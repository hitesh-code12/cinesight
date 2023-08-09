// src/components/Login.js

import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import styles  from "./Login.module.scss";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // For simplicity, let's assume successful login
    setIsLoggedIn(true);
  };

//   if (isLoggedIn) {
//     return <Redirect to="/Home" />;
//   }

  return (
    <div className={styles[login-container]}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
