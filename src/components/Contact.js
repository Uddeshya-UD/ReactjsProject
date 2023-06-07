import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactStyles.css'

const Contact = () => {


  const [state, handleSubmit] = useForm("xyyaqlyz");
  if (state.succeeded) {
      alert("Message sent!")
  }


  return (
    <div className='main'>
      <form className="form" onSubmit={handleSubmit}>
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
      <button className="btn-light" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default Contact;