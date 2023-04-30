import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"

const LoginForm = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const users=[
  {name:"chana" , password:"ch020801"},
  {name:"hodya" , password:"hr181201"},
  {name:"use3" , password:"pass3"}
  ];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    

    const user = users.findIndex((user) => user.name === name && user.password===password);
    if (user !== -1) {
      // Successful login
      alert('Login successful!');
      navigate('/admin');
    } else {
      // Invalid credentials
      alert('Invalid name or password,try again');
    }
  };

  return (
    <div class="container">
      <div class="login-container">
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
