import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactStyles.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';




const Contact = () => {


  const [state, handleSubmit] = useForm("xyyaqlyz");
  if (state.succeeded) {
      alert("Message sent!")
  }


  return (
    <div className='mainclass'>
      <form className="Cform" component="form" onSubmit={handleSubmit}>
      <h1 className="form-heading">Contact Us !</h1>

      <FormControl fullWidth>
          <TextField
            id="name"
            className="name"
            label="Name"
            placeholder="Enter Name"
            variant="outlined"
          />
        <div className="emailerror"></div>
        </FormControl>

      <FormControl fullWidth>
          <TextField
            id="email"
            className="email"
            label="Email"
            placeholder="Enter Email"
            variant="outlined"
         />
        <div className="emailerror"></div>
        </FormControl>
        <FormControl fullWidth>
        <TextField
          id="outlined-multiline-flexible"
          label="Message"
          multiline
          maxRows={4}
        />
        </FormControl>

              <Button
                className='btn-light'    
                  variant="contained"
                    style={{ top: '20px' }} disabled={state.submitting}>
                    Send
                  </Button>
    </form>
    </div>
  );
}
export default Contact;