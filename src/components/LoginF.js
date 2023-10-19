import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import './LoginFormStyles.css'


function LoginForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      console.log(data);

      if (data.errors) {
        if (data.errors.email) setEmailError(data.errors.email);
        if (data.errors.password) setPasswordError(data.errors.password);
      }

      if (data.user) {
        navigate('/News'); // Use navigate to redirect
      }

      // Handle the JSON response data here
      console.log('Response data:', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <form className="Lform" noValidate autoComplete="off">
        <h1 className="form-heading">Login</h1>

        <FormControl fullWidth>
          <TextField
            id="email"
            className="email"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="emailerror">{emailError}</div>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="password"
            className="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="passworderror">{passwordError}</div>
        </FormControl>

        <Button
          className="btn-light"
          variant="contained"
          style={{ top: '20px' }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
