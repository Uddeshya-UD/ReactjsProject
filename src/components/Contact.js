import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactStyles.css'
import Button from '@mui/material/Button';


const Contact = () => {


  const [state, handleSubmit] = useForm("xyyaqlyz");
  if (state.succeeded) {
      alert("Message sent!")
  }


  return (
    <div className='mainclass'>
      <form className="Cform" component="form" onSubmit={handleSubmit}>
      <h1 className="form-heading">Contact Us !</h1>

         <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    

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