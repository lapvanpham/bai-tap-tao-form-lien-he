import React from 'react'

function ContactForm() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    emailIsValid: false
  })

  const validateEmail = function () {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!form.email || regex.test(form.email) === false) {
      setForm({
        ...form,
        emailIsValid: false
      });
      return false;
    }
    setForm({
      ...form,
      emailIsValid: true
    });
    return true;
  }

  const handleChange = function (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    if (validateEmail()) {
      alert('Form submitted');
    } else {
      alert('Form not submitted');
    }
  }

  return (
    <div className='ContactForm'>
      <h1>Contact Form</h1>
      <form>
        <div className="input-container">
          <label>Name:</label>
          <input onChange={handleChange} type='text' name='name' />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input onChange={handleChange} type='text' name='email' />
        </div>
        <div className="input-container">
          <label>Phone:</label>
          <input onChange={handleChange} type='text' name='phone' />
        </div>
        <div className="input-container">
          <label>Message:</label>
          <textarea onChange={handleChange} name='message'></textarea>
        </div>
        <div className="input-container">
          <input onClick={handleSubmit} type='submit' value='Add to Phonebook' />
        </div>
      </form>
    </div>
  )
}

export default ContactForm;