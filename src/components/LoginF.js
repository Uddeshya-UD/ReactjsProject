import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import './LoginFormStyles.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const form = document.querySelector('.Lform');
  const emailError = document.querySelector('.emailerror')
  const passwordError = document.querySelector('.passworderror')

  const handleClick = (e) => {
    e.preventDefault();

      //reset error messages

      emailError.textContent = ''
      passwordError.textContent = ''

       // get values
    const email = form.email.value;
    const password = form.password.value;

    const customer = {
      email,
      password
    };
    console.log(customer);
    const getDevices = async () => {
      const settings = {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(customer)
      };
      try {
        //   const fetchResponse = await fetch(`http://localhost:3000/login`, settings);
                    const fetchResponse = await fetch(`http://52.66.244.135:3000/login `, settings);

          const data = await fetchResponse.json();
          console.log(data)

          if(data.errors){
            emailError.textContent = data.errors.email
            passwordError.textContent = data.errors.password
    
          }
    
        //   if(data.user){
        //     location.assign('/')
        //   }

      } catch (e) {
          return e;
      }    
  
  }
  getDevices();
  }
  return (
    <><div className="login">
      <form className="Lform" component="form" noValidate autoComplete="off">
        <h1 className="form-heading">Login</h1>

        <FormControl fullWidth>
          <TextField
            id="email"
            className="email"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        <div className="emailerror"></div>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="password"
            className="password"
            label="password"
            placeholder="Enter Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        <div className="passworderror"></div>

        </FormControl>


        <Button
                className='btn-light'    
                  variant="contained"
                    onClick={handleClick}
                    style={{ top: '20px' }}
                  >
                    Login
                  </Button>
      </form>
    </div></>
  
  );
};

export default LoginForm;
