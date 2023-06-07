import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import './RegisterFormStyle.css'

const RegisterForm = () => {
  const [firstname, setFName] = useState('');
  const [secondname, setSName] = useState('');
  const [mobile, setMobile] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const customer = {
      firstname,
      secondname,
      mobile,
      age,
      gender,
      username,
      password
    };
    console.log(customer);
    fetch('http://localhost:8080/customer/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer),
      mode: 'no-cors'
    });
  };

  return (
    <><div className="register">
      <form className="form" component="form" noValidate autoComplete="off">
        <h1 className="form-heading">Registration</h1>

        <FormControl fullWidth>
          <TextField
            id="firstname"
            label="First Name"
            onChange={(e) => setFName(e.target.value)} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Second Name"
            id="secondname"
            placeholder="Enter Surname"
            variant="outlined"
            value={secondname}
            onChange={(e) => setSName(e.target.value)} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="mobile"
            label="Mobile"
            placeholder="Enter Mobile"
            variant="outlined"
            value={mobile}
            onChange={(e) => setMobile(parseInt(e.target.value))} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="age"
            label="Age"
            placeholder="Enter Age"
            variant="outlined"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="gender"
            label="Gender"
            placeholder="Enter Gender"
            variant="outlined"
            value={gender}
            onChange={(e) => setGender(e.target.value)} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="username"
            label="Username"
            placeholder="Enter Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </FormControl>

        <Button
          id="register-btn"
          variant="contained"
          onClick={handleClick}
          style={{ marginTop: '20px' }}
        >
          Register
        </Button>
      </form>
    </div></>
  
  );
};

export default RegisterForm;
