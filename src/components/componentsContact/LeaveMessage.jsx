import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const LeaveMessage = () => {

  const emailRegEx = new RegExp (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("First name must be provided.")
        .min(2, "First name must consist of at least two characters."),
    
      email: Yup.string()
        .required("Email must be provided.")
        .matches(emailRegEx, "Provide a valid email address."),
    
      message: Yup.string()
        .required("A message must be provided.")
        .min(2, "The message must consist of at least two characters."),
    }),
    
  
    onSubmit: async (values) => {
      console.log('Submitting values:', values);
    
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      });
    
      console.log('Result status:', result.status);
    
      switch (result.status) {
        case 200:
          document.getElementById("status-message").innerHTML = `
          <div class="alert alert-success" role="alert">
          Your registration was successful!
          </div>`
          break;
    
        case 400:
          alert('Something went wrong')
          document.getElementById("status-message").innerHTML = `
          <div class="alert alert-warning" role="alert">
          ${result}
          </div>`
          break;
      }
    }
    
  })

  return (
    <section className="leave-message">
      <div className="container">
        <div className="form-wrapper">
          <h3>Leave us a message <br /> for any information.</h3>

          <form onSubmit={form.handleSubmit} noValidate id="registerForm" method="post">
            <div className="mb-3">
            <label className={form.className && form.errors.name ? 'error': ''}>{form.touched.name ? form.errors.name : ''}</label>
              <input className="form-input" type="text" id="Name" title="Name" placeholder="Name*" tabIndex="1" name='name' value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
            </div>

            <div className="mb-3">
            <label className={form.className && form.errors.email ? 'error': ''}>{form.touched.email ? form.errors.email : ''}</label>
              <input className="form-input" type="email" id="email" title="Email*" placeholder="Email*" tabIndex="2" name='email' value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
            </div>

            <div className="mb-4">
            <label className={form.className && form.errors.message ? 'error': ''}>{form.touched.message ? form.errors.message : ''}</label>
              <textarea className="form-input" id="biography" name="message" placeholder="Your Message*" tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} ></textarea>
            </div>

            <div className="d-grid">
              <button className="btn-yellow" type="submit" tabIndex="4">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
            </div>
          </form>
          <div id="status-message"></div>
        </div>
      </div>
    </section>
  );
};

export default LeaveMessage;
