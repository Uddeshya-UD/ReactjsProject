import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

import './BmrComponentStyles.css'

const BmrCalculator = () => {

    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender,setGender] = useState('')

          const handleGenderChange = (event, newGender) => {
            setGender(newGender);
          };
  
    const handleClick = (e) => {
      e.preventDefault();
      const customer = { name, weight, height, age , gender };
      let bmr = 0;

      if(gender === "M"){
       bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
         bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
      }
      
      console.log(customer);

      var bmrElement = document.getElementById('bmr');
      bmrElement.value = bmr;
    };
  
  return (
<div className="main">
              
            <form
                className="Bform"
                component="form"
                noValidate
                autoComplete="off"
              >
                <h1 className='form-heading'> BMR Calculator </h1>

        
                    
                  <TextField
                    placeholder="Enter Name"
                    id="form-field"
                    variant="outlined"
                    value={name}
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField 
                  className="textfield-height"
                    placeholder="Enter Height"
                    id="form-field"
                    variant="outlined"
                    value={height}
                    label="Height"
                    onChange={(e) => setHeight(e.target.value)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <span className="input-adornment">cm</span>
                      ),
                    }}
                  />
                  <TextField
                    className="textfield-weight"
                    placeholder="Enter Weight"
                    id="form-field"
                    variant="outlined"
                    label="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <span className="input-adornment">kg</span>
                      ),
                    }}
                  />

                  <TextField
                    placeholder="Enter Age"
                    className="textfield-age"
                    id="form-field"
                    label="Age"
                    variant="outlined"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <span className="input-adornment">years</span>
                      ),
                    }}
                  />

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



        <TextField
  className="textfield-bmr"
  placeholder="BMR: "
  id="bmr"
  variant="filled"
  fullWidth
  disabled
  InputProps={{
    endAdornment: (
      <span className="input-adornment">calories/day</span>
    )
  }}
/>

<Button
                className='btn-light'    
                  variant="contained"
                    onClick={handleClick}
                    style={{ top: '20px' }}
                  >
                    Register
                  </Button>
              </form>   
        </div>
  )
}

export default BmrCalculator