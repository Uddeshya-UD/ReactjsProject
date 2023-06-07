import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import './RegisterFormStyle.css'

const RegisterForm = () => {
  const [firstname, setFName] = useState('');
  const [secondname, setSName] = useState('');
  const [mobile, setMobile] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  const handleGenderChange = (event, newGender) => {
    setGender(newGender);
  };


  const handleClick = (e) => {
    e.preventDefault();
    const customer = {
      firstname,
      secondname,
      mobile,
      age,
      gender,
      email
    };
    console.log(customer);
    // fetch('http://localhost:8080/customer/save', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(customer),
    //   mode: 'no-cors'
    // });
  };

  return (
    <><div className="register">
      <form className="Rform" component="form" noValidate autoComplete="off">
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

        <ToggleButtonGroup
          value={gender}
          exclusive
          onChange={handleGenderChange}
          aria-label="gender"
          fullWidth
        >
          <ToggleButton value="M">Male</ToggleButton>
          <ToggleButton value="F">Female</ToggleButton>
        </ToggleButtonGroup>


        <FormControl fullWidth>
          <TextField
            id="email"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <Button
                className='btn-light'    
                  variant="contained"
                    onClick={handleClick}
                    style={{ top: '20px' }}
                  >
                    Register
                  </Button>
      </form>
    </div></>
  
  );
};

export default RegisterForm;
