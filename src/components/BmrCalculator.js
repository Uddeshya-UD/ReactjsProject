import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {
  Col,
  Row,
  Container,
  Button,
} from 'reactstrap';
import './BmrComponentStyles.css'

const BmrCalculator = () => {

    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
  
    const handleClick = (e) => {
      e.preventDefault();
      const customer = { name, weight, height, age };
      console.log(customer);
  
      const bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      console.log('bmr: ', bmr);
      var bmrElement = document.getElementById('bmr');
      bmrElement.value = bmr;
    };
  
  return (
<div class="main">
              
            <form
                className="form"
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
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <TextField 
                  className="textfield-height"
                    placeholder="Enter Height"
                    id="form-field"
                    variant="outlined"
                    value={height}
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

                  <TextField
                    className="textfield-bmr"
                    placeholder="BMR: "
                    id="bmr"
                    disabled
                    variant="filled"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <span className="input-adornment">calories/day</span>
                      ),
                    }}
                  />
                  <Button
                id = "register-btn"    
                  variant="contained"
                    onClick={handleClick}
                    style={{ top: '20px' }}
                  >
                    Calculate
                  </Button>
              </form>   
        </div>
  )
}

export default BmrCalculator